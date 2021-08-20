import Head from 'next/head'
import Link from 'next/link'
import { config } from '@utils/config'
import { getRecentPostList } from '../utils/contentful'
import { Intro } from '@components/Intro'
import { Container } from '@components/Container'
import { PostList } from '@components/PostList'

export default function Home({ recentPosts }) {
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
        <div className="flex-col gap-s">
          <h3 className="weight-300">Random stuff by</h3>
          <h1 className="italic">Aidan Zealley</h1>
        </div>
      </Intro>

      <div className="flex-col gap-l mt-xl">
        <Container>
          <h2 className="weight-300">Latest Blog Post</h2>
        </Container>

        <PostList posts={recentPosts}/>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const recentPosts = await getRecentPostList();

  return {
    props: {
      recentPosts,
    },
  };
}