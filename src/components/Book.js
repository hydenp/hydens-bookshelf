import bookLogo from '../assets/open-book.png'

function Book(props) {

  return <div style={styles.cardBody}>
    <div style={styles.cardContentLeft}>
      <img style={styles.bookImage} src={bookLogo} alt="Logo" />
      <div style={styles.titleAuthor}>
        <p style={styles.titleText}>{props.book.title}</p>
        <p style={styles.authorText}>{props.book.author}</p>
      </div>
    </div>
    <div style={styles.cardContentRight}>
      <p>some date text</p>
    </div>
  </div>
}


const styles = {
  cardBody : {
    width: '80%',
    height: 'auto',
    padding: 20,
    margin: 20,
    display: 'flex',
    justifyContent: 'space-evenly',
    borderRadius: 10,
    backgroundColor: "#FCFCFC",
  },
  cardContentLeft: {
    width: '65%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'orange'
  },
  cardContentRight: {
    width: '35%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'yellow'
  },
  bookImage: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
  titleAuthor: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
  },
  titleText: {
    fontFamily: 'Roboto',
    fontSize: 32,
    margin: 0,
    fontWeight: 'bold',
  },
  authorText: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: '#6C6C6C',
    margin: 0,
  }
}

export default Book;
