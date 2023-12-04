import { Avatar, Button } from '@nextui-org/react'
import { Logout, Login } from '../components/Icons'
import Range from '../components/Range'
import { UserAuth } from '../context/AuthContext'
import UserTemplate from '/user-template.avif'

export default function Header() {
  const { signInWithGoogle, signout, user } = UserAuth()

  return (
    <section className="header bg-container p-4">
      <header className="flex flex-col items-center justify-center h-full gap-6">
        <Avatar
          src={user ? user.picture : UserTemplate}
          isBordered
          className="w-28 h-28"
        />
        <div className="max-w-[60%] flex flex-col gap-3 items-center">
          <h2 className="font-bold text-[20px] text-center">
            {user ? user.name : 'Bienvenido!'}
          </h2>
          <div className="flex gap-8">
            <Button
              isIconOnly
              className="flex items-center justify-center bg-transparent"
              onClick={user ? signout : signInWithGoogle}
            >
              {user ? <Logout /> : <Login />}
            </Button>
            <Button className="bg-transparent">
              <Range range="Yogi" className="flex items-center" />
            </Button>
          </div>
        </div>
      </header>
    </section>
  )
}
