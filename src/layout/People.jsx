import { Avatar } from '@nextui-org/react'
import { UserAuth } from '../context/AuthContext'
import { useEffect } from 'react'

export default function People() {
  const { people, getPeople } = UserAuth()

  useEffect(() => {
    getPeople()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="cositas bg-container px-2 py-7 flex flex-col gap-10">
      <h2 className="font-bold text-[20px] text-center">People</h2>
      <div className="flex flex-col gap-3">
        {people.map(person => (
          <div
            key={person.id}
            className="flex flex-row items-center bg-gray gap-2 bg-white rounded-md p-2 cursor-pointer hover:bg-container transition-all"
          >
            <div>
              <Avatar
                src={person.avatar_url}
                size="sm"
                className="border-2 border-gray-300"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="font-medium text-[12px]">
                {person.username.charAt(0).toUpperCase() +
                  person.username
                    .split(' ')
                    .slice(0, 2)
                    .join(' ')
                    .slice(1)
                    .toLowerCase()}
              </h3>
              <p className="text-[11px] text-fore">
                @{person.username.split(' ')[0].toLowerCase()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
