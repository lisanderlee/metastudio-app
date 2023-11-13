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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProjectLeaveModal({ open, setOpen }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  function handleClick() {
    setOpen(false);
    toast.success("You've succefully left the project");
  }

  return (
    <>
      <div className="flex flex-wrap gap-3"></div>
      <Modal size="md" isOpen={open} onClose={() => setOpen(false)}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Leave Project
              </ModalHeader>
              <ModalBody></ModalBody>
              <ModalFooter>
                <Button
                  size="sm"
                  color="danger"
                  variant="light"
                  onPress={() => setOpen(false)}
                >
                  Close
                </Button>
                <Button
                  size="sm"
                  color="danger"
                  onPress={handleClick}
                >
                  Leave
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
