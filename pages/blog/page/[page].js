import { getTotalPostsNumber, getPaginatedPostSummaries } from "@utils/contentful";
import { config } from "@utils/config";
import { PostList } from "@components/PostList";
import { Pagination } from "@components/Pagination";

export default function BlogIndexPage({ posts, totalPages, currentPage }) {
  const nextDisabled = parseInt(currentPage, 10) === parseInt(totalPages, 10)
  const prevDisabled = parseInt(currentPage, 10) === 1

  return (
    <div className="flex-col gap-xl">
      <PostList posts={posts}/>

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        nextDisabled={nextDisabled}
        prevDisabled={prevDisabled}
      />
    </div>
  );
}

export async function getStaticPaths() {
  const totalPosts = await getTotalPostsNumber();
  const totalPages = Math.ceil(totalPosts / config.pagination.pageSize);

  const paths = [];

  for (let page = 2; page <= totalPages; page++) {
    paths.push({ params: { page: page.toString() } });
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const posts = await getPaginatedPostSummaries(
    params.page,
  );
  const totalPages = Math.ceil(posts.total / config.pagination.pageSize);

  return {
    props: {
      posts: posts.items,
      totalPages,
      currentPage: parseInt(params.page),
    },
  };
}