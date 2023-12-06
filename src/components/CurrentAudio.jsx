import PropTypes from 'prop-types'
import { usePlayerStore } from '../store/playerStore'

export default function CurrentSong() {
  const { currentSoundInfo } = usePlayerStore(state => state)

  return (
    <div className="flex items-center gap-4 relative overflow-hidden max-w-xs w-[30%]">
      <picture className="w-16 h-16 rounded-md shadow-lg overflow-hidden block">
        <img
          className="object-cover w-full h-full"
          src={currentSoundInfo.image}
          alt={currentSoundInfo.title}
        />
      </picture>
      <div className="flex flex-col items-start gap-2 flex-0 w-7/12">
        <h2 className="font-semibold text-sm block">
          {currentSoundInfo.title}
        </h2>
        <small className="text-xs opacity-70 text-ellipsis overflow-hidden text-overflow-ellipsis whitespace-nowrap">
          {currentSoundInfo.description}
        </small>
      </div>
    </div>
  )
}

CurrentSong.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}
