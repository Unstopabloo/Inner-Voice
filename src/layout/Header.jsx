import { Avatar } from '@nextui-org/react'
import { Logout } from '../components/Icons'
import Range from '../components/Range'

export default function Header() {
  return (
    <section className="header bg-container p-4">
      <header className="flex flex-col items-center justify-center h-full gap-6">
        <Avatar
          src="https://i.pravatar.cc/150?u=a04258114e29026708c"
          isBordered
          className="w-28 h-28"
        />
        <div className="max-w-[60%] flex flex-col gap-3 items-center">
          <h2 className="font-bold text-[20px]">Viviano Uyarto</h2>
          <div className="flex gap-8">
            <Logout />
            <Range range="Yogi" />
          </div>
        </div>
      </header>
    </section>
  )
}
