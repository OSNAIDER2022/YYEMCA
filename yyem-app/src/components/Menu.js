import { Container, Col, Row } from 'react-bootstrap';
import '../css/Menu.css';


function Menu() {
  return (
    <Container className='menu'>
      <Row>
        <Col xs={8} sm={8} md={7} lg={6} xl={7} xxl={6} className='columna1_menu'>
          <h1 className='titulo_general'>YYEM CA</h1>
        </Col>
        <Col xs={4} sm={4} md={5} lg={6} xl={5} xxl={6} className='columna2_menu'>
        No competimos, servimos!
        </Col>
      </Row>
    </Container>
  )
}

export default Menu;
