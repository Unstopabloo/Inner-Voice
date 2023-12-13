import { create } from 'zustand'

interface EventStore {
  currentEventId: number
  setCurrentEventId: (currentEventId: number) => void
}

export const useEventStore = create<EventStore>(set => ({
  currentEventId: 0,
  setCurrentEventId: currentEventId => set({ currentEventId })
}))
