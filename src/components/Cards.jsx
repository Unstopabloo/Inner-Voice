import { Card, Button, CardFooter } from '@nextui-org/react'
import { PropTypes } from 'prop-types'
import { Play } from './Icons'

export default function CardSongs({ soundImg, soundName }) {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none w-full aspect-square"
    >
      <img src={soundImg} className="object-cover h-full" />
      <CardFooter className="before:bg-white/10 border-white/20 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <strong className="text-[13px] flex-grow">{soundName}</strong>
        <Button isIconOnly className="bg-primary aspect-square rounded-full">
          <Play />
        </Button>
      </CardFooter>
    </Card>
  )
}

CardSongs.propTypes = {
  soundImg: PropTypes.string.isRequired,
  soundName: PropTypes.string.isRequired
}
