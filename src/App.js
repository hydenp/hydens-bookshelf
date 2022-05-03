import './App.css';
import BookCard from './components/BookCard'

const data = {
  books : [
    {
      title: 'Fortune\'s Formula',
      author: 'William Poundstone',
      startDate: 'April 27',
      endDate: '',
      rating: 0
    },
    {
      title: 'Huckleberry Finn',
      author: 'Mark Twain',
      startDate: 'April 27',
      endDate: 'May 5',
      rating: 2
    },
    {
      title: 'Atomic Habit',
      author: 'James Clear',
      startDate: 'Jan 28',
      endDate: 'Feb 5',
      rating: 3
    },
  ]
}

function App() {

  return (
    <div style={styles.pagContent}>
      <div style={styles.titleContainer}>
        <p style={styles.titleText}>Hyden's Bookshelf</p>
        <div style={styles.gradientDiv}></div>
      </div>
      <div style={styles.quotesDiv}>
        <div style={styles.quote}>
          <p style={styles.quoteText}>“I just sit in my office and read all day.”</p>
          <p style={styles.quoteAuthor}>Warren Buffet</p>
        </div>
        <div style={{textAlign: 'right'}}>
          <div style={styles.quote}>
            <p style={styles.quoteText}>“Classic’ - a book which people praise and don’t read.”</p>
            <p style={styles.quoteAuthor}>Mark Twain</p>
          </div>
        </div>
      </div>

      <div style={styles.listContainer}>
        <BookCard book={data.books[0]}/>
        <BookCard book={data.books[1]}/>
        <BookCard book={data.books[2]}/>
        <BookCard book={data.books[1]}/>
        <BookCard book={data.books[1]}/>
        <BookCard book={data.books[1]}/>
      </div>
    </div>
  );
}

const styles = {
  pagContent: {
    display: 'flex',
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'center'
  },
  titleContainer: {
    textAlign: 'center',
    width: '100%',
    position: 'sticky',
    top: 0,
    zIndex: 1000
  },
  gradientDiv: {
    height: 50,
    background: 'linear-gradient(white, transparent 100%)',
  },
  listContainer: {
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
  },
  titleText: {
    fontFamily: 'Roboto',
    fontSize: 64,
    fontWeight: 'bold',
    backgroundColor: 'white',
    margin: 0,
    paddingTop: 50
  },
  quotesDiv: {
    width: '70%',
    padding: 20
  },
  quote: {
    width: 'auto',
    textAlign: 'center',
    display: 'inline-block',
    margin: 5,
  },
  quoteText: {
    fontSize: 24,
    margin: 0
  },
  quoteAuthor: {
    fontStyle: 'italic'
  }
}

export default App;
