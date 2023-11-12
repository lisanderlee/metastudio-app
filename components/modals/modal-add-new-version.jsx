import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { ToastContainer, toast,Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddNewVersionModal({ open, setOpen }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  function handleClick() {
    setOpen(false);
    toast.success("File deleted");
  }

  return (
    <>
      <div className="flex flex-wrap gap-3"></div>
      <Modal size="md" isOpen={open} onClose={() => setOpen(false)}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Add New Version Modal</ModalHeader>
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
                <Button size="sm" color="danger" onPress={handleClick}>
                  Delete
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <ToastContainer
        position="top-right"
        autoClose={400}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
    </>
  );
}
