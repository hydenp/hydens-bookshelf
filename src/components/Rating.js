import emptyStar from '../assets/empty-star.png'
import filledStar from '../assets/filled-star.png'

const Rating = (props) => {

  if(props.rating === 1) {
    return(
      <div style={styles.container}>
        <img style={styles.starImage} src={filledStar} alt="open-book-icon" />
        <img style={styles.starImage} src={emptyStar} alt="open-book-icon" />
        <img style={styles.starImage} src={emptyStar} alt="open-book-icon" />
      </div>
    )
  } else if(props.rating === 2) {
    return(
      <div style={styles.container}>
        <img style={styles.starImage} src={filledStar} alt="open-book-icon" />
        <img style={styles.starImage} src={filledStar} alt="open-book-icon" />
        <img style={styles.starImage} src={emptyStar} alt="open-book-icon" />
      </div>
    )
  } else if(props.rating === 3) {
    return(
      <div style={styles.container}>
        <img style={styles.starImage} src={filledStar} alt="open-book-icon" />
        <img style={styles.starImage} src={filledStar} alt="open-book-icon" />
        <img style={styles.starImage} src={filledStar} alt="open-book-icon" />
      </div>
    )
  } else {
    return(
      <div style={styles.container}>
        <p style={{fontWeight: 'bold'}}>N/A</p>
      </div>
    )
  }
}

const styles = {
  container: {
    width: 150,
    textAlign: 'center',
  },
  starImage: {
    padding: 5,
    width: 40,
    height: 40
  }
}

export default Rating
