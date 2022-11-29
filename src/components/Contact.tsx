import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react";
import { ContactContent } from "./ContactContent";
import { Modal } from "./Modal";

export function Contact() {
  const [modalOpen, setModalOpen] = useState(false)

  const close = () => setModalOpen(false)
  const open = () => setModalOpen(true)

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.2, y: -5 }}
        whileTap={{ scale: .9 }}
        transition={{ duration: .3 }}
        whileFocus={{ scale: 1.2, y: -5 }}
        onClick={() => (modalOpen ? close() : open())}
      >
        Contact
      </motion.button>

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