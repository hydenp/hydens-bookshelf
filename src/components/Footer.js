import reactIcon from '../assets/react.png'
import {useMediaQuery} from "react-responsive";

const Footer = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 650px)' });

  return(
    <div style={{...styles.container, height: isTabletOrMobile ? 50 : 100}}>
      <div style={{...styles.reactContainer, width: isTabletOrMobile ? 170 : 200}}>
        <p>Made with React</p>
        <img style={{...styles.reactImage, height: isTabletOrMobile ? 20 : 50 }} src={reactIcon} alt="react-icon" />
      </div>
    </div>
  )
};

const styles = {
  container: {
    width: '100%',
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0
  },
  reactContainer: {
    width: 200,
    height: '100%',
    display: 'flex',
    justifyItems: 'center',
    alignItems: 'center',
    marginRight: 0,
  },
  reactImage: {
    height: 50,
    margin: 10
  }
}

export default Footer;
