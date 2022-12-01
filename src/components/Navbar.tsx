import Link from "next/link";
import { Contact } from "./Contact";
import { Sunglasses } from "phosphor-react";

interface NavbarProps { handleChangeTheme: () => void }

export function Navbar({ handleChangeTheme }: NavbarProps) {
  return (
    <nav className="absolute top-0 right-0 left-0 z-20 lg:h-12 h-fit lg:py-8 py-2 lg:px-24 px-8 lg:flex-row flex-col flex lg:gap-4 gap-2 justify-between items-center dark:text-zinc-100">
      <div className="md:flex-row flex flex-col md:gap-8 gap-2 items-center">
        <Link className="focus:outline-8 outline-zinc-800 font-title-serif font-medium lg:text-2xl text-xl hover:opacity-40 hover:scale-90 focus:opacity-40 focus:scale-90 duration-300" href="/">Bernardo Müller</Link>
        <h3 className="font-title-serif text-sm lg:text-base">Graphic Designer & Developer</h3>
      </div>
      <ul className="flex md:gap-8 gap-4 font-title-serif lg:text-base text-sm tracking-wider justify-center items-center">

        <Link href="/projects" className="hover:scale-125 focus:scale-125 duration-300 hover:opacity-40 focus:opacity-40">Projects</Link>

        <Contact />

        <Link href="/resume" className="font-bold hover:scale-125 focus:scale-125 duration-300 hover:opacity-40 focus:opacity-40">Resume</Link>

        <Sunglasses
          key={3}
          size={24}
          onClick={handleChangeTheme}
          className="absolute z-50 lg:right-10 lg:top-5 right-4 top-8 dark:text-zinc-200 cursor-pointer hover:scale-125 hover:text-zinc-400 text-zinc-900 duration-200 transition-transform" />

      </ul>
    </nav>
  )
}

