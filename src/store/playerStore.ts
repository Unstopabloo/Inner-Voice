import { create } from 'zustand'

interface PlayerStore {
  isPlaying: boolean
  currentSoundInfo: { image: string; title: string; description: string }
  currentSoundId: string
  currentSoundAudio: string
  volume: number
  currentTime: number
  duration: number
  setIsPlaying: (isPlaying: boolean) => void
  setCurrentSoundId: (currentSoundId: string) => void
  setCurrentSoundAudio: (currentSoundAudio: string) => void
  setCurrentSoundInfo: (currentSoundInfo: {
    image: string
    title: string
    description: string
  }) => void
  setVolume: (volume: number) => void
  setCurrentTime: (currentTime: number) => void
  setDuration: (duration: number) => void
}

export const usePlayerStore = create<PlayerStore>(set => ({
  isPlaying: false,
  currentSoundId: '',
  currentSoundAudio: '',
  currentSoundInfo: { image: '', title: '', description: '' },
  volume: 100,
  currentTime: 0,
  duration: 0,
  setIsPlaying: isPlaying => set({ isPlaying }),
  setCurrentSoundId: currentSoundId => set({ currentSoundId }),
  setCurrentSoundAudio: currentSoundAudio => set({ currentSoundAudio }),
  setCurrentSoundInfo: currentSoundInfo => set({ currentSoundInfo }),
  setVolume: volume => set({ volume }),
  setCurrentTime: currentTime => set({ currentTime }),
  setDuration: duration => set({ duration })
}))
