import { useLocation } from 'react-router-dom'
import { Logo } from './Icons'
import { Tabs, Tab } from '@nextui-org/react'
import { NavLink } from 'react-router-dom'

export default function MainHeader() {
  const { pathname } = useLocation()

  return (
    <header className="flex justify-between items-center">
      <h1>
        <Logo />
      </h1>
      <Tabs
        selectedKey={pathname}
        color="default"
        radius="full"
        aria-label="Tabs"
      >
        <Tab id="/" key="/">
          <NavLink to="/" className="text-center">
            Audios
          </NavLink>
        </Tab>
        <Tab id="/blog" key="/blog">
          <NavLink to="/blog" className="text-center">
            Blog
          </NavLink>
        </Tab>
        <Tab id="/comunidad" key="/comunidad">
          <NavLink to="/comunidad" className="text-center">
            Comunidad
          </NavLink>
        </Tab>
      </Tabs>
    </header>
  )
}
