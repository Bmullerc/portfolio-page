import { motion } from "framer-motion";
import { BehanceLogo, Code } from "phosphor-react";

export function About() {
  return (
    <motion.article
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      exit={{ y: "100vh" }}
      transition={{ delay: .7, duration: 1, type: "spring", damping: 25, stiffness: 250 }}
      className="lg:pr-64 px-8 pb-12 lg:pb-0 flex place-content-center flex-col gap-6">

      <div className="flex flex-col gap-2 font-normal font-body-sans dark:text-zinc-50">
        <h2 className="font-bold text-3xl font-title-sans text-zinc-500">A bit about me:</h2>
        <p className="">Recently ventured into programming. Started out with Python, but soon realized that my graphic design knowledge and skills complemented front-end development perfectly and decided to pursue this path instead.</p>

        <p>I like things simple in general, including my work. Introverted, calm, creative, like to draw sometimes, dogs and computer games is how I spend my free time.</p>
      </div>

      <h2 className="font-bold text-2xl font-title-sans text-zinc-500">My Stack is React, Next & Typescript currently.</h2>
      {/* 
      <h2 className="flex flex-row items-center gap-2 font-bold text-2xl font-title-sans text-zinc-900"><Code className="bg-zinc-900 rounded-full p-1 text-zinc-200" weight="bold" size={40} />github/bmullerc</h2>

      <h2 className="flex flex-row items-center gap-2 font-bold text-2xl font-title-sans text-zinc-900"><BehanceLogo className="bg-zinc-900 rounded-full p-1 text-zinc-200" weight="bold" size={40} />behance.net/bernardo_muller</h2> */}

    </motion.article>
  )
}