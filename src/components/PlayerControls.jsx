import { Play, Pause } from './Icons'
import { Button } from '@nextui-org/react'
import { useState, useRef, useEffect } from 'react'

export default function PlayerControls() {
  const [isPlaying, setIsPlaying] = useState(false)
  // const [currentSong, setCurrentSong] = useState(null)
  const audioRef = useRef()

  useEffect(() => {
    audioRef.current.src = '/the-last-piano.mp3'
  }, [])

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
    <div className="flex items-center justify-center gap-3">
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
