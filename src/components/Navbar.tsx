import Link from "next/link";

export function Navbar() {
  return (
    <nav className="sticky h-12 py-8 lg:flex-row flex-col dark:bg-zinc-800 bg-zinc-200 flex gap-4 justify-between items-center xl:px-24 dark:text-zinc-100">
      <div className="md:flex-row flex flex-col md:gap-8 gap-2 items-center">
        <span className="font-title-serif font-medium text-xl">Bernardo Müller</span>
        <h3 className="font-title-serif text-base">Graphic Designer & Developer</h3>
      </div>

      <ul className="flex md:gap-8 gap-4 font-title-serif text-base tracking-wider">
        <li><Link href="/">About</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li className="font-bold"><Link href="/">Resume</Link></li>
      </ul>
    </nav>
  )
}