import { motion } from "framer-motion"
import { ReactElement, ReactEventHandler } from "react"

interface BackdropProps {
  children: ReactElement
  onClick: ReactEventHandler
}

export function Backdrop({ children, onClick }: BackdropProps) {
  return (
    <motion.div
      className="fixed top-0 left-0 h-full w-full bg-zinc-700 dark:bg-zinc-900 flex justify-center items-center"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  )
}