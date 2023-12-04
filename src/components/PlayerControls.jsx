import { Play } from './Icons'

export default function PlayerControls() {
  return (
    <div className="flex items-center justify-center gap-3">
      <button className="btn btn-primary">
        <Play />
      </button>
      <button className="btn btn-primary">
        <Play />
      </button>
      <button className="btn btn-primary">
        <Play />
      </button>
    </div>
  )
}
