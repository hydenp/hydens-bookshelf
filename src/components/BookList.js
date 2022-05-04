import BookCard from "./BookCard";
import BookCardMobile from "./BookCardMobile";
import { useMediaQuery } from 'react-responsive'


const BookList = (props) => {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 650px)' });
  let items;
  if(isTabletOrMobile) {
    items = props.books.map((d) => <BookCardMobile key={d.title} book={d}/>);
  } else {
    items = props.books.map((d) => <BookCard key={d.title} book={d}/>);
  }

  return (
    <div style={{...styles.listContainer, width: isTabletOrMobile ? '100%' : '70%'}}>
      {items}
    </div>
  )
}

const styles = {
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
    marginBottom: 5,
  },
}

export default BookList;
