import Head from "next/head";
import { Sunglasses } from "phosphor-react";
import { Header } from "../components/Header";

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
        transition={{ duration: 1.5 }}
        className="dark:bg-zinc-800 bg-zinc-200"
      >
        <Header />
      </motion.main>
    </>

  )
}

