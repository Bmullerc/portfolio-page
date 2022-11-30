import Link from "next/link";

export function ContactContent() {
  return (
    <div className="text-zinc-700 dark:text-zinc-300 dark:bg-zinc-700 flex flex-col items-center font-body-sans px-12">
      <h1 className="mt-12 font-title-sans text-5xl font-semibold">Want to get in touch?</h1>
      <div className="mt-10 font-body-sans text-2xl">
        You can message me on <Link className="font-bold hover:opacity-50" href="https://www.linkedin.com/in/bernardo-m%C3%BCller-086a64235/" target="_blank" rel="nofollow"> Linkedin</Link>,<Link className="font-bold hover:opacity-50" href="https://discordapp.com/users/Bmullerc#1080" target="_blank" rel="nofollow"> Discord </Link> or you can send me an <span className="font-bold">e-mail</span> bellow.
        <form
          action="https://formsubmit.co/9b4974c43bc9208f39ba2d0e86b1d226"
          method="POST"
          name="email-form"
          className="flex flex-col gap-2 pt-4 pb-20 dark:text-zinc-700"
        >
          <div className="flex gap-2 justify-center items-center mt-2">
            <label htmlFor="name" className="font-semibold text-xl dark:text-zinc-300">Name:</label>
            <input type="text" name="name" id="name" required placeholder="Your name here" className="w-full rounded-md bg-zinc-300 focus:ring-2 hover:ring-2 hover:ring-zinc-50 outline-none ring-zinc-50 transition-all duration-150 py-2 px-4 text-base mb-2" />

            <label htmlFor="email" className="font-semibold text-xl dark:text-zinc-300">E-mail:</label>
            <input type="email" name="email" id="email" required placeholder="Your e-mail here" className="w-full rounded-md bg-zinc-300 focus:ring-2 hover:ring-2 hover:ring-zinc-50 outline-none ring-zinc-50 transition-all duration-150 py-2 px-4 text-base mb-2" />
            </div>

          <input type="hidden" name="_next" value="http://localhost:3000/success"/>


          <label htmlFor="title" className="font-semibold text-xl dark:text-zinc-300">Topic:</label>
          <input type="text" name="title" id="title" required placeholder="What do you want to talk about?" className="w-full rounded-md bg-zinc-300 focus:ring-2 hover:ring-2 hover:ring-zinc-50 outline-none ring-zinc-50 transition-all duration-150 py-2 px-4 text-base mb-2" />


          <label htmlFor="msg" className="font-semibold text-xl dark:text-zinc-300">Message:</label>
          <input type="text" name="msg" id="msg" required placeholder="Your message here" className="w-50% h-24 rounded-md bg-zinc-300 focus:ring-2 hover:ring-2 dark:hover:ring-4 outline-none ring-zinc-50 transition-all duration-150 px-4 text-base mb-2" />

          <button className="bg-zinc-600 text-zinc-300 rounded-lg w-28 py-1 px-3 m-auto hover:text-zinc-600 hover:bg-zinc-300 focus:text-zinc-600 focus:bg-zinc-300 font-semibold">Submit</button>
        </form>
      </div>
    </div>
  )
}