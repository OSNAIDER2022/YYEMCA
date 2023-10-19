import { Container, Col, Row } from 'react-bootstrap';
import './css/App.css';

function App() {
  return (
    <Container>
      <Row>
        <Col md={3}>LOGO</Col>
        <Col md={9}>MENU</Col>
      </Row>
      <Row>
        <Col>CARRUSEL y NOMBRE DE LA EMPRESA</Col>
      </Row>
      <Row>
        <Col>MENSAJE DE BIENVENIDA</Col>
      </Row>
      <Row>
        <Col>PORTAFOLIO</Col>
      </Row>
      <Row>
        <Col>ABOUT</Col>
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
