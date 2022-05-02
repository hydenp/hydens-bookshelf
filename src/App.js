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
      <h1>Hyden's BookShelf</h1>
        <div style={styles.listContainer}>
          <Book book={data.books[0]}/>
          <Book book={data.books[1]}/>
          {/*<Book />*/}
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
    // justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'blue'
  }
}

export default App;
