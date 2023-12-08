import PlayerControls from '../components/PlayerControls'
import CurrentSong from '../components/CurrentAudio'

export default function Player() {
  return (
    <footer className="player bg-container flex flex-row items-center justify-between px-5 py-2 gap-10">
      <CurrentSong />
      <PlayerControls />
    </footer>
  )
}
