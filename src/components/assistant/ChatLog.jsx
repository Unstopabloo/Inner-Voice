import { useAssistantStore } from '../../store/assistantStore'
import { Avatar } from '@nextui-org/react'
import { UserAuth } from '../../context/AuthContext'
import { useRef, useEffect } from 'react'

export default function ChatLog() {
  const { chatLog } = useAssistantStore()
  const { user } = UserAuth()
  const contentRef = useRef()

  const avatars = {
    user: user.avatar_url,
    assistant: '/user-template.avif'
  }

  useEffect(() => {
    const element = contentRef.current
    element.scrollTop = element.scrollHeight
  }, [chatLog])

  return (
    <section id="chatlogCont" className="flex-grow">
      <div
        className="overflow-y-auto p-2"
        ref={contentRef}
        style={{ scrollBehavior: 'smooth' }}
      >
        {chatLog.map((message, index) => (
          <div
            key={(message.index = index)}
            className={`flex gap-3 mb-6 py-3 px-1 rounded-lg ${
              message.user === 'User' ? 'bg-gray' : null
            }`}
          >
            <div>
              <Avatar
                isBordered
                src={message.user === 'User' ? avatars.user : avatars.assistant}
                size="sm"
                className="w-7 h-7"
              />
            </div>
            {message.user === 'User' ? (
              <p className="text-sm">{message.message}</p>
            ) : (
              <p className="text-sm text-fore">{message.message}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
