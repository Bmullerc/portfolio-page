import Link from "next/link";
import { motion } from "framer-motion"
import { Contact } from "./Contact";
import { Sunglasses } from "phosphor-react";

interface NavbarProps { handleChangeTheme: () => void }

export function Navbar({ handleChangeTheme }: NavbarProps) {
  return (
    <nav className="absolute top-0 right-0 left-0 z-20 lg:h-12 h-fit lg:py-8 py-2 lg:px-24 px-8 lg:flex-row flex-col flex lg:gap-4 gap-2 justify-between items-center dark:text-zinc-100">
      <div className="md:flex-row flex flex-col md:gap-8 gap-2 items-center">
        <span className="font-title-serif font-medium lg:text-xl text-lg hover:opacity-40"><Link href="/">Bernardo Müller</Link></span>
        <h3 className="font-title-serif text-sm lg:text-base">Graphic Designer & Developer</h3>
      </div>
      <motion.ul className="flex md:gap-8 gap-4 font-title-serif lg:text-base text-sm tracking-wider">
        <motion.li whileHover={{ scale: 1.2, y: -5 }} whileTap={{ scale: .9 }} whileFocus={{ scale: 1.2, y: -5 }} transition={{ duration: .3 }}><Link href="/projects">Projects</Link></motion.li>

        <motion.li><Contact /></motion.li>

        <motion.li whileHover={{ scale: 1.2, y: -5 }} whileTap={{ scale: .9 }} whileFocus={{ scale: 1.2, y: -5 }} transition={{ duration: .3 }} className="font-bold"><Link href="/resume">Resume</Link></motion.li>

        <Sunglasses
          key={3}
          size={24}
          onClick={handleChangeTheme}
          className="absolute z-50 lg:right-10 lg:top-5 right-4 top-8 dark:text-zinc-200 cursor-pointer hover:scale-125 hover:text-zinc-400 duration-200 transition-transform" />
      </motion.ul>
    </nav>
  )
}

