import {useState} from "react";
import ReactCardFlip from 'react-card-flip';

import bookLogo from '../assets/open-book.png'
import calendarLogo from '../assets/calendar.png'
import Rating from "./Rating";

const BookCardMobile = (props) => {

  const [isFlipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!isFlipped);
  }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical" containerStyle={styles.cardContainer}>
      {/* Front of Card */}
      <div style={styles.cardBody} onClick={handleClick}>
        <div style={styles.cardContentLeft}>
          <img style={styles.bookImage} src={bookLogo} alt="open-book-icon" />
          <div style={styles.titleAuthor}>
            <p style={styles.titleText}>{props.book.title}</p>
            <p style={styles.authorText}>{props.book.author}</p>
          </div>
        </div>
        <div style={styles.cardContentRight}>
          <img style={styles.calendarImage} src={calendarLogo} alt="calendar-icon" />
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <p style={styles.dateText}>{props.book.startDate}</p>
            <p style={styles.dateText}>{props.book.endDate === '' ? 'Present' : props.book.endDate}</p>
          </div>
        </div>
      </div>

      {/*Back of Card */}
      <div style={styles.cardBody} onClick={handleClick}>
        <div style={{width: '100%', padding: 20}}>
          <p style={styles.titleText}>TL;DR</p>
          <p style={styles.authorText}>{props.book.tldr === '' ? 'No thoughts yet' : props.book.tldr}</p>
        </div>
        <div style={{width: 100, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Rating rating={props.book.rating}/>
        </div>
      </div>
    </ReactCardFlip>
  )
}


const styles = {
  cardContainer: {
    display: 'flex',
    width: '90%',
  },
  cardBody : {
    height: 'auto',
    padding: 10,
    margin: 10,
    display: 'flex',
    justifyContent: 'space-evenly',
    borderRadius: 10,
    backgroundColor: "#FCFCFC",
    boxShadow: '7px 7px 12px rgba(0, 0, 0, 0.25)'
  },
  cardContentLeft: {
    width: '60%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  cardContentRight: {
    width: '40%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
  },
  bookImage: {
    width: 25,
    height: 25,
    marginRight: 15,
  },
  titleAuthor: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
  },
  titleText: {
    fontSize: 16,
    margin: 0,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  authorText: {
    fontSize: 12,
    color: '#6C6C6C',
    margin: 0,
  },
  calendarImage: {
    width: 15,
    margin: 10,
  },
  dateText: {
    fontSize: 12,
    margin: 2
  }
}

export default BookCardMobile;
