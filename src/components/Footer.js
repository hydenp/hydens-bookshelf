import reactIcon from '../assets/react.png'

const Footer = () => {
  return(
    <div style={styles.container}>
      <div style={styles.reactContainer}>
        <p>Made with React</p>
        <img style={styles.reactImage} src={reactIcon} alt="react-icon" />
      </div>
    </div>
  )
};

const styles = {
  container: {
    width: '100%',
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
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
