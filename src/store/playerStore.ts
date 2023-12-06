import { create } from 'zustand'

interface PlayerStore {
  isPlaying: boolean
  currentSoundInfo: { image: string; title: string; description: string }
  currentSoundId: string
  currentSoundAudio: string
  setIsPlaying: (isPlaying: boolean) => void
  setCurrentSoundId: (currentSoundId: string) => void
  setCurrentSoundAudio: (currentSoundAudio: string) => void
  setCurrentSoundInfo: (currentSoundInfo: {
    image: string
    title: string
    description: string
  }) => void
}

export const usePlayerStore = create<PlayerStore>(set => ({
  isPlaying: false,
  currentSoundId: '',
  currentSoundAudio: '',
  currentSoundInfo: { image: '', title: '', description: '' },
  setIsPlaying: isPlaying => set({ isPlaying }),
  setCurrentSoundId: currentSoundId => set({ currentSoundId }),
  setCurrentSoundAudio: currentSoundAudio => set({ currentSoundAudio }),
  setCurrentSoundInfo: currentSoundInfo => set({ currentSoundInfo })
}))
