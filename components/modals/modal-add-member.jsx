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

export default function AddMemberModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  function handleClick() {
    setOpen(false);
    toast.success("Projects succesfully shared");
  }

  return (
    <>
      <Button onPress={onOpen} size="sm" color="primary">
        Share
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add a member to the project
              </ModalHeader>
              <ModalBody></ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="flat"
                  onPress={() => setOpen(false)}
                >
                  Cancel
                </Button>
                <Button color="primary" onPress={handleClick}>
                  Share
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
