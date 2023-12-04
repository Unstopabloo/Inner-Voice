import CardSongs from '../components/Cards'
import { UserAuth } from '../context/AuthContext'
import { useEffect } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'

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
              <CardSongs
                soundImg={sound.sound_poster}
                soundName={sound.sound_name}
              />
            </SplideSlide>
          )
        })}
      </Splide>
    </section>
  )
}

export default BinauralSounds
