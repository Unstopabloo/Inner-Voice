import Event from './Event'

export default function Events() {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold">Eventos</h2>
      <div>
        <Event />
        <Event />
        <Event />
      </div>
    </section>
  )
}
