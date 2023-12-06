import CardButton from './CardButton'
import { Card, CardFooter } from '@nextui-org/react'
import { UserAuth } from '../context/AuthContext'
import { useEffect } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css/skyblue'

function BinauralSounds() {
  const { sounds, getSounds } = UserAuth()
  useEffect(() => {
    getSounds()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className="w-full flex flex-col gap-3 pb-12 overflow-hidden">
      <h2 className="font-bold text-[20px]">Especiales para tu dia</h2>
      <Splide
        options={{
          pagination: false,
          gap: '1rem',
          perPage: 4
        }}
        className="flex gap-3 flex-nowrap splideSecondary"
      >
        {sounds.map(sound => {
          return (
            <SplideSlide key={sound.id}>
              <Card
                isFooterBlurred
                radius="lg"
                className="border-none w-full aspect-square"
              >
                <img src={sound.sound_poster} className="object-cover h-full" />
                <CardFooter className="before:bg-white/10 border-white/20 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                  <strong className="text-[13px] flex-grow">
                    {sound.sound_name}
                  </strong>
                  <CardButton
                    id={sound.id}
                    audio={sound.sound_audio}
                    title={sound.sound_name}
                    image={sound.sound_poster}
                    description={sound.sound_description}
                  />
                </CardFooter>
              </Card>
            </SplideSlide>
          )
        })}
      </Splide>
    </section>
  )
}

export default BinauralSounds
