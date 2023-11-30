import { Button } from '@nextui-org/react'

export default function OptionList() {
  return (
    <section className="flex-grow">
      <ul className="p-3 flex flex-col gap-4 justify-center">
        <li>
          <Button
            radius="full"
            className="w-full border-2 border-gray bg-transparent hover:border-primary text-grayLight font-semibold text-[1.1rem] hover:text-primary transition-colors duration-300"
          >
            Estrés
          </Button>
        </li>
        <li>
          <Button
            radius="full"
            className="w-full border-2 border-gray bg-transparent hover:border-primary text-grayLight font-semibold text-[1.1rem] hover:text-primary transition-colors duration-300"
          >
            Calma
          </Button>
        </li>
        <li>
          <Button
            radius="full"
            className="w-full border-2 border-gray bg-transparent hover:border-primary text-grayLight font-semibold text-[1.1rem] hover:text-primary transition-colors duration-300"
          >
            Ansiedad
          </Button>
        </li>
        <li>
          <Button
            radius="full"
            className="w-full border-2 border-gray bg-transparent hover:border-primary text-grayLight font-semibold text-[1.1rem] hover:text-primary transition-colors duration-300"
          >
            Tristeza
          </Button>
        </li>
      </ul>
    </section>
  )
}
