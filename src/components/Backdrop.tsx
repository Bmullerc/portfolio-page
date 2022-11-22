import { motion } from "framer-motion"

export function Backdrop({ children, onClick }: any) {
  return (
    <motion.div
      className="absolute top-0 left-0 h-full w-full bg-transparent flex justify-center items-center"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  )
}