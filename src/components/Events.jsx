import Event from './Event'
import { UserAuth } from '../context/AuthContext'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Input
} from '@nextui-org/react'

export default function Events() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const { events, getEvents, newEvent } = UserAuth()

  useEffect(() => {
    getEvents()
  }, [])

  const handleNewEvent = () => {
    //console.log('Crear evento')
    newEvent(name, description)
  }

  return (
    <section className="flex flex-col gap-6">
      <div className="flex justify-between w-full">
        <h2 className="text-2xl font-bold">Eventos</h2>
        <Button
          size="sm"
          color="primary"
          className="font-semibold"
          onClick={onOpen}
        >
          Crear evento
        </Button>
        <Modal
          className="bg-[#252525] text-white"
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="top-center"
        >
          <ModalContent>
            {onClose => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Creación de evento
                </ModalHeader>
                <ModalBody>
                  <Input
                    autoFocus
                    label="Nombre"
                    placeholder="Evento de ejemplo"
                    variant="bordered"
                    onChange={e => setName(e.target.value)}
                  />
                  <Input
                    label="Descripción"
                    placeholder="Descricpion de ejemplo para evento de ejemplo"
                    type="text"
                    variant="bordered"
                    onChange={e => setDescription(e.target.value)}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Cerrar
                  </Button>
                  <Button color="primary" onPress={handleNewEvent}>
                    <NavLink to="/">Crear</NavLink>
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
      <div>
        {events.map(event => {
          const date = new Date(event.created_at)
          return (
            <Event
              key={event.id}
              id={event.id}
              name={event.name}
              date={date.toLocaleDateString()}
              description={event.description.substring(0, 45) + '...'}
              creator={event.profiles.username.split(' ').slice(0, 2).join(' ')}
              attendees={event.assistants}
            />
          )
        })}
      </div>
    </section>
  )
}
