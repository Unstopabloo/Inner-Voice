import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../server/supabaseClient'
import { PropTypes } from 'prop-types'

const AuthContext = createContext()
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState([])
  const [sounds, setSounds] = useState([])

  const getURL = () => {
    let url =
      import.meta.env.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
      import.meta.env.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
      'http://localhost:3000/'
    // Make sure to include `https://` when not localhost.
    url = url.includes('http') ? url : `https://${url}`
    // Make sure to include a trailing `/`.
    url = url.charAt(url.length - 1) === '/' ? url : `${url}/`
    return url
  }

  async function signInWithGoogle() {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: getURL()
        }
      })

      if (error)
        return console.error(
          'Ocurrio un error durante la autenticacion: ',
          error
        )

      return data
    } catch (error) {
      console.log(error)
    }
  }

  async function signout() {
    const { error } = await supabase.auth.signOut()
    if (error) return console.error('Error al cerrar sesion: ', error)
  }

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        // console.log('supabase session: ', event)
        if (session === null) {
          console.log('No hay sesion activa')
          setUser(null)
          return
        } else {
          setUser(session?.user.user_metadata)
          // console.log('Datos del usuario: ', session?.user.user_metadata)
        }
      }
    )
    return () => {
      authListener.subscription
    }
  }, [])

  const getSounds = async () => {
    const { data, error } = await supabase.from('sounds').select('*')

    if (error) return console.error('Error al obtener los sonidos: ', error)

    console.log('sounds: ', data)
    setSounds(data)
  }

  return (
    <AuthContext.Provider
      value={{
        signInWithGoogle,
        signout,
        getSounds,
        sounds,
        user
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(AuthContext)
}

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}
