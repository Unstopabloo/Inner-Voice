import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../server/supabaseClient'
import { PropTypes } from 'prop-types'

const AuthContext = createContext()
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState([])
  const [sounds, setSounds] = useState([])

  async function signInWithGoogle() {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google'
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
