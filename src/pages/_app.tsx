import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Navbar } from '../components/Navbar'
import { Socials } from '../components/Socials'
import Router from 'next/router'
import { useState } from 'react'
import { Loader } from '../components/Loader'

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true)

  Router.events.on('routeChangeStart', (url) => {
    console.log("Route is changing...")
    setIsLoading(true)
  })
  Router.events.on('routeChangeComplete', (url) => {
    console.log("Route changing complete.")
    setIsLoading(false)
  })


  return (
    <>
      {isLoading && <Loader />}
      <Navbar />
      <Socials />
      <Component {...pageProps} />
    </>
  )
}
