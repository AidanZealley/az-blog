import Head from 'next/head'
import { generateImageUrl } from '@utils/open-graph'
import { config } from '@utils/config'

export const PageMeta = ({ title, description, url }) => {
  const siteTitle = `${title} | ${config.title}`

  return (
    <Head>
      <title>{siteTitle}</title>

      <meta name="title" content={siteTitle} />
      <meta property="og:title" content={title} />
      <meta property="twitter:title" content={title} />

      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="twitter:description" content={description} />

      <meta property="og:url" content={url} />
      <meta property="twitter:url" content={url} />

      <meta property="og:image" content={generateImageUrl(title)} />
      <meta
        property="twitter:image"
        content={generateImageUrl(title)}
      />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}