import { useEffect, useState } from 'react'
import { Play, Pause } from '../components/Icons'
import { usePlayerStore } from '../store/playerStore'
import ModalAsmr from '../components/ModalAsmr.jsx'
import { Button, useDisclosure, Avatar } from '@nextui-org/react'

export default function AsmrPage() {
  const [asmrPlaylist, setAsmrPlaylist] = useState([])
  const [currentItem, setCurrentItem] = useState(null)
  const {
    isPlaying,
    setIsPlaying,
    currentSoundId,
    setCurrentSoundId,
    setCurrentSoundAudio,
    setCurrentSoundInfo
  } = usePlayerStore()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const API_URL =
    'https://pabloyarce.laboratoriodiseno.cl/blog/wp-json/wp/v2/posts?_embed&per_page=15&order=asc'

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        setAsmrPlaylist(data)
      })
  }, [])

  const handleOpen = item => {
    setCurrentItem(item)
    onOpen()
    // console.log(currentItem)
  }

  const handleClick = item => {
    setCurrentItem(item)
    setCurrentSoundId(item?.id)
    setCurrentSoundAudio(item?.acf.asmr)
    setIsPlaying(currentSoundId !== item?.id || !isPlaying)
    setCurrentSoundInfo({
      title: item?.title.rendered,
      image: item?._embedded['wp:featuredmedia'][0].source_url,
      description: item?.excerpt.rendered
    })
    // console.log(item)
  }

  return (
    <section className="overflow-y-scroll pe-5">
      <div
        id="asmrPlaylistInner"
        className="p-7 flex flex-col justify-between"
      ></div>
      <div className="py-10">
        <article className="flex justify-between px-3 py-3">
          <strong>Titulo</strong>
          <div className="flex items-center gap-28">
            <strong>Hisoria</strong>
            <strong>Reproducir</strong>
          </div>
        </article>
        <div className="flex flex-col gap-3">
          {asmrPlaylist.map(item => (
            <article
              key={item.id}
              className="flex justify-between items-center bg-gray py-2 px-7 rounded-full"
            >
              <div className="pe-5">
                <Avatar
                  isBordered
                  radius="full"
                  src={item?._embedded?.['wp:featuredmedia']?.[0]?.source_url}
                />
              </div>
              <h3 className="flex-1">
                <span>{item.title.rendered} </span>-
                <strong> {item.excerpt.rendered}</strong>
              </h3>
              <div className="flex-shrink flex items-center gap-24">
                <Button
                  key={item.id}
                  color="primary"
                  variant="flat"
                  onPress={() => handleOpen(item)}
                >
                  Leer Historia
                </Button>
                <Button
                  color="primary"
                  radius="full"
                  isIconOnly
                  onPress={() => handleClick(item)}
                >
                  {currentSoundId === item.id && isPlaying ? (
                    <Pause />
                  ) : (
                    <Play />
                  )}
                </Button>
              </div>
              <ModalAsmr
                onClose={onClose}
                isOpen={isOpen}
                queHiceContent={currentItem?.acf.contenido_que_hice}
                queAprendiContent={currentItem?.acf.contenido_que_aprendi}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
