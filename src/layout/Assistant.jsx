import MainChat from '../components/assistant/MainChat'

export default function Assistant() {
  return (
    <aside className="assistant bg-container p-3 flex flex-col gap-10">
      <h2 className="font-bold text-[20px] text-center">
        ¿Como te sientes hoy?
      </h2>
      <MainChat />
    </aside>
  )
}
