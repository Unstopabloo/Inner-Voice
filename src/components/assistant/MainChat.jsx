import { Button, Input } from '@nextui-org/react'
import { Send } from '../Icons'
import { useState, useEffect } from 'react'
import OptionList from './OptionList'
import { useAssistantStore } from '../../store/assistantStore'
// import { chatBot } from '../../server/chat'
import ChatLog from './ChatLog'

export default function MainChat() {
  const [SVGcolor, setSVGcolor] = useState('#1E1E1E')
  const { question, setQuestion, setUser, user, chatLog, setChatLog } =
    useAssistantStore()
  const [firstMessage, setFirstMessage] = useState(false)

  const chatBot = async question => {
    try {
      const API_URL = import.meta.env.VITE_API_URL
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content: question })
      })
      setUser('Assistant')

      if (!response.ok) {
        throw new Error('Error en el llamado a la api')
      }

      const data = await response.json()
      console.log(data)
      setChatLog(data.response, user)
    } catch (error) {
      console.log('Error en el llamado a la api: ', error)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    setUser('User')
    setChatLog(question)
    chatBot(question)
    setFirstMessage(true)
    setQuestion('')
  }

  useEffect(() => {
    console.log('Role: ', user)
    console.log('Conversacion: ', chatLog)
  }, [chatLog, user])

  return (
    <>
      {firstMessage ? <ChatLog /> : <OptionList />}
      <form
        action="#"
        onSubmit={handleSubmit}
        className="flex items-center justify-between gap-4"
      >
        <Input
          size="sm"
          radius="full"
          type="text"
          variant="bordered"
          label="¿Como te puedo ayudar?"
          className="bg-transparent flex-grow"
          value={question}
          onChange={e => setQuestion(e.target.value)}
        />
        <Button
          isIconOnly
          onClick={handleSubmit}
          radius="full"
          className={`bg-transparent border-2 border-grayLight hover:border-primary`}
          onMouseEnter={() => {
            setSVGcolor('#0070F0')
          }}
          onMouseLeave={() => {
            setSVGcolor('#1E1E1E')
          }}
        >
          <Send
            color={`${SVGcolor}`}
            className="transition-colors duration-300"
          />
        </Button>
      </form>
    </>
  )
}
