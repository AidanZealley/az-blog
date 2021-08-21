import { config } from "./config";

export const queryContentful = async (query) => {
  const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;

  const requestConfig = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };

  try {
    const response = await fetch(fetchUrl, requestConfig)

    if (!response.ok) throw Error(response.statusText)
    
    const data = await response.json()

    return data;
  } catch (error) {
    throw Error(error);
  }
}

export const getPostBySlug = async (slug) => {
  const query = `{
    blogPostCollection(limit: 1, where: {slug: "${slug}"}) {
      total
      items {
        sys {
          id
        }
        date
        title
        slug
        description
        tags
        coverImage {
          title
          description
          url(transform: {
            width: 1800,
            height: 1200,
            resizeStrategy: FILL,
            resizeFocus: CENTER,
            format: JPG,
            quality: 90
          })
        }
        body
        demoLink
      }
    }
  }`;

  const response = await queryContentful(query);
  const post = response.data.blogPostCollection.items
    ? response.data.blogPostCollection.items
    : [];

  return post.pop();
}

export const getPageContentBySlug = async (slug) => {
  const query = `
  {
    pageContentCollection(limit: 1, where: {slug: "${slug}"}) {
      items {
        sys {
          id
        }
        date
        title
        slug
        description
        tags
        coverImage {
          title
          description
          url(transform: {
            width: 1800,
            height: 1200,
            resizeStrategy: FILL,
            resizeFocus: CENTER,
            format: JPG,
            quality: 90
          })
        }
        body
      }
    }
  }`;

  const response = await queryContentful(query);

  const pageContent = response.data.pageContentCollection.items
    ? response.data.pageContentCollection.items
    : [];

  return pageContent.pop();
}

export const getTotalPostsNumber = async () => {
  const query = `
    {
      blogPostCollection {
        total
      }
    }
  `;

  const response = await queryContentful(query);
  const totalPosts = response.data.blogPostCollection.total
    ? response.data.blogPostCollection.total
    : 0;

  return totalPosts;
}

export const getPaginatedPostSummaries = async (page) => {
  const skipMultiplier = page === 1 ? 0 : page - 1;
  const skip = skipMultiplier > 0 ? config.pagination.pageSize * skipMultiplier : 0;

  const query = `{
      blogPostCollection(limit: ${config.pagination.pageSize}, skip: ${skip}, order: date_DESC) {
        total
        items {
          sys {
            id
          }
          date
          title
          slug
          description
          tags
          coverImage {
            title
            description
            url(transform: {
              width: 1800,
              height: 1200,
              resizeStrategy: FILL,
              resizeFocus: CENTER,
              format: JPG,
              quality: 90
            })
          }
        }
      }
    }`;

  const response = await queryContentful(query);

  const paginatedPostSummaries = response.data.blogPostCollection
    ? response.data.blogPostCollection
    : { total: 0, items: [] };

  return paginatedPostSummaries;
}

export const getRecentPostList = async () => {
  const query = `{
    blogPostCollection(limit: ${config.pagination.recentPostsSize}, order: date_DESC) {
      items {
        sys {
          id
        }
        date
        title
        slug
        description
        tags
        coverImage {
          title
          description
          url(transform: {
            width: 1800,
            height: 1200,
            resizeStrategy: FILL,
            resizeFocus: CENTER,
            format: JPG,
            quality: 90
          })
        }
      }
    }
  }`;

  const response = await queryContentful(query);

  const recentPosts = response.data.blogPostCollection.items
    ? response.data.blogPostCollection.items
    : [];

  return recentPosts;
}

export const getPaginatedSlugs = async (page) => {
  const skipMultiplier = page === 1 ? 0 : page - 1;
  const skip = skipMultiplier > 0 ? queryLimit * skipMultiplier : 0;

  const query = `{
    blogPostCollection(skip: ${skip}, order: date_DESC) {
      total
      items {
        slug
        }
      }
    }`;

  const response = await queryContentful(query);

  const { total } = response.data.blogPostCollection;
  const slugs = response.data.blogPostCollection.items
    ? response.data.blogPostCollection.items.map((item) => item.slug)
    : [];

  return { slugs, total };
}

export const getAllPostSlugs = async () => {
  let page = 1;
  let shouldQueryMoreSlugs = true;
  const returnSlugs = [];

  while (shouldQueryMoreSlugs) {
    const response = await getPaginatedSlugs(page);

    if (response.slugs.length > 0) {
      returnSlugs.push(...response.slugs);
    }

    shouldQueryMoreSlugs = returnSlugs.length < response.total;
    page++;
  }

  return returnSlugs;
}

export const getFeaturedPosts = async () => {
  const query = `
  {
    blogPostCollection(where: {featured: true}) {
      items {
        sys {
          id
        }
        date
        title
        slug
        description
        tags
        coverImage {
          title
          description
          url(transform: {
            width: 300,
            height: 300,
            resizeStrategy: FILL,
            resizeFocus: CENTER,
            format: JPG,
            quality: 80
          })
        }
      }
    }
  }`;

  const response = await queryContentful(query);

  const featuredPosts = response.data.blogPostCollection.items
    ? response.data.blogPostCollection.items
    : [];

  return featuredPosts;
}