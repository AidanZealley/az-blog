import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import renderOptions from './render-options'
import { Container } from '@components/Container'
import styles from './styles.module.css'

export const PostBody = ({ postBody }) => {
  console.log(postBody)
  return (
    <Container size="content">
      <div className={styles.body}>
        {documentToReactComponents(postBody.json, renderOptions(postBody.links))}
      </div>
    </Container>
  )
}