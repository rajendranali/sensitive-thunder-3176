import React from 'react'
import {BiPlus} from "react-icons/bi"
import {Button,ModalOverlay,Modal,ModalContent,ModalHeader,ModalBody,ModalCloseButton,ModalFooter,useDisclosure} from "@chakra-ui/react"
function GuestInvite() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        
        <Button w={150} borderRadius="10px" bg="#4bb063" color="white" onClick={onOpen}><BiPlus/>Invite people</Button>
        <Modal
          isCentered
          onClose={onClose}
          isOpen={isOpen}
          motionPreset='slideInBottom'
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
             
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}

export default GuestInvite