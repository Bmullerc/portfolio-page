import Head from "next/head";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>B.Müller &bull; Portfolio</title>
      </Head>
      <main className="dark:bg-zinc-800 bg-zinc-200">
        <Header />
      </main>
    </>
  )
}