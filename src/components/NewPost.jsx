import { Add } from './Icons'
import { useState } from 'react'
import { UserAuth } from '../context/AuthContext'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Textarea,
  useDisclosure,
  Input
} from '@nextui-org/react'

export default function NewPost() {
  const { newPost } = UserAuth()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <>
      <Button
        size="sm"
        radius="full"
        onPress={onOpen}
        color="primary"
        endContent={<Add />}
      >
        Nuevo
      </Button>
      <Modal
        className="bg-gray"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Nuevo Post
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="Titulo del post"
                  placeholder="Ej: Yoga en areas verdes"
                  variant="bordered"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                />
                <Textarea
                  label="Contenido"
                  placeholder="Ej: El yoga es una disciplina física y mental que se originó en la India. La palabra se asocia con prácticas de meditación en el hinduismo, el budismo y el jainismo."
                  variant="bordered"
                  value={content}
                  onChange={e => setContent(e.target.value)}
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  radius="full"
                  size="sm"
                  color="danger"
                  variant="flat"
                  onPress={onClose}
                >
                  Cancelar
                </Button>
                <Button
                  size="sm"
                  radius="full"
                  color="primary"
                  onClick={() => newPost(title, content)}
                  onPress={onClose}
                >
                  Enviar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
