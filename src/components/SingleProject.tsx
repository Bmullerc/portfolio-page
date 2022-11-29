import Image from "next/image";
import Link from "next/link";
import { Code, CodeSimple } from "phosphor-react";

interface SingleProjectProps {
  name: string
  image: [{ url: string }]
  description: string
  sourceCode: string
  demo: string
}

export function SingleProject({ name, image, demo, description, sourceCode }: SingleProjectProps) {
  return (
    <article className="grid gap-2 font-body-sans w-2/3">
      <h1 className="text-2xl font-bold">{name}</h1>
      {image.map((img) =>
        <Link
          key={img.url}
          href={demo}
          target="_blank"
          rel="nofollow"
          className="w-fit h-fit"
        >
          <Image alt="" src={img.url} width={400} height={400} className="rounded-lg hover:grayscale-0 grayscale duration-300" />
        </Link>)}
      <p className="h-fit w-fit">{description}</p>
      <Link
        href={sourceCode}
        target="_blank"
        rel="nofollow"
        className="w-fit h-fit flex items-center justify-center gap-1 hover:scale-90 focus:scale-90 duration-300 hover:opacity-50 font-semibold"
      >
        <CodeSimple weight="bold" size={16} /> Code <Code weight="regular" size={20} />
      </Link>
    </article>
  )
}