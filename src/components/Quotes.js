import {useMediaQuery} from "react-responsive";


const Quotes = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 650px)' });

  return (
    <div style={isTabletOrMobile ? styles.quotesDivMobile : styles.quotesDiv}>
      <div style={isTabletOrMobile ? styles.quoteMobile : styles.quote}>
        <p style={isTabletOrMobile ? styles.quoteTextMobile : styles.quoteText}>“I just sit in my office and read all day.”</p>
        <p style={isTabletOrMobile ? styles.quoteAuthorMobile : styles.quoteAuthor}>Warren Buffet</p>
      </div>
      <div style={{textAlign: 'right'}}>
        <div style={isTabletOrMobile ? styles.quoteMobile : styles.quote}>
          <p style={isTabletOrMobile ? styles.quoteTextMobile : styles.quoteText}>“Classic’ - a book which people praise and don’t read.”</p>
          <p style={isTabletOrMobile ? styles.quoteAuthorMobile : styles.quoteAuthor}>Mark Twain</p>
        </div>
      </div>
    </div>
  )
}

const styles = {

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
  },
  // mobile styling
  quotesDivMobile: {
    width: '70%',
    padding: 10
  },
  quoteMobile: {
    width: 'auto',
    textAlign: 'center',
    display: 'inline-block',
    margin: 5,
  },
  quoteTextMobile: {
    fontSize: 12,
    margin: 0
  },
  quoteAuthorMobile: {
    fontSize: 10,
    fontStyle: 'italic'
  }
}

export default Quotes;
