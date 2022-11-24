import Image from "next/image";

interface SingleProjectProps {
  title: string
  description: string
  thumbnail: string
  altText: string
}

export function SingleProject({ title, description, thumbnail, altText }: SingleProjectProps) {
  return (
    <article>
      <Image src={`../public/${thumbnail}.png`} alt={altText} />
      <h1>{title}</h1>
      <p>{description}</p>
    </article>
  )
}