import Event from './Event'
import { UserAuth } from '../context/AuthContext'
import { useEffect } from 'react'

export default function Events() {
  const { events, getEvents } = UserAuth()

  useEffect(() => {
    getEvents()
  }, [])

  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold">Eventos</h2>
      <div>
        {events.map(event => {
          const date = new Date(event.created_at)
          return (
            <Event
              key={event.id}
              id={event.id}
              name={event.name}
              date={date.toLocaleDateString()}
              description={event.description.substring(0, 45) + '...'}
              creator={event.profiles.username.split(' ').slice(0, 2).join(' ')}
              attendees={event.assistants}
            />
          )
        })}
      </div>
    </section>
  )
}
