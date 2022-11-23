import { motion } from "framer-motion"
import { X } from "phosphor-react"
import { ReactElement } from "react"
import { Backdrop } from "./Backdrop"

interface ModalProps {
  handleClose: () => void
  children?: ReactElement
  modalOpen?: true | false
}

export function Modal({ handleClose, children, ...rest }: ModalProps) {

  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: .1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      }
    },
    exit: {
      y: "90%",
      opacity: 0
    },
  }

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        {...rest}
        className="absolute lg:min-w-[1/2] lg:w-2/3 lg:max-w-[90%] min-w-[1/2] w-[90%] h-[2/3] min-h-[300px] bg-zinc-400 m-auto px-2 rounded-3xl flex flex-col items-center justify-center"
      >
        {children}
        <motion.button
        whileTap={{ scale: .9, rotate: -180 }}
        whileHover={{ scale: 1.2, rotate: 180, transition: { duration: .3 } }}
        className="absolute top-4 right-4 mr-4 mt-4 hover:opacity-50"
        onClick={handleClose}>
          <X size={24} className="text-zinc-700"/>
        </motion.button>
      </motion.div>
    </Backdrop>
  )
}