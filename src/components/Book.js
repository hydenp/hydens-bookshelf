import bookLogo from '../assets/open-book.png'
import calendarLogo from '../assets/calendar.png'

function Book(props) {

  return <div style={styles.cardBody}>
    <div style={styles.cardContentLeft}>
      <img style={styles.bookImage} src={bookLogo} alt="open-book-icon" />
      <div style={styles.titleAuthor}>
        <p style={styles.titleText}>{props.book.title}</p>
        <p style={styles.authorText}>{props.book.author}</p>
      </div>
    </div>
    <div style={styles.cardContentRight}>
      <img style={styles.calendarImage} src={calendarLogo} alt="calendar-icon" />
      <p style={styles.dateText}>{props.book.startDate} - {props.book.endDate}</p>
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
    boxShadow: '7px 7px 12px rgba(0, 0, 0, 0.25)'
  },
  cardContentLeft: {
    width: '65%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    // backgroundColor: 'orange'
  },
  cardContentRight: {
    width: '35%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 20,
    // backgroundColor: 'yellow'
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
    fontSize: 32,
    margin: 0,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  authorText: {
    fontSize: 16,
    color: '#6C6C6C',
    margin: 0,
  },
  calendarImage: {
    width: 25,
    margin: 10,
  },
  dateText: {
    fontSize: 16
    // margin
  }
}

export default Book;
