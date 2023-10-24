import { Container, Col, Row } from 'react-bootstrap';
import './css/App.css';
import Menu from './components/Menu';
import PresentationMessage from './components/PresentationMessge';
import Portafolio from './components/Portafolio';
import Footer from './components/Footer';


function App() {
  return (
    <Container className='app'>
      <Menu/>
      <PresentationMessage/>
      <Portafolio/>
      <Footer/>
    </Container>
  );
}

export default App;
