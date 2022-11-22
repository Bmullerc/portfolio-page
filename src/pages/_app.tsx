import type { AppProps } from 'next/app'
import { useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Socials } from '../components/Socials'
import { motion, AnimatePresence } from "framer-motion"

import '../styles/globals.css'
import { Modal } from '../components/Modal'

// import Router from 'next/router'
// import { Loader } from '../components/Loader'

export default function App({ Component, pageProps }: AppProps) {
  const [modalOpen, setModalOpen] = useState(false)
  // const [isLoading, setIsLoading] = useState(false)

  // Router.events.on('routeChangeStart', (url) => {
  //   console.log("Route is changing...")
  //   setIsLoading(true)
  // })
  // Router.events.on('routeChangeComplete', (url) => {
  //   console.log("Route changing complete.")
  //   setIsLoading(false)
  // })

  const close = () => setModalOpen(false)
  const open = () => setModalOpen(true)

  return (
    <>
      {/* {isLoading && <Loader />} */}
      <Navbar />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: .9 }}
        className="absolute py-2 px-4 rounded bg-zinc-300 text-zinc-900"
        onClick={() => (modalOpen ? close() : open())}
      >
        Modal
      </motion.button>

      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence>

      <Socials />
      <Component {...pageProps} />
    </>
  )
}


