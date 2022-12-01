import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

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
        className="dark:bg-zinc-800 h-screen bg-zinc-200 flex flex-col justify-center items-center font-body-sans text-zinc-700 dark:text-zinc-300">
        <Image src={"/monke.png"} alt="" width={200} height={200} className="rounded-full mb-8 grayscale" />
        <h1 className="font-title-sans font-semibold lg:text-5xl text-4xl mb-2">404, Friend</h1>
        <p>Looks like you are in the wrong place there amigo.</p>

        <Link href={"/"} className="mt-4 font-bold dark:text-zinc-300 cursor-pointer hover:scale-110 hover:text-zinc-400 dark:hover:text-zinc-100 duration-200">Go back</Link>
      </motion.article>
    </>
  )
}