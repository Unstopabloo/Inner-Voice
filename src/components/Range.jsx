import { Peace } from './Icons'
import PropType from 'prop-types'

export default function Range({ range }) {
  return (
    <div className="flex gap-1 items-center">
      <Peace />
      <strong className="text-fore font-semibold">{range}</strong>
    </div>
  )
}

Range.propTypes = {
  range: PropType.string.isRequired
}
