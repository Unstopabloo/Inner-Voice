import { useEffect } from 'react'
import { UserAuth } from '../context/AuthContext'
import { useEventStore } from '../store/eventStore'
import { Avatar, AvatarGroup, Button, Tooltip } from '@nextui-org/react'

export default function EventPageHeader() {
  const { currentEventId } = useEventStore()
  const { getEvent, getEventUsers, event, eventUsers, newAssistant } =
    UserAuth()

  useEffect(() => {
    getEvent(currentEventId)
    getEventUsers(currentEventId)
  }, [])

  const handleAssist = () => {
    // console.log('Asistire')
    newAssistant(currentEventId)
  }
  return (
    <>
      {event.map(event => {
        return (
          <div
            key={event.id}
            className="flex items-start border-b-1 border-grayLight p-3 gap-1 pb-5"
          >
            <header className="flex flex-col gap-2 w-[80%]">
              <h2 className="text-md font-bold">{event.name}</h2>
              <p className="text-sm text-fore">{event.description}</p>
            </header>
            <div className="flex flex-col w-[20%] items-end gap-5">
              <div>
                <Button
                  className="font-semibold"
                  variant="solid"
                  color="primary"
                  size="sm"
                  onClick={handleAssist}
                >
                  Asistire
                </Button>
              </div>
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
            </div>
          </div>
        )
      })}
    </>
  )
}
