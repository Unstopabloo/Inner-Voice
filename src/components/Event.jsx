import { Avatar } from '@nextui-org/react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useEventStore } from '../store/eventStore'

export default function Event({
  id,
  name,
  description,
  date,
  creator,
  attendees
}) {
  const { setCurrentEventId } = useEventStore()

  const handleEvent = () => {
    setCurrentEventId(id)
  }

  return (
    <article className="flex justify-between border-b-1 px-2 pt-5 pb-3 border-grayLight cursor-pointer hover:bg-gray">
      <header className="flex gap-2">
        <div className="p-1">
          <Avatar src="/user-template.avif" />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-md font-semibold">
            <NavLink onMouseEnter={handleEvent} to="/evento">
              {name}
            </NavLink>
          </h3>
          <p className="text-sm text-fore">{description}</p>
        </div>
      </header>
      <footer className="flex flex-col justify-between">
        <div className="flex items-center gap-5">
          <strong className="text-xs">{date}</strong>
          <p className="text-sm">
            Por: <strong>{creator}</strong>
          </p>
        </div>
        <div className="text-end">
          <p className="text-xs">
            <strong>{attendees} </strong>
            asistentes
          </p>
        </div>
      </footer>
    </article>
  )
}

Event.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
  creator: PropTypes.string,
  attendees: PropTypes.number
}
