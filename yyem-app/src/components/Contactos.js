import { Container, Row, Col } from 'react-bootstrap';
import '../css/Contactos.css'

function Contactos(){
    return(
        <Container>
            <Row>
                <Col>Contáctanos</Col>
            </Row>
            <Row>
                <Col>yyemcataxis@gmail.com</Col>
                <Col>3003474035</Col>
            </Row>
            <Row>
            <Col>Calle 61 #47 - 47 Barrio La Masion, Medellín - Colombia.</Col>
            </Row>
        </Container>
    )
}

export default Contactos;