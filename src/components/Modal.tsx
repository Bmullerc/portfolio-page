import { motion } from "framer-motion"
import { Backdrop } from "./Backdrop"

export function Modal({ handleClose, text }: any) {

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
        drag
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="w-1/2 max-w-[700px] h-1/2 max-h-[300px] bg-zinc-400 m-auto px-2 rounded-3xl flex flex-col items-center"
      >

      </motion.div>
    </Backdrop>
  )
}