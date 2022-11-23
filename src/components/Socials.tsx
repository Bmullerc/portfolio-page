import Link from "next/link";
import { GithubLogo, BehanceLogo, LinkedinLogo, DiscordLogo } from "phosphor-react";
import { motion } from "framer-motion"

export function Socials() {
  return (
    <aside className="grid fixed z-10 right-0 place-content-center bottom-0 top-0 lg:px-8 px-4">
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="font-title-serif text-zinc-50 flex flex-col gap-3">
        <motion.li
          whileTap={{ scale: .9, rotate: -360 }}
          whileHover={{ scale: 1.2, rotate: 360, transition: { duration: .3 } }}
          whileFocus={{ scale: 1.2, rotate: 360, transition: { duration: .3 } }}
          className="dark:bg-zinc-200 dark:text-zinc-800 text-zinc-200 bg-zinc-800 rounded-full px-1 py-1">
          <Link href="https://github.com/Bmullerc" target="_blank" rel="nofollow">
            <GithubLogo size={24} />
          </Link>
        </motion.li>
        <motion.li
          whileTap={{ scale: .9, rotate: -360 }}
          whileHover={{ scale: 1.2, rotate: 360, transition: { duration: .3 } }}
          className="dark:bg-zinc-200 dark:text-zinc-800 text-zinc-200 bg-zinc-800 rounded-full px-1 py-1">
          <Link href="https://www.behance.net/bernardo_muller" target="_blank" rel="nofollow">
            <BehanceLogo size={24} />
          </Link>
        </motion.li>
        <motion.li
          whileTap={{ scale: .9, rotate: -360 }}
          whileHover={{ scale: 1.2, rotate: 360, transition: { duration: .3 } }}
          className="dark:bg-zinc-200 dark:text-zinc-800 text-zinc-200 bg-zinc-800 rounded-full px-1 py-1">
          <Link href="https://www.linkedin.com/in/bernardo-m%C3%BCller-086a64235/" target="_blank" rel="nofollow">
            <LinkedinLogo size={24} />
          </Link>
        </motion.li>
        <motion.li
          whileTap={{ scale: .9, rotate: -360 }}
          whileHover={{ scale: 1.2, rotate: 360, transition: { duration: .3 } }}
          className="dark:bg-zinc-200 dark:text-zinc-800 text-zinc-200 bg-zinc-800 rounded-full px-1 py-1">
          <Link href="https://discordapp.com/users/Bmullerc#1080" target="_blank" rel="nofollow">
            <DiscordLogo size={24} />
          </Link>
        </motion.li>
      </motion.ul>
    </aside>
  )
}