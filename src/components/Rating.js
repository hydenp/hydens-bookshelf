import emptyStar from '../assets/empty-star.png'
import filledStar from '../assets/filled-star.png'
import { useMediaQuery } from 'react-responsive'

const Rating = (props) => {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 650px)' });

  let styles;
  if( isTabletOrMobile ) {
    styles = {
      container: {
        width: 75,
        textAlign: 'center',
      },
      starImage: {
        padding: 5,
        width: 15,
        height: 15
      }
    };
  } else {
     styles = {
      container: {
        width: 150,
        textAlign: 'center',
      },
      starImage: {
        padding: 5,
        width: 40,
        height: 40
      }
    };
  }

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

export default Rating
