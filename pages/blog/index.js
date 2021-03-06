import Head from 'next/head'
import { getPaginatedPostSummaries } from '@utils/contentful'
import { config } from '@utils/config'
import { PostList } from '@components/PostList'
import { Pagination } from '@components/Pagination'

const BlogIndex = ({ posts, currentPage, totalPages }) => {
  const nextDisabled = parseInt(currentPage, 10) === parseInt(totalPages, 10)
  const prevDisabled = parseInt(currentPage, 10) === 1
  const { title, description } = config

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>Blog | {title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid gap-xl">
        <PostList posts={posts}/>
            
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          nextDisabled={nextDisabled}
          prevDisabled={prevDisabled}
        />
      </div>
    </>
  )
}

export default BlogIndex

export async function getStaticProps() {
  const posts = await getPaginatedPostSummaries(1)
  const totalPages = Math.ceil(posts.total / config.pagination.pageSize)

  return {
    props: {
      posts: posts.items,
      totalPages,
      currentPage: 1,
    },
  }
}