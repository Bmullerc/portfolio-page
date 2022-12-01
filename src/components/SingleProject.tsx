import Image from "next/image";
import Link from "next/link";
import { Code, CodeSimple } from "phosphor-react";
import { useState } from "react";
import { motion } from "framer-motion"

interface SingleProjectProps {
  name: string
  image: [{ url: string }]
  description: string
  sourceCode: string
  demo: string
  tags: [string]
}

export function SingleProject({ name, image, demo, description, sourceCode, tags }: SingleProjectProps) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <article className={`font-body-sans border-r-8 ${isOpen && "border-zinc-400"} px-4`}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`lg:text-5xl text-4xl text-start text-zinc-500 font-bold cursor-pointer font-title-sans uppercase mt-2 hover:text-opacity-50 dark:focus:text-zinc-300 focus:text-zinc-700 duration-300 ${isOpen && "text-zinc-800 duration-300 hover:text-opacity-50 dark:text-zinc-200"}`}>{name}</motion.button>
      {isOpen &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="flex lg:flex-row flex-col gap-4 items-center py-8 mb-8"
        >
          {image.map((img) =>
            <Link
              key={img.url}
              href={demo}
              target="_blank"
              rel="nofollow"
              className="hover:scale-90 focus:scale-90 duration-300 focus:ring-8 ring-zinc-700 rounded-lg"
            >
              <Image alt="" src={img.url} width={400} height={400} className="rounded-lg hover:grayscale-0 grayscale duration-300 w-fit max-w-[500px]" />
            </Link>)}

          <div className="flex flex-col justify-center items-center lg:items-start lg:px-4 py-2">
            <Link
              href={sourceCode}
              target="_blank"
              rel="nofollow"
              className="w-fit h-fit flex items-center justify-center gap-1 hover:scale-90 focus:scale-90 duration-300 hover:opacity-50 font-semibold mt-2 bg-zinc-700 text-zinc-200 rounded-sm px-1 py-[3px] mb-4"
            >
              <CodeSimple weight="bold" size={16} /> Code <Code weight="regular" size={20} />
            </Link>
            <p className="h-fit w-2/3">{description}</p>
            <div className="grid grid-cols-3 lg:grid-cols-12 gap-2 font-bold text-zinc-500 mt-2">
              {tags.map(tag =>
                <h6 className="bg-zinc-400 rounded-sm px-1 py-[3px] text-zinc-200 text-sm mt-4" key={tag}>{tag}</h6>
              )}
            </div>
          </div>
        </motion.div>
      }
    </article>
  )
}