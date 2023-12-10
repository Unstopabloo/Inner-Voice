import { Button, Input } from '@nextui-org/react'
import { Send } from '../Icons'
import { useState } from 'react'
import OptionList from './OptionList'
import { useAssistantStore } from '../../store/assistantStore'
import ChatLog from './ChatLog'

export default function MainChat() {
  const [SVGcolor, setSVGcolor] = useState('#1E1E1E')
  const {
    question,
    setQuestion,
    setUser,
    setChatLog,
    isLoading,
    setIsLoading
  } = useAssistantStore()
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

      if (!response.ok) {
        throw new Error('Error en el llamado a la api')
      }

      const data = await response.json()
      console.log(data)
      setIsLoading(false)
      setChatLog(data.response, true) // Reemplaza el último mensaje en chatLog con la respuesta del asistente
    } catch (error) {
      console.log('Error en el llamado a la api: ', error)
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setUser('User')
    setChatLog(question)
    setIsLoading(true)
    setUser('Assistant')
    setChatLog('Pensando...', false)
    await chatBot(question)
    setIsLoading(false)
    setFirstMessage(true)
    setQuestion('')
  }

  return (
    <>
      {firstMessage ? <ChatLog /> : <OptionList />}
      <form
        action="#"
        onSubmit={handleSubmit}
        className="flex items-center justify-between gap-4"
      >
        <Input
          disabled={isLoading ? true : false}
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
          disabled={isLoading ? true : false}
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
