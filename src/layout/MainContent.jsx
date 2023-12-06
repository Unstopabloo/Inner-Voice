import { Routes, Route } from 'react-router-dom'
import MainHeader from '../components/MainHeader'
import BlogPage from '../pages/BlogPage'
import AudioPage from '../pages/AudioPage'
import CommunityPage from '../pages/CommunityPage'
import AsmrPage from '../pages/AsmrPage'

export default function MainContent() {
  return (
    <main className="main-content bg-container">
      <MainHeader />
      <Routes>
        <Route path="/" element={<AudioPage />} />
        <Route path="/asmr" element={<AsmrPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/comunidad" element={<CommunityPage />} />
      </Routes>
    </main>
  )
}
