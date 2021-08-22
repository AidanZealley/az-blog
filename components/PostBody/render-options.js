import Image from 'next/image'
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import { CodeBlock } from '@components/CodeBlock'

const renderOptions = (links) => {
  const assetMap = new Map();

  for (const asset of links.assets.block) {
    assetMap.set(asset.sys.id, asset);
  }

  const entryMap = new Map();

  for (const entry of links.entries.block) {
    entryMap.set(entry.sys.id, entry);
  }

  for (const entry of links.entries.inline) {
    entryMap.set(entry.sys.id, entry);
  }

  return {
    renderNode: {
       [INLINES.EMBEDDED_ENTRY]: (node, children) => {
        const entry = entryMap.get(node.data.target.sys.id);

        if (entry.__typename === "BlogPost") {
          return <a href={`/blog/${entry.slug}`}>{entry.title}</a>;
        }
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
        const entry = entryMap.get(node.data.target.sys.id);

        if (entry.__typename === "CodeBlock") {
          return (
            <CodeBlock code={entry.code} language={entry.language}/>
          );
        }

       if (entry.__typename === "VideoEmbed") {
         return (
            <iframe
              src={entry.embedUrl}
              height="100%"
              width="100%"
              frameBorder="0"
              scrolling="no"
              title={entry.title}
              allowFullScreen={true}
            />
          );
        }

      },
      [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
        const asset = assetMap.get(node.data.target.sys.id);

        return (
          <Image
            src={asset.url}
            height={asset.height}
            width={asset.width}
            alt={asset.description}
          />
        );
      },
    },
  };
}

export default renderOptions