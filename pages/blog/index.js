import { getPaginatedPostSummaries } from '@utils/contentful'
import { config } from '@utils/config'
import { Intro } from '@components/Intro'
import { PostList } from '@components/PostList'
import { Pagination } from '@components/Pagination'

const BlogIndex = ({ posts, currentPage, totalPages }) => {
  const nextDisabled = parseInt(currentPage, 10) === parseInt(totalPages, 10)
  const prevDisabled = parseInt(currentPage, 10) === 1

  return (
    <div className="flex-col gap-xl">
      <Intro variant="short">
        <h1 className="text-5xl leading-tight">Blog</h1>
      </Intro>

      <PostList posts={posts}/>
          
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        nextDisabled={nextDisabled}
        prevDisabled={prevDisabled}
      />
    </div>
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