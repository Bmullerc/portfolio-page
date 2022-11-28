import { motion } from "framer-motion"

export function Header() {
  return (
    <motion.header
      className="h-screen lg:px-32 lg:w-2/5 w-3/5 mx-8 flex flex-col lg:flex-row place-items-center justify-center">
      <motion.div
        initial={{ y: "200vh" }}
        animate={{ y: 0 }}
        exit={{ y: "-100vh" }}
        transition={{ delay: .7, duration: 1, type: "spring", damping: 25, stiffness: 250 }}
        className="sm:px-8 px-4 flex flex-col gap-3 font-title-sans font-bold border-r-8 border-zinc-500">
        <h1 className="lg:text-7xl text-5xl text-zinc-500">
          <span className="text-zinc-900 dark:text-zinc-50">Hi.</span> I am <span className="text-zinc-900 dark:text-zinc-50">Bernardo Müller</span>.
        </h1>
        <h2 className="lg:text-6xl text-4xl text-zinc-500"><span className="text-zinc-900 dark:text-zinc-50">Designer</span> & <span className="text-zinc-900 dark:text-zinc-50">Developer</span> based in Curitiba, Brazil.</h2>
      </motion.div>
    </motion.header>
  )
}