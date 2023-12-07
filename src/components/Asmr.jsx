import { Button } from '@nextui-org/react'
import { NavLink } from 'react-router-dom'

export default function Asmr() {
  return (
    <section id="asmrPlaylist" className="p-7 flex flex-col justify-between">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold asmr-title">Historia del semestre</h2>
        <p className="asmr-title brea w-full md:w-1/2">
          Disfruta de lo mejor del ASMR con un exponente del minfulness.
        </p>
      </div>
      <div>
        <Button color="primary" radius="full" className="font-semibold">
          <NavLink to="/asmr">Escuchar</NavLink>
        </Button>
      </div>
    </section>
  )
}
