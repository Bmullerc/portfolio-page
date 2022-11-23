import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link";
import { useState } from "react";
import { Modal } from "./Modal";

export function ContactButton() {
  const [modalOpen, setModalOpen] = useState(false)

  const close = () => setModalOpen(false)
  const open = () => setModalOpen(true)

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.2, y: -5 }}
        whileTap={{ scale: .9 }}
        onClick={() => (modalOpen ? close() : open())}
      >
        Contact
      </motion.button>

      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {modalOpen
          &&
          <Modal
            modalOpen={modalOpen}
            handleClose={close}
          >
            <div className="text-zinc-700 dark:text-zinc-300 dark:bg-zinc-700 flex flex-col items-center font-body-sans">
              <h1 className="mt-12 font-title-sans text-5xl font-semibold">Want to get in touch?</h1>
              <p className="mt-10 font-body-sans text-2xl">
                You can message me on <Link className="font-bold hover:opacity-50" href="https://www.linkedin.com/in/bernardo-m%C3%BCller-086a64235/" target="_blank" rel="nofollow"> Linkedin</Link>,<Link className="font-bold hover:opacity-50" href="https://discordapp.com/users/Bmullerc#1080" target="_blank" rel="nofollow"> Discord </Link> or you can send me an <span className="font-bold">e-mail</span> bellow.
                <form
                  action="mailto:bernardo.muller.bm@gmail.com"
                  method="POST"
                  name="email-form"
                  className="flex flex-col gap-4 pt-4 pb-20"
                >

                  <label htmlFor="name" className="font-semibold">Name:</label>
                  <input type="text" name="name" id="name" className="w-fit rounded-md bg-zinc-300 focus:ring-2 hover:ring-2 hover:ring-zinc-600 outline-none ring-zinc-900 transition-all duration-150" />

                  <label htmlFor="msg" className="font-semibold">Message:</label>
                  <input type="text" name="msg" id="msg" className="w-50% h-16 rounded-md bg-zinc-300 focus:ring-2 hover:ring-2 hover:ring-zinc-600  outline-none ring-zinc-900 transition-all duration-150" />


                </form>
              </p>
            </div>
          </Modal>
        }
      </AnimatePresence>
    </>

  )
}