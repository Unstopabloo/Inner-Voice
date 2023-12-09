import { Play, Pause, VolOff, VolMin, VolMax } from './Icons'
import { Button } from '@nextui-org/react'
import { useRef, useEffect, useState } from 'react'
import { usePlayerStore } from '../store/playerStore'
import { Slider } from '@nextui-org/react'

export default function PlayerControls() {
  const {
    isPlaying,
    setIsPlaying,
    currentSoundAudio,
    volume,
    setVolume,
    currentTime,
    setCurrentTime,
    duration,
    setDuration
  } = usePlayerStore(state => state)
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const audioRef = useRef()

  useEffect(() => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause()
  }, [isPlaying])

  useEffect(() => {
    if (currentSoundAudio) {
      const audioSrc = currentSoundAudio
      audioRef.current.src = audioSrc
      audioRef.current.play()
      setCurrentTime(audioRef?.current?.currentTime)
    }
  }, [currentSoundAudio])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('timeupdate', handleTimeUpdate)
      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('timeupdate', handleTimeUpdate)
        }
      }
    }
  })

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime)
    setDuration(audioRef.current.duration)
    setMinutes(Math.floor(audioRef.current.currentTime / 60) || 0)
    setSeconds(Math.floor(audioRef.current.currentTime % 60) || 0)
  }

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
    <div className="flex items-center justify-between gap-10 flex-grow">
      <div className="flex flex-col justify-center items-center w-[60%]">
        <Button
          isIconOnly
          radius="full"
          className="w-12 h-12 bg-primary"
          onClick={handleClick}
        >
          {isPlaying ? <Pause /> : <Play />}
        </Button>

        <audio ref={audioRef}></audio>
        <div className="flex gap-5 w-full">
          <small>{`${minutes}:${seconds}`}</small>
          <Slider
            aria-label="progress"
            size="sm"
            color="primary"
            maxValue={
              typeof audioRef?.current?.duration === 'number'
                ? audioRef.current.duration
                : 0
            }
            defaultValue={0}
            minValue={0}
            className="w-full"
            value={typeof currentTime === 'number' ? currentTime : 0}
          />
          <small>{`${Math.floor(duration / 60) || 0}:${
            Math.floor(duration % 60) || 0
          }`}</small>
        </div>
      </div>
      <Slider
        aria-label="Volume"
        size="sm"
        color="primary"
        className="mx-w-md w-[120px]"
        defaultValue={30}
        onChange={newVolume => {
          audioRef.current.volume = newVolume / 100
          setVolume(newVolume)
        }}
        startContent={
          volume === 0 ? <VolOff /> : volume < 50 ? <VolMin /> : <VolMax />
        }
        classNames={{
          base: 'max-w-md gap-3 bg',
          track: 'border-s-primary-100',
          filler: 'bg-gradient-to-r from-primary-100 to-primary-500'
        }}
        renderThumb={props => (
          <div
            {...props}
            className="group p-1 top-1/2 bg-background border-small border-default-200 dark:border-default-400/50 shadow-medium rounded-full cursor-grab data-[dragging=true]:cursor-grabbing"
          >
            <span className="transition-transform bg-gradient-to-br shadow-small from-primary-100 to-primary-500 rounded-full w-3 h-3 block group-data-[dragging=true]:scale-80" />
          </div>
        )}
      />
    </div>
  )
}
