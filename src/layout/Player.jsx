import { PlayerControls } from '../components/PlayerControls'

export default function Player() {
  return (
    <footer>
      <div className="actual-playing"></div>
      <PlayerControls />
      <div className="player-volume"></div>
    </footer>
  )
}
