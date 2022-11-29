import Image from "next/image";
import Link from "next/link";

interface SingleProjectProps {
  name: string
  image: [{ url: string }]
  description: string
  sourceCode: string
  demo: string
}

export function SingleProject({name, image, demo, description, sourceCode}: SingleProjectProps) {
  return (
    <article className="grid gap-2 font-body-sans">
      <h1 className="text-2xl font-bold">{name}</h1>
      {image.map((img) =>
        <Link
          key={img.url}
          href={demo}
          target="_blank"
          rel="nofollow"
          className="w-fit"
        >
          <Image alt="" src={img.url} width={250} height={250} className="border-4 rounded-lg border-zinc-500 hover:grayscale-0 grayscale" />
        </Link>)}
      <p>{description}</p>
      <Link
        href={sourceCode}
        target="_blank"
        rel="nofollow"
        className="w-fit hover:scale-90 focus:scale-90 duration-200 hover:opacity-50 font-semibold"
      >
        Source code
      </Link>

    </article>
  )
}