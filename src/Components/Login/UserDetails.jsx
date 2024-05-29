import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Text } from '@chakra-ui/react';
import Dropdown from "./Dropdown";

const UserDetails = ({ isOpen, onClose }) => {
  return (
    <Modal size="lg" isOpen={isOpen} onClose={onClose} blockScrollOnMount={true}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Login</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Please enter mobile number to receive SMS OTP</Text>
          <Dropdown />
          <Text>Example: 501234567</Text>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="green" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Send OTP</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default UserDetails;
