import Head from "next/head";
import { Sunglasses } from "phosphor-react";
import { Header } from "../components/Header";
import { useEffect, useState } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { parseCookies, setCookie } from 'nookies'

export default function Home(props: any) {
  const [theme, setTheme] = useState(props.CookieTheme)

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
      <Head>
        <title>B.Müller &bull; Portfolio</title>
      </Head>
      <main className="dark:bg-zinc-800 bg-zinc-200">
        <Sunglasses
          size={24}
          onClick={handleChangeTheme}
          className="absolute lg:right-8 lg:top-5 right-4 top-8 dark:text-zinc-200  cursor-pointer hover:scale-125 hover:text-zinc-400 duration-200 transition-transform" />
        <Header />
      </main>
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