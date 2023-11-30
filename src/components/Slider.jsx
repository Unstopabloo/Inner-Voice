import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css/skyblue'

export default function Slider() {
  const options = {
    rewind: true,
    gap: '1rem',
    height: '20rem',
    autoplay: true
  }

  return (
    <Splide
      aria-label="My Favorite Images"
      options={options}
      className="rounded-lg overflow-hidden"
    >
      <SplideSlide
        cover={true}
        className="rounded-lg overflow-hidden flex items-center justify-center"
      >
        <img src="/playaPrueba.jpg" alt="Image 1" />
      </SplideSlide>
      <SplideSlide
        cover={true}
        className="rounded-lg overflow-hidden flex items-center justify-center"
      >
        <img src="/playaPrueba.jpg" alt="Image 1" />
      </SplideSlide>
      <SplideSlide
        cover={true}
        src="/playaPrueba.jpg"
        className="rounded-lg overflow-hidden  flex items-center justify-center"
      >
        <img
          className="object-cover object-center"
          src="/esfinge.avif"
          alt="Image 1"
        />
      </SplideSlide>
    </Splide>
  )
}
