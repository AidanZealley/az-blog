import Head from 'next/head'
import { config } from '@utils/config'
import { getFeaturedPosts, getRecentPostList } from '../utils/contentful'
import { Intro } from '@components/Intro'
import { Container } from '@components/Container'
import { PostList } from '@components/PostList'
import { FeaturedPostList } from '@components/FeaturedPostList'
import { Divider } from '@components/Divider'

export default function Home({ recentPosts, featuredPosts }) {
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
        <div className="grid gap-s">
          <h3 className="weight-300">Random stuff by</h3>
          <h1 className="italic">Aidan Zealley</h1>
        </div>
      </Intro>

      <div className="grid gap-xl mt-xl">
        <div className="grid gap-l">
          <Container>
            <h2 className="weight-300">Latest Post</h2>
          </Container>

          <PostList posts={recentPosts}/>
        </div>

        <Divider/>

        <Container size="content" className="grid gap-l">
          <h2 className="weight-300">Featured Posts</h2>
          <FeaturedPostList posts={featuredPosts}/>
        </Container>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const recentPosts = await getRecentPostList();
  const featuredPosts = await getFeaturedPosts();

  return {
    props: {
      recentPosts,
      featuredPosts,
    },
  };
}