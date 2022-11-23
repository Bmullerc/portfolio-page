import Head from "next/head";
import { Header } from "../components/Header";
import { parseCookies, setCookie } from 'nookies'
import { motion } from "framer-motion"

export default function Home(props: any) {


  return (
    <>
      <Head>
        <title>B.Müller &bull; Portfolio</title>
      </Head>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, y: "-100vh" }}
        transition={{ duration: 1}}
        className="dark:bg-zinc-800 bg-zinc-200"
      >
        <Header />
      </motion.main>
    </>

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




