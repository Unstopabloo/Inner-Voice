import MainHeader from '../components/MainHeader'
import Slider from '../components/Slider'
import BinauralSounds from '../components/BinauralSounds'

export default function MainContent() {
  return (
    <main className="main-content bg-container">
      <MainHeader />
      <div className="main-content-elements">
        <Slider />
        <BinauralSounds />
        <h1>titulo</h1>
        <h1>titulo</h1>
        <h1>titulo</h1>
        <h1>titulo</h1>
        <h1>titulo</h1>
      </div>
    </main>
  )
}
