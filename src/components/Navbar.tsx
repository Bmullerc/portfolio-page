import Link from "next/link";
import { motion } from "framer-motion"
import { ContactButton } from "./ContactButton";

export function Navbar() {

  const list = {
    whileTap: { scale: .9 },
    whileHover: { scale: 1.1 }
  }
  return (
    <nav className="sticky h-12 py-8 lg:px-24 px-8 lg:flex-row flex-col dark:bg-zinc-800 bg-zinc-200 flex gap-4 justify-between items-center dark:text-zinc-100">
      <div className="md:flex-row flex flex-col md:gap-8 gap-2 items-center">
        <span className="font-title-serif font-medium lg:text-xl text-lg">Bernardo Müller</span>
        <h3 className="font-title-serif text-sm lg:text-base">Graphic Designer & Developer</h3>
      </div>
      <motion.ul className="flex md:gap-8 gap-4 font-title-serif lg:text-base text-sm tracking-wider">
        <motion.li variants={list}><Link href="/">About</Link></motion.li>
        <motion.li><Link href="/projects">Projects</Link></motion.li>
        <motion.li>
          <ContactButton />
        </motion.li>
        <motion.li className="font-bold"><Link href="/">Resume</Link></motion.li>
      </motion.ul>
    </nav>
  )
}

