import './App.css';
import Book from './components/Book'

const data = {
  books : [
    {
      title: 'Fortune\'s Formula',
      author: 'William Poundstone',
      startDate: 'April 27',
      endDate: 'May 5'
    },
    {
      title: 'Huckleberry Finn',
      author: 'Mark Twain',
      startDate: 'April 27',
      endDate: 'May 5'
    }
  ]
}

function App() {

  // console.log(data.books)
  // console.log(data.books[0])
  return (
    <div style={styles.pagContent}>
      <p style={styles.titleText}>Hyden's BookShelf</p>

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
        <Book book={data.books[0]}/>
        <Book book={data.books[1]}/>
      </div>
    </div>
  );
}

const styles = {
  pagContent: {
    backgroundColor: 'red',
    display: 'flex',
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'center'
  },
  listContainer: {
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
    backgroundColor: 'blue'
  },
  titleText: {
    fontFamily: 'Roboto',
    fontSize: 64,
    fontWeight: 'bold'
  },
  quotesDiv: {
    width: '80%',
    backgroundColor: 'purple',
    padding: 20
  },
  quote: {
    width: 'auto',
    textAlign: 'center',
    display: 'inline-block',
    margin: 5,
    backgroundColor: 'green'
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
