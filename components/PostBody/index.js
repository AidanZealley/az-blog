import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import renderOptions from './render-options'
import { Container } from '@components/Container'
import styles from './styles.module.css'

export const PostBody = ({ body }) => {
  console.log(body)
  return (
    <Container size="content">
      <div className={styles.body}>
        {documentToReactComponents(body.json, renderOptions(body.links))}
      </div>
    </Container>
  )
}