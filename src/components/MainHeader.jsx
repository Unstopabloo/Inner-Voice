import { Logo } from './Icons'
import { Tabs, Tab } from '@nextui-org/react'

export default function MainHeader() {
  return (
    <header className="flex justify-between items-center">
      <h1>
        <Logo />
      </h1>
      <Tabs key="default" color="default" radius="full" aria-label="Tabs">
        <Tab key="Mindfulness" title="Mindfulness" label="Tab 1" />
        <Tab key="Ambiente" title="Ambiente" label="Tab 2" />
        <Tab key="Guiada" title="Guiada" label="Tab 3" />
      </Tabs>
    </header>
  )
}
