import Image from "next/image";
import Link from "next/link";
import { Code, CodeSimple } from "phosphor-react";
import { useEffect, useRef, useState } from "react";
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

  const scrollRef = useRef(null)

  function handleClick() {
    setIsOpen(!isOpen)
  }

  function scrollToBottom(scrollRef: any) {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom(scrollRef)
  }, [isOpen]);


  return (
    <article className={`font-body-sans border-r-8 ${isOpen ? "border-zinc-400" : "border-transparent"} lg:px-4 px-2`}>
      <motion.button
        onClick={handleClick}
        className={`lg:text-5xl text-3xl text-start text-zinc-500 font-bold cursor-pointer font-title-sans uppercase mt-2 hover:text-opacity-50 dark:focus:text-zinc-300 focus:text-zinc-700 duration-300 ${isOpen && "text-zinc-800 duration-300 hover:text-opacity-50 dark:text-zinc-200"}`}>{name}</motion.button>
      {isOpen &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex lg:flex-row flex-col gap-4 items-center pt-8 pb-16"
        >
          {image.map((img) =>
            <Link
              key={img.url}
              href={demo}
              target="_blank"
              rel="nofollow"
              className="hover:scale-95 focus:scale-90 duration-300 ease-in-out focus:ring-8 ring-zinc-700 rounded-lg"
            >
              <Image alt="" placeholder="blur" blurDataURL="public/favicon.png" src={img.url} width={400} height={400} className="rounded-lg hover:grayscale-0 grayscale duration-300 ease-in-out lg:max-w-[400px] lg:max-h-[400px] w-auto h-auto" />
            </Link>)}

          <div className="flex flex-col justify-center items-center lg:items-start lg:px-4 py-2">
            {sourceCode &&
              <Link
                href={sourceCode}
                target="_blank"
                rel="nofollow"
                className="w-fit h-fit flex items-center justify-center gap-1 hover:scale-95 focus:scale-95 duration-300 hover:opacity-50 font-semibold mt-2 bg-zinc-700 text-zinc-200 dark:text-zinc-700 dark:bg-zinc-200 rounded-sm px-2 py-1 mb-4"
              >
                <CodeSimple weight="bold" size={16} /> Code <Code weight="regular" size={20} />
              </Link>}

            <p className="h-fit lg:w-2/3">{description}</p>
            <div ref={scrollRef} className="grid grid-cols-3 lg:flex gap-x-2 font-bold text-zinc-500 mt-2">
              {tags.map(tag =>
                <h6 className="bg-zinc-400 rounded-sm px-2 py-[3px] text-zinc-200 text-sm mt-2 text-center" key={tag}>{tag}</h6>
              )}
            </div>
          </div>
        </motion.div>
      }
    </article>
  )
}