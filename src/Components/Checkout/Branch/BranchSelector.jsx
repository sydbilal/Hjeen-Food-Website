import { useState } from 'react';
import BranchList from "./BranchList";
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure } from "@chakra-ui/react";
import styles from "./BranchSelector.module.css";

const BranchSelector = () => {
  const [selectedBranch, setSelectedBranch] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const branches = [
    { name: 'Al Yasmin', isOpen: false },
    { name: 'Al Quds', isOpen: true },
    { name: 'Al Rabwah', isOpen: true },
    { name: 'Al Qirawan', isOpen: true },
    { name: 'Events', isOpen: false },
  ];

  const handleSelectBranch = (branchName) => {
    setSelectedBranch(branchName);
    onClose();
  };

  return (
    <div className={styles.branchselector}>
      <Button height="50px" borderRadius="20px"
        className={styles.Branchbutton}
        onClick={onOpen}
      >
        {selectedBranch ? selectedBranch : 'Select Branch'}
      </Button>

      <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select Branch</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <BranchList branches={branches} onSelectBranch={handleSelectBranch} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default BranchSelector;
