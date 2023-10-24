import { Container, Col, Row } from 'react-bootstrap';
import '../css/Menu.css';


function Menu() {
  return (
    <Container className='menu'>
      <Row>
        <Col lg={4} className='columna1_menu'>
          <h1 className='titulo_general'>YYEM CA.</h1>
        </Col>
        <Col lg={8} className='columna2_menu'>
          <p>Servicio de taxis a tu disposicion. No competimos, servimos!!</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Menu;
