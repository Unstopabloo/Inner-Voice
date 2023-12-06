import { Play, Pause } from './Icons'
import { Button } from '@nextui-org/react'
import { useRef, useEffect } from 'react'
import { usePlayerStore } from '../store/playerStore'

export default function PlayerControls() {
  const { isPlaying, setIsPlaying, currentSoundAudio } = usePlayerStore(
    state => state
  )
  // const [currentSong, setCurrentSong] = useState(null)
  const audioRef = useRef()

  useEffect(() => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause()
  }, [isPlaying])

  useEffect(() => {
    if (currentSoundAudio) {
      const audioSrc = currentSoundAudio
      audioRef.current.src = audioSrc
      audioRef.current.play()
    }
  }, [currentSoundAudio])

  const handleClick = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
      audioRef.current.volume = 0.5
    }

    setIsPlaying(!isPlaying)
  }

  return (
    <div className="flex items-center justify-center gap-3 w-full flex-grow">
      <Button
        isIconOnly
        radius="full"
        className="w-12 h-12 bg-primary"
        onClick={handleClick}
      >
        {isPlaying ? <Pause /> : <Play />}
      </Button>

      <audio ref={audioRef}></audio>
    </div>
  )
}
