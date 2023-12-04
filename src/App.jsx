import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Header from './layout/Header.jsx'
import Assistant from './layout/Assistant.jsx'
import MainContent from './layout/MainContent.jsx'
import Player from './layout/Player.jsx'
import orbRight from '/orb-right.png'
import { AuthContextProvider } from './context/AuthContext.jsx'

export default function App() {
  return (
    <AuthContextProvider>
      <div className="dark grid-container relative z-0">
        <img
          src={orbRight}
          alt="Orb decorator"
          className="absolute -z-10 -top-80 left-[20rem]"
        />
        <Header />
        <Assistant />
        <Router>
          <MainContent />
        </Router>
        <section className="cositas bg-container">cositas</section>
        <Player />
      </div>
    </AuthContextProvider>
  )
}
