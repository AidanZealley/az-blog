import { getAllPostSlugs, getPostBySlug } from "@utils/contentful";
import { config } from "@utils/config";
import { PageMeta } from "@components/PageMeta";
import { PostHeader } from "@components/PostHeader";
import { PostBody } from "@components/PostBody";

export default function PostWrapper({ post }) {
  const { date, title, coverImage, tags, body, demoLink } = post;

  console.log(body)

  return (
    <>
      <PageMeta
        title={post.title}
        description={post.description}
        url={`${config.url}/${post.slug}`}
      />

      <div className="flex-col gap-xl">
        <PostHeader date={date} title={title} coverImage={coverImage} tags={tags} demoLink={demoLink}/>
        <PostBody body={body}/>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const blogPostSlugs = await getAllPostSlugs();

  const paths = blogPostSlugs.map((slug) => {
    return { params: { slug } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
}