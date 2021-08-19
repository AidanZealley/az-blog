import Head from 'next/head'
import Link from 'next/link'
import { config } from '@utils/config'
import { Intro } from '@components/Intro'

export default function Home() {
  const { title, description } = config;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Intro>
        <h1 className="text-5xl leading-tight">Random stuff made by <span className="font-black italic whitespace-nowrap"><Link href="https://github.com/AidanZealley" target="_blank">Aidan Zealley</Link></span></h1>
      </Intro>
    </>
  )
}
