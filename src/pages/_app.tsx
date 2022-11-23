import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import { Navbar } from '../components/Navbar'
import { Socials } from '../components/Socials'
import { useEffect, useState } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { setCookie } from 'nookies'

import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(pageProps.CookieTheme)

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [theme])

  function handleChangeTheme() {
    if (theme === "light") {
      setTheme("dark")
      setCookie(null, "bmuller_portfolio_theme", "dark", {
        maxAge: 86400 * 7,
        path: '/',
      })
    } if (theme === "dark") {
      setTheme("light")
      setCookie(null, "bmuller_portfolio_theme", "light", {
        maxAge: 86400 * 7,
        path: '/',
      })
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <AnimatePresence mode='sync'>
        <Socials key={1} />
        <Navbar key={2} />
        <Component {...pageProps} handleChangeTheme={handleChangeTheme} />
      </AnimatePresence>
    </ThemeContext.Provider>
  )
}


