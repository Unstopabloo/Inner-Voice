import { PropTypes } from 'prop-types'
import { Play, Pause } from './Icons'
import { usePlayerStore } from '../store/playerStore'
import { Button } from '@nextui-org/react'

export default function CardButton({ id, audio, title, image, description }) {
  const {
    isPlaying,
    setIsPlaying,
    currentSoundId,
    setCurrentSoundId,
    setCurrentSoundAudio,
    setCurrentSoundInfo
  } = usePlayerStore(state => state)

  const handleClick = () => {
    setCurrentSoundId(id)
    setCurrentSoundAudio(audio)
    setIsPlaying(!isPlaying)
    setCurrentSoundInfo({
      title,
      image,
      description
    })
  }

  const isPlayingPlaylist = isPlaying && currentSoundId === id

  return (
    <Button
      isIconOnly
      className="bg-primary aspect-square rounded-full"
      onClick={handleClick}
    >
      {isPlayingPlaylist ? <Pause /> : <Play />}
    </Button>
  )
}

CardButton.propTypes = {
  id: PropTypes.string.isRequired,
  audio: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}
