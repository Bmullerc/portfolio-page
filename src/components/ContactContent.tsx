import Link from "next/link";

export function ContactContent() {
  return (
    <div className="text-zinc-700 dark:text-zinc-300 dark:bg-zinc-700 flex flex-col items-center font-body-sans px-12">
      <h1 className="mt-12 font-title-sans text-5xl font-semibold">Want to get in touch?</h1>
      <div className="mt-10 font-body-sans text-2xl">
        You can message me on <Link className="font-bold hover:opacity-50" href="https://www.linkedin.com/in/bernardo-m%C3%BCller-086a64235/" target="_blank" rel="nofollow"> Linkedin</Link>,<Link className="font-bold hover:opacity-50" href="https://discordapp.com/users/Bmullerc#1080" target="_blank" rel="nofollow"> Discord </Link> or you can send me an <span className="font-bold">e-mail</span> bellow.
        <form
          action="mailto:bernardo.muller.bm@gmail.com"
          method="POST"
          name="email-form"
          className="flex flex-col gap-1 pt-4 pb-20 dark:text-zinc-700"
        >

          <label htmlFor="name" className="font-semibold text-xl dark:text-zinc-300">Name:</label>
          <input type="text" name="name" id="name" placeholder="Your name here" className="w-fit rounded-md bg-zinc-300 focus:ring-2 hover:ring-2 hover:ring-zinc-50 outline-none ring-zinc-50 transition-all duration-150 py-2 px-4 text-base mb-2" />
          

          <label htmlFor="msg" className="font-semibold text-xl dark:text-zinc-300">Message:</label>
          <input type="text" name="msg" id="msg" placeholder="Type your message here" className="w-50% h-24 rounded-md bg-zinc-300 focus:ring-2 hover:ring-2 dark:hover:ring-4 outline-none ring-zinc-50 transition-all duration-150 px-4 text-base mb-2" />

          <button className="bg-zinc-600 text-zinc-300 rounded-md w-28 py-1 px-2 m-auto hover:text-zinc-600 hover:bg-zinc-300 focus:text-zinc-600 focus:bg-zinc-300">Submit</button>
        </form>
      </div>
    </div>
  )
}