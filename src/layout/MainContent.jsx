import MainHeader from '../components/MainHeader'
import Slider from '../components/Slider'

export default function MainContent() {
  return (
    <main className="main-content bg-container flex flex-col gap-14 p-7">
      <MainHeader />
      <Slider />
    </main>
  )
}
