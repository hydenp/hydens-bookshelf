import {useState} from "react";
import ReactCardFlip from 'react-card-flip';

import bookLogo from '../assets/open-book.png'
import calendarLogo from '../assets/calendar.png'
import Rating from "./Rating";

const BookCard = (props) => {

  const [isFlipped, setFlipped] = useState(false);
  const [isShown, setIsShown] = useState(false);

  const handleClick = () => {
    setFlipped(!isFlipped);
  }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical" containerStyle={styles.cardContainer}>
      {/* Front of Card */}
      <div style={{...styles.cardBody, backgroundColor: isShown ? '#EAEAEA' : '#FCFCFC'}} onClick={handleClick}
           onMouseEnter={() => setIsShown(true)}
           onMouseLeave={() => setIsShown(false)}>
        <div style={styles.cardContentLeft}>
          <img style={styles.bookImage} src={bookLogo} alt="open-book-icon" />
          <div style={styles.titleAuthor}>
            <p style={styles.titleText}>{props.book.title}</p>
            <p style={styles.authorText}>{props.book.author}</p>
          </div>
        </div>
        <div style={styles.cardContentRight}>
          <img style={styles.calendarImage} src={calendarLogo} alt="calendar-icon" />
          <p style={styles.dateText}>{props.book.startDate} - {props.book.endDate === '' ? 'Present' : props.book.endDate }</p>
        </div>
      </div>

      {/*Back of Card */}
      <div style={{...styles.cardBody, backgroundColor: isShown ? '#EAEAEA' : '#FCFCFC'}} onClick={handleClick}
           onMouseEnter={() => setIsShown(true)}
           onMouseLeave={() => setIsShown(false)}>
        <div style={{width: '100%', padding: 20}}>
          <p style={styles.titleText}>TL;DR</p>
          <p style={styles.authorText}>Here is some content about the book. I really did like it quite a lot, beyond that not sure what to say at this point </p>
        </div>
        <div style={{width: 225, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
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
  },
  cardContentRight: {
    width: '35%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 20,
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
  }
}

export default BookCard;
