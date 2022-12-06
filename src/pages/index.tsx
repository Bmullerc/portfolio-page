import Head from "next/head";
import { Header } from "../components/Header";
import { motion } from "framer-motion"

import { About } from "../components/About";

export default function Home() {

  return (
    <>
      <Head>
        <title>B.Müller &bull; Portfolio</title>
      </Head>

      <motion.main
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        exit={{ y: "-100vh" }}
        transition={{ duration: .7 }}
        className="dark:bg-zinc-800 bg-zinc-200 h-screen"
      >
        <div className="flex lg:flex-row flex-col justify-center lg:pt-0 pt-20">
          <Header />
          <About />
        </div>
      </motion.main>
    </>

  )
}