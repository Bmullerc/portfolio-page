import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import { Navbar } from '../components/Navbar'
import { Socials } from '../components/Socials'

import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AnimatePresence mode='sync'>
        <Socials key={1} />
        <Navbar key={2} />
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  )
}


