import { motion } from "framer-motion"

export function Header() {
  return (
    <motion.header
      initial={{ y: "200vh" }}
      animate={{ y: 0 }}
      exit={{ y: "-100vh" }}
      transition={{ delay: .7, duration: 1, type: "spring", damping: 25, stiffness: 250 }}
      className="h-screen xl:px-48 flex place-items-center">
      <div className="md:px-48 sm:px-12 px-8 flex flex-col gap-3 font-title-sans font-bold">
        <h1 className="lg:text-7xl text-4xl text-zinc-500 dark:text-zinc-300">
          <span className="text-zinc-900 dark:text-zinc-50">Hi.</span> I am <span className="text-zinc-900 dark:text-zinc-50">Bernardo Müller</span>.
        </h1>
        <h2 className="lg:text-6xl text-4xl text-zinc-500 dark:text-zinc-200"><span className="text-zinc-900 dark:text-zinc-50">Designer</span> & <span className="text-zinc-900 dark:text-zinc-50">Developer</span> based in Curitiba, Brazil.</h2>
        <h2 className="font-body-sans font-semibold lg:text-2xl text-xl text-zinc-700 dark:text-zinc-400 pl-1">I like it simple.</h2>
      </div>
    </motion.header>
  )
}