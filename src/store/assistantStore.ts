import { create } from 'zustand'

interface AssistantStore {
  answer: string
  question: string
  user: string
  chatLog: { message: string; user: string }[]
  setAnswer: (answer: string) => void
  setQuestion: (question: string) => void
  setUser: (user: string) => void
  setChatLog: (message: string) => void
}

export const useAssistantStore = create<AssistantStore>(set => ({
  answer: '',
  question: '',
  user: '',
  chatLog: [],
  setAnswer: answer => set({ answer }),
  setQuestion: question => set({ question }),
  setUser: (user: string) => set({ user }),
  setChatLog: (message: string) => {
    set(state => ({
      chatLog: [...state.chatLog, { message, user: state.user }]
    }))
  }
}))
