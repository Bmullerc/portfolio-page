import Head from "next/head";
import { Header } from "../components/Header";
import { parseCookies, setCookie } from 'nookies'
import { motion } from "framer-motion"
import { Sunglasses } from "phosphor-react";
import { useEffect, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Home({ CookieTheme }: any) {
  const [theme, setTheme] = useState(CookieTheme)

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
      <Head>
        <title>B.Müller &bull; Portfolio</title>
      </Head>

      <Sunglasses
        key={3}
        size={24}
        onClick={handleChangeTheme}
        className="absolute z-50 lg:right-10 lg:top-5 right-4 top-8 dark:text-zinc-200 cursor-pointer hover:scale-125 hover:text-zinc-400 duration-200 transition-transform" />
      <motion.main
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        exit={{ y: "-100vh" }}
        transition={{ duration: .7 }}
        className="dark:bg-zinc-800 bg-zinc-200 h-screen overflow-y-scroll"
      >
        <Header />
      </motion.main>
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

