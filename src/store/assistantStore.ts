import { create } from 'zustand'

interface AssistantStore {
  answer: string
  question: string
  user: string
  isLoading: boolean
  chatLog: { message: string; user: string }[]
  setAnswer: (answer: string) => void
  setQuestion: (question: string) => void
  setUser: (user: string) => void
  setChatLog: (message: string) => void
  setIsLoading: (isLoading: boolean) => void
}

export const useAssistantStore = create<AssistantStore>(set => ({
  answer: '',
  question: '',
  user: '',
  chatLog: [],
  isLoading: false,
  setAnswer: answer => set({ answer }),
  setQuestion: question => set({ question }),
  setUser: (user: string) => set({ user }),
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
  setChatLog: (message: string, replaceLast: boolean = false) => {
    set(state => {
      const newChatLog = replaceLast
        ? state.chatLog.slice(0, -1).concat({ message, user: state.user })
        : [...state.chatLog, { message, user: state.user }]
      return { chatLog: newChatLog }
    })
  }
}))
