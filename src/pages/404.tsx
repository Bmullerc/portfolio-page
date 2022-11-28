import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

export default function Projects() {
  return (
    <>
      <Head>
        <title>B.Müller &bull; 404</title>
      </Head>
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="dark:bg-zinc-800 h-screen bg-zinc-200 flex flex-col justify-center items-center font-body-sans text-zinc-700 dark:text-zinc-400">
        <Image src={"/monke.png"} alt="" width={200} height={200} className="rounded-full mb-8" />
        <h1 className="font-title-sans font-semibold lg:text-5xl text-4xl">404, Friend</h1>
        <p>Looks like you are in the wrong place there amigo.</p>
      </motion.article>
    </>
  )
}