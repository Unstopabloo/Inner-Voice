import PlayerControls from '../components/PlayerControls'

export default function Player() {
  return (
    <footer className="player bg-container flex flex-row items-center justify-between">
      <div className="actual-playing"></div>
      <PlayerControls />
      <div className="player-volume"></div>
    </footer>
  )
}
