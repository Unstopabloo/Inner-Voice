import './App.css'
import Header from './layout/Header.jsx'
import Assistant from './layout/Assistant.jsx'
import MainContent from './layout/MainContent.jsx'
import Player from './layout/Player.jsx'

function App() {
  return (
    <div className="dark grid-container">
      <Header />
      <Assistant />
      <MainContent />
      <section className="cositas bg-container">cositas</section>
      <Player />
    </div>
  )
}

export default App
