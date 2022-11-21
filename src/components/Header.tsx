export function Header() {
  return (
    <header className="dark:bg-zinc-800 bg-zinc-200 max-h-[1000px] w-screen h-screen xl:px-48 flex place-items-center">
      <div className="md:px-48 sm:px-12 px-8 flex flex-col gap-3 font-title-sans font-bold">
        <h1 className="text-7xl text-zinc-500 dark:text-zinc-300">
          <span className="text-zinc-900 dark:text-zinc-50">Hi.</span> I am <span className="text-zinc-900 dark:text-zinc-50">Bernardo Müller</span>.
        </h1>
        <h2 className="text-6xl text-zinc-500 dark:text-zinc-200">A <span className="text-zinc-900 dark:text-zinc-50">Designer</span> & <span className="text-zinc-900 dark:text-zinc-50">Developer</span> based in Curitiba, Brazil.</h2>
        <h2 className="font-body-sans font-semibold text-2xl text-zinc-700 dark:text-zinc-400 pl-1">I use simplicity to create visually pleasing yet practical projects.</h2>
      </div>
    </header>
  )
}