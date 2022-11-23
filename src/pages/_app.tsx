import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import { Navbar } from '../components/Navbar'
import { Socials } from '../components/Socials'
import { useEffect, useState } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { parseCookies, setCookie } from 'nookies'

import '../styles/globals.css'
import { Sunglasses } from 'phosphor-react'

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(pageProps.CookieTheme)

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add('dark')
    } if (theme === "light") {
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
      <AnimatePresence mode='popLayout'>
        <Navbar key={1} />
        <Socials key={2} />
        <Sunglasses
          size={24}
          onClick={handleChangeTheme}
          className="absolute z-20 lg:right-10 lg:top-5 right-4 top-8 dark:text-zinc-200 cursor-pointer hover:scale-125 hover:text-zinc-400 duration-200 transition-transform" />
        <Component {...pageProps} />
      </AnimatePresence>
    </ThemeContext.Provider>
  )
}

export async function getServerSideProps(context: any) {
  const cookies = parseCookies(context)

  setCookie(context, "bmuller_portfolio_theme", "light", {
    maxAge: 86400 * 7,
    path: '/',
  })

  return {
    props: {
      CookieTheme: cookies.bmuller_portfolio_theme
    },
  }
}


