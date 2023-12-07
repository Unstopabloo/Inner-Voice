import { useLocation } from 'react-router-dom'
import { Logo } from './Icons'
import { Tabs, Tab } from '@nextui-org/react'
import { NavLink } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { useRef } from 'react'
import PropTypes from 'prop-types'

function MyNavLink({ to, className, disabled, children }) {
  if (disabled) {
    return <span className={className}>{children}</span>
  } else {
    return (
      <NavLink to={to} className={className}>
        {children}
      </NavLink>
    )
  }
}

MyNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired
}

export default function MainHeader() {
  const { pathname } = useLocation()
  const { user } = UserAuth()

  const navRef = useRef(null)
  navRef.disabled

  return (
    <header className="flex justify-between items-center">
      <h1>
        <NavLink to="/" className="text-center">
          <Logo />
        </NavLink>
      </h1>
      <Tabs
        disabledKeys={user ? [] : ['/blog', '/comunidad']}
        selectedKey={pathname}
        color="default"
        radius="full"
        aria-label="Tabs"
      >
        <Tab id="/" key="/">
          <MyNavLink to="/" className="text-center" disabled={!user}>
            Audios
          </MyNavLink>
        </Tab>
        <Tab id="/blog" key="/blog">
          <MyNavLink to="/blog" className="text-center" disabled={!user}>
            Blog
          </MyNavLink>
        </Tab>
        <Tab id="/comunidad" key="/comunidad">
          <MyNavLink to="/comunidad" className="text-center" disabled={!user}>
            Comunidad
          </MyNavLink>
        </Tab>
      </Tabs>
    </header>
  )
}
