import { useEffect } from 'react'
import { UserAuth } from '../context/AuthContext'
import { useEventStore } from '../store/eventStore'
import { Avatar, AvatarGroup, Button, Tooltip } from '@nextui-org/react'

export default function EventPage() {
  const { currentEventId } = useEventStore()
  const { getEvent, getEventUsers, event, eventUsers, newAssistant } =
    UserAuth()

  useEffect(() => {
    getEvent(currentEventId)
    getEventUsers(currentEventId)
  }, [])

  const handleAssist = () => {
    console.log('Asistire')
    newAssistant(currentEventId)
  }

  return (
    <section className="main-content-elements">
      {event.map(event => {
        return (
          <div
            key={event.id}
            className="flex flex-col items-start border-b-1 border-grayLight pb-10 p-3 gap-8"
          >
            <header className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold">{event.name}</h2>
              <p className="text-md w-2/3 text-fore">{event.description}</p>
            </header>
            <div className="flex justify-between items-center w-full">
              <div>
                <AvatarGroup isBordered max={3}>
                  {eventUsers.map(user => {
                    return (
                      <Tooltip
                        key={user.user_id.id}
                        content={user.user_id.username.split(' ')[0]}
                        classNames={{
                          base: [
                            // arrow color
                            'before:bg-dark-400 dark:before:bg-dark'
                          ],
                          content: [
                            'py-2 px-4 shadow-xl',
                            'text-black text-[12px] bg-gray'
                          ]
                        }}
                      >
                        <Avatar size="sm" src={user.user_id.avatar_url} />
                      </Tooltip>
                    )
                  })}
                </AvatarGroup>
              </div>
              <div>
                <Button
                  className="font-semibold"
                  variant="solid"
                  color="primary"
                  onClick={handleAssist}
                >
                  Asistire
                </Button>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}
