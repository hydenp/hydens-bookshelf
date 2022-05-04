import './App.css';
import Footer from "./components/Footer";
import BookList from './components/BookList'
import {useMediaQuery} from "react-responsive";
import Quotes from "./components/Quotes";

import data from './books.json'


function App() {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 650px)' });

  return (
    <div style={{position: 'relative', minHeight: '100vh'}}>
      <div style={{paddingBottom: isTabletOrMobile ? 50 : 100, width: '100%'}}>
        <div style={styles.pagContent}>

        {/* Title and gradient to disappear */}
        <div style={styles.titleContainer}>
          <p style={{...styles.titleText, fontSize: isTabletOrMobile ? 32 : 64}}>Hyden's Bookshelf</p>
          <div style={{...styles.gradientDiv, height: isTabletOrMobile ? 30 : 50}}></div>
        </div>

        <Quotes />
        <BookList books={data.books}/>
      </div>

      <Footer />
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
