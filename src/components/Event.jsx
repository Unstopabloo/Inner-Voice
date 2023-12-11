import { Avatar } from '@nextui-org/react'

export default function Event() {
  return (
    <article className="flex justify-between border-b-1 pt-5 pb-3 border-grayLight">
      <header className="flex gap-2">
        <div className="p-1">
          <Avatar src="/user-template.avif" />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-md font-semibold">Nombre de evento</h3>
          <p className="text-sm text-fore">
            Descripción de evento evento evento evento
          </p>
        </div>
      </header>
      <footer className="flex flex-col justify-between">
        <div className="flex items-center gap-5">
          <strong className="text-xs">13/12/23</strong>
          <p className="text-sm">
            Organizado por: <strong>Nombre usuario</strong>
          </p>
        </div>
        <div className="text-end">
          <p className="text-xs">
            <strong>32 </strong>
            asistentes
          </p>
        </div>
      </footer>
    </article>
  )
}
