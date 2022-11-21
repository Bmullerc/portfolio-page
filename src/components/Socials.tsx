import Link from "next/link";
import { GithubLogo, BehanceLogo, LinkedinLogo, DiscordLogo } from "phosphor-react";

export function Socials() {
  return (
    <aside className="flex fixed right-0 h-screen place-items-end py-48 px-8">
      <ul className="font-title-serif text-zinc-50 flex flex-col gap-3">
        <li className="dark:bg-zinc-200 dark:text-zinc-800 text-zinc-200 bg-zinc-800 rounded-full px-1 py-1"><Link href="https://github.com/Bmullerc"><GithubLogo size={24} /></Link></li>
        <li className="dark:bg-zinc-200 dark:text-zinc-800 text-zinc-200 bg-zinc-800 rounded-full px-1 py-1"><Link href="https://www.behance.net/bernardo_muller"><BehanceLogo size={24} /></Link></li>
        <li className="dark:bg-zinc-200 dark:text-zinc-800 text-zinc-200 bg-zinc-800 rounded-full px-1 py-1"><Link href="https://www.linkedin.com/in/bernardo-m%C3%BCller-086a64235/"><LinkedinLogo size={24} /></Link></li>
        <li className="dark:bg-zinc-200 dark:text-zinc-800 text-zinc-200 bg-zinc-800 rounded-full px-1 py-1"><Link href="https://discordapp.com/users/Bmullerc#1080"><DiscordLogo size={24} /></Link></li>
      </ul>
    </aside>
  )
}