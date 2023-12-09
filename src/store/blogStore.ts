import { create } from 'zustand'

interface BlogStore {
  currentPostId: string
  currentPostInfo: {
    content: string
    title: string
    created_at: string
    id: string
    profiles: { username: string; avatar_url: string }
  }
  setCurrentPostId: (currentPostId: string) => void
  setCurrentPostInfo: (currentPostInfo: {
    content: string
    title: string
    created_at: string
    id: string
    profiles: { username: string; avatar_url: string }
  }) => void
}

export const useBlogStore = create<BlogStore>(set => ({
  currentPostId: '',
  currentPostInfo: {
    content: '',
    title: '',
    created_at: '',
    id: '',
    profiles: { username: '', avatar_url: '' }
  },
  setCurrentPostId: currentPostId => set({ currentPostId }),
  setCurrentPostInfo: currentPostInfo => set({ currentPostInfo })
}))
