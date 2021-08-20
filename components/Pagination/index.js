import KeyboardArrowLeftRoundedIcon from '@material-ui/icons/KeyboardArrowLeftRounded'
import KeyboardArrowRightRoundedIcon from '@material-ui/icons/KeyboardArrowRightRounded'
import { Container } from '@components/Container'
import { Button } from '@components/Button'
import styles from './styles.module.css'

export const Pagination = ({ totalPages, currentPage, prevDisabled, nextDisabled }) => {
  const pagesArray = Array.from(Array(totalPages).keys()).map(i => i + 1);
  const prevPageUrl =
    currentPage === 2
      ? "/blog"
      : `/blog/page/${currentPage - 1}`
  const nextPageUrl = `/blog/page/${currentPage + 1}`

  return (
    <Container>
      <div className={styles.pagination}>        
        <div className={styles.prev}>
          {!prevDisabled &&
            <Button href={prevPageUrl} size="small" color="light">
              <KeyboardArrowLeftRoundedIcon fontSize="small"/>
              <span className={styles.buttonText}>Prev</span>
            </Button>
          }
        </div>

        <p className={styles.pages}>Page {currentPage} of {totalPages}</p>
        
        <div className={styles.next}>
          {!nextDisabled &&
            <Button href={nextPageUrl} size="small" color="light">
              <span className={styles.buttonText}>Next</span>
              <KeyboardArrowRightRoundedIcon fontSize="small"/>
            </Button>
          }
        </div>
      </div>
    </Container>
  )
}