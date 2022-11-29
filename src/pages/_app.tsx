import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Socials } from '../components/Socials'
import { Theme, ThemeContext } from '../contexts/ThemeContext'

import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(Theme.light)

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [theme])

  function handleChangeTheme() {
    if (theme === Theme.light) {
      setTheme(Theme.dark)
    } if (theme === "dark") {
      setTheme(Theme.light)
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <AnimatePresence mode='sync'>
        <Socials key={1} />
        <Navbar key={2} handleChangeTheme={handleChangeTheme} />
        <Component {...pageProps} />
      </AnimatePresence>
    </ThemeContext.Provider>
  )
}


