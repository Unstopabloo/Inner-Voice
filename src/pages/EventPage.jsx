import EventPageHeader from '../components/EventPageHeader'
import { Input, Button, Avatar } from '@nextui-org/react'
import { Send } from '../components/Icons'
import { useState, useEffect } from 'react'
import { UserAuth } from '../context/AuthContext'

export default function EventPage() {
  const [message, setMessage] = useState('')
  const { postMessage, fetchMessages, messages } = UserAuth()
  const reversedMessages = messages.reverse()

  useEffect(() => {
    fetchMessages()
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()
    await postMessage(message)
    setMessage('')
  }

  return (
    <section className="main-content-elements flex flex-col gap-5">
      <EventPageHeader />
      <ul className="overflow-y-auto pe-5">
        {reversedMessages.map((message, index) => {
          return (
            <li
              className={`p-2 my-3 flex items-center gap-3 ${
                index % 2 === 0 ? 'bg-gray' : 'bg-[#252525]'
              } rounded-xl`}
              key={index}
            >
              <Avatar src={message.user.avatar_url} />
              <div className="flex flex-col gap-1 flex-1">
                <div className="flex justify-between w-full">
                  <strong className="text-xs">{message.user.username}</strong>
                  <span className="text-xs text-[#B4B4B8]">
                    {new Date(message.created_at).toLocaleTimeString()}
                  </span>
                </div>
                <p className="text-[#B4B4B8]">{message.content}</p>
              </div>
            </li>
          )
        })}
      </ul>
      <div className="h-20">
        <form onSubmit={handleSubmit}>
          <Input
            onChange={e => setMessage(e.target.value)}
            value={message}
            type="text"
            label="Ingresa tu mensaje"
            placeholder="Hola a todos!"
            endContent={
              <Button isIconOnly variant="light" role="submit">
                <Send color="#0070F0" />
              </Button>
            }
          />
        </form>
      </div>
    </section>
  )
}
