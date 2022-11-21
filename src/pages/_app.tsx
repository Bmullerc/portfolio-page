import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Navbar } from '../components/Navbar'
import { Socials } from '../components/Socials'
import Router from 'next/router'
import { useEffect, useState } from 'react'
import { Loader } from '../components/Loader'
import { Theme, ThemeContext } from '../contexts/ThemeContext'

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [theme, setTheme] = useState(Theme.light)

  useEffect(() => {
    if (theme === Theme.dark) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [theme]);

  function handleChangeTheme() {
    if (theme === Theme.light) {
      setTheme(Theme.dark)
    } else {
      setTheme(Theme.light)
    }
  }

  Router.events.on('routeChangeStart', (url) => {
    console.log("Route is changing...")
    setIsLoading(true)
  })
  Router.events.on('routeChangeComplete', (url) => {
    console.log("Route changing complete.")
    setIsLoading(false)
  })


  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {isLoading && <Loader />}
      <Navbar />
      <Socials />
      <Component {...pageProps} />
    </ThemeContext.Provider>
  )
}
