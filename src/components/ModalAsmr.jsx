import PropTypes from 'prop-types'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from '@nextui-org/react'

export default function ModalAsmr({
  onClose,
  isOpen,
  queHiceContent,
  queAprendiContent
}) {
  return (
    <Modal
      backdrop="blur"
      isOpen={isOpen}
      onClose={onClose}
      size="2xl"
      classNames={{
        body: 'py-6',
        backdrop: 'bg-[#292f46]/5 backdrop-opacity-5',
        base: 'border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]',
        header: 'border-b-[1px] border-[#292f46]',
        footer: 'border-t-[1px] border-[#292f46]',
        closeButton: 'hover:bg-white/5 active:bg-white/10'
      }}
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">¿Que Hice?</ModalHeader>
        <ModalBody>{queHiceContent}</ModalBody>
        <ModalHeader className="flex flex-col gap-1">¿Que Aprendí?</ModalHeader>
        <ModalBody>{queAprendiContent}</ModalBody>
        <ModalFooter>
          <Button color="danger" variant="light" auto onClick={onClose}>
            Cerrar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

ModalAsmr.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  queHiceContent: PropTypes.string,
  queAprendiContent: PropTypes.string
}
