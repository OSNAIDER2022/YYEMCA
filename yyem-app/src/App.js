import { Container, Col, Row } from 'react-bootstrap';
import './css/App.css';
import Menu from './components/Menu';
import Carrusel from './components/Carrusel';
import PresentationMessage from './components/PresentationMessge';
import Logo from './components/Logo';
import Portafolio from './components/Portafolio';
import AboutMe from './components/AboutMe';


function App() {
  return (
    <Container className='app'>
      {/* <Row>
        <Col md={3}><Logo/></Col>
        <Col md={9}><Menu/></Col>
      </Row> */}
      <Row>
        <Col><Carrusel/></Col>
      </Row>
      <Row>
        <Col><PresentationMessage/></Col>
      </Row>
      <Row>
        <Col><Portafolio/></Col>
      </Row>
      <Row>
        <Col><AboutMe/></Col>
      </Row>
      <Row>
        <Col>CONTACTOS</Col>
        <Col>REDES SOCIALES</Col>
      </Row>
      <Row>
        <Col>firma</Col>
      </Row>
    </Container>
  );
}

export default App;
