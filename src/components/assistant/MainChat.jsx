import { Button, Input } from '@nextui-org/react'
import { Send } from '../Icons'
import { useState } from 'react'
import OptionList from './OptionList'

export default function MainChat() {
  const [SVGcolor, setSVGcolor] = useState('#1E1E1E')

  return (
    <>
      <OptionList />
      <form action="#" className="flex items-center justify-between gap-4">
        <Input
          size="sm"
          radius="full"
          type="text"
          variant="bordered"
          label="¿Como te puedo ayudar?"
          className="bg-transparent flex-grow"
        />
        <Button
          isIconOnly
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
