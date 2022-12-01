import { AnimatePresence } from "framer-motion"
import { useState } from "react";
import { ContactContent } from "./ContactContent";
import { Modal } from "./Modal";

export function Contact() {
  const [modalOpen, setModalOpen] = useState(false)

  const close = () => setModalOpen(false)
  const open = () => setModalOpen(true)

  return (
    <>
      <button
        className="hover:scale-125 focus:scale-125 duration-300 hover:opacity-40 focus:opacity-40"
        onClick={() => (modalOpen ? close() : open())}
      >
        Contact
      </button>

      <AnimatePresence
        initial={false}
        mode="wait"
        onExitComplete={() => null}
      >
        {modalOpen
          &&
          <Modal handleClose={close}>
            <ContactContent />
          </Modal>
        }
      </AnimatePresence>
    </>

  )
}