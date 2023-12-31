import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../server/supabaseClient'
import { PropTypes } from 'prop-types'
import { useBlogStore } from '../store/blogStore'

const AuthContext = createContext()
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState([])
  const [userProfile, setUserProfile] = useState([])
  const [posts, setPosts] = useState([])
  const [sounds, setSounds] = useState([])
  const [people, setPeople] = useState([])
  const [events, setEvents] = useState([])
  const [event, setEvent] = useState([])
  const [messages, setMessages] = useState([])
  const [eventUsers, setEventUsers] = useState([])
  const { setCurrentPostInfo } = useBlogStore(state => state)

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
          setUserProfile(session?.user)
          //console.log('Datos del usuario: ', session?.user.user_metadata)
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

    // console.log('sounds: ', data)
    setSounds(data)
  }

  const getPosts = async () => {
    const { data: blog_posts, error } = await supabase
      .from('blog_posts')
      .select(
        `
        id,
        title, 
        content, 
        created_at, 
        profiles (username, avatar_url)
      `
      )
      .order('created_at', { ascending: false })
      .limit(10)
    if (error) console.log('Error al obtener los posts ', error)
    setPosts(blog_posts)
    //console.log('Posts: ', blog_posts)
  }

  const getPost = async id => {
    const { data: blog_post, error } = await supabase
      .from('blog_posts')
      .select(
        `
        id,
        title, 
        content, 
        created_at, 
        profiles (username, avatar_url)
      `
      )
      .eq('id', id)
    if (error) console.log('Error al obtener el post ', error)
    setCurrentPostInfo(blog_post)
    //console.log('Post: ', blog_post)
  }

  const newPost = async (title, content) => {
    try {
      const {
        data: { user }
      } = await supabase.auth.getUser()
      if (user) {
        const user_id = user.id
        // console.log('Id del usuario actual: ', user_id)
        const { data, error } = await supabase.from('blog_posts').insert([
          {
            user_id,
            title,
            content
          }
        ])
        if (error) console.log('Error al crear el post: ', error)
        // console.log('Post creado: ', data)
      } else {
        console.log('No hay ninguna sesión activa')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getPeople = async () => {
    const { data: profiles, error } = await supabase
      .from('profiles')
      .select('*')
    if (error) console.log('Error al obtener los perfiles ', error)
    // console.log('Perfiles: ', profiles)
    setPeople(profiles)
  }

  const getEvents = async () => {
    let { data: events, error } = await supabase
      .from('events')
      .select(
        `id, name, description, assistants, created_at, creator_id, profiles (id, username, avatar_url)`
      )
      .order('created_at', { ascending: false })

    if (error) console.log('Error al obtener los eventos ', error)
    // console.log('Eventos: ', events)

    setEvents(events)
  }

  const getEvent = async id => {
    const { data: event, error } = await supabase
      .from('events')
      .select(
        `id, name, description, assistants, created_at, creator_id, profiles (id, username, avatar_url)`
      )
      .eq('id', id)

    if (error) console.log('Error al obtener el evento ', error)

    setEvent(event)
  }

  const getEventUsers = async id => {
    const { data: users, error } = await supabase
      .from('event_assistant')
      .select(
        `
            user_id (
              id,
              username,
              avatar_url
            )
          `
      )
      .eq('event_id', id)

    if (error) console.log('Error al obtener los usuarios del evento ', error)
    setEventUsers(users)
  }

  const newAssistant = async event_id => {
    const { error } = await supabase
      .from('event_assistant')
      .insert([{ event_id, user_id: userProfile.id }])
      .select()
    if (error) console.log('Error al agregar el usuario al evento ', error)
  }

  const newEvent = async (name, description) => {
    const { data, error } = await supabase
      .from('events')
      .insert([{ name, description, creator_id: userProfile.id }])
      .select()
    if (error) console.log('Error al crear el evento ', error)
    // console.log('Evento creado: ', data)
  }

  const handleNewMessage = async payload => {
    const newMessage = payload.new

    // Fetch the user data for the new message
    const { data: userData, error: userError } = await supabase
      .from('profiles')
      .select('username, avatar_url')
      .eq('id', newMessage.user_id)
    if (userError) console.error('Error fetching user data: ', userError)

    // Add the user data to the new message
    newMessage.user = userData[0]

    setMessages(prevMessages => [newMessage, ...prevMessages])
    console.log('Nuevo mensaje: ', newMessage)
  }

  const channel = supabase
    .channel('event-chat')
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'messages' },
      payload => {
        // const newMessage = payload.new
        // console.log('Change received!', newMessage)
        handleNewMessage(payload)
      }
    )
    .subscribe()

  const postMessage = async content => {
    const { data, error } = await supabase
      .from('messages')
      .insert([{ content, user_id: userProfile.id }])
      .select('id, content, created_at, user_id (username, avatar_url)')
    if (error) console.log('Error al agregar el mensaje ', error)
    //console.log('Mensaje enviado: ', data)
  }

  const fetchMessages = async () => {
    const { data, error } = await supabase
      .from('messages')
      .select('id, content, created_at, user_id (username, avatar_url)')
    if (error) console.error('Error fetching messages: ', error)
    //console.log('Mensajes: ', data)
  }

  return (
    <AuthContext.Provider
      value={{
        channel,
        signInWithGoogle,
        signout,
        getSounds,
        getPosts,
        getPost,
        newPost,
        getPeople,
        getEvents,
        getEvent,
        getEventUsers,
        newAssistant,
        postMessage,
        fetchMessages,
        newEvent,
        messages,
        eventUsers,
        people,
        posts,
        sounds,
        user,
        events,
        event
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
