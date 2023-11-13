import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export default function ProjectInfoModal({ open, setOpen }) {
  const { isOpen, onOpen, onClose } = useDisclosure();


  return (
    <>
      <div className="flex flex-wrap gap-3"></div>
      <Modal size="md" isOpen={open} onClose={() => setOpen(false)}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Project Information
              </ModalHeader>
              <ModalBody></ModalBody>
              <ModalFooter>
                <Button
                  size="sm"
                  color="primary"
                  onPress={() => setOpen(false)}
                >
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
