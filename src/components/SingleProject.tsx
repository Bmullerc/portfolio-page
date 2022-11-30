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
}

export function SingleProject({ name, image, demo, description, sourceCode }: SingleProjectProps) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <article className="font-body-sans">
      <h1 
      onClick={() => setIsOpen(!isOpen)} 
      className={`text-4xl font-bold cursor-pointer font-title-sans uppercase mt-2 ${isOpen && ""}`}>{name}</h1>
      {isOpen &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="flex gap-4 items-center py-8"
        >
          {image.map((img) =>
            <Link
              key={img.url}
              href={demo}
              target="_blank"
              rel="nofollow"
              className=""
            >
              <Image alt="" src={img.url} width={400} height={400} className="rounded-lg hover:grayscale-0 grayscale duration-300 w-fit max-w-[500px]" />
            </Link>)}
          <div className="flex-col">
            <p className="h-fit w-fit">{description}</p>
            <Link
              href={sourceCode}
              target="_blank"
              rel="nofollow"
              className="w-fit h-fit flex items-center justify-center gap-1 hover:scale-90 focus:scale-90 duration-300 hover:opacity-50 font-semibold mt-2"
            >
              <CodeSimple weight="bold" size={16} /> Code <Code weight="regular" size={20} />
            </Link>
          </div>

        </motion.div>
      }


    </article>
  )
}