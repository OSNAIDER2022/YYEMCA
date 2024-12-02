import { Container, Row, Col } from 'react-bootstrap';
import '../css/Contacts.css'

function Contacts(){
    return(
        <Container>
            <Row>
                <Col>Contáctanos:</Col>
            </Row>
            <Row>
                <Col>yyemcacolombia@gmail.com</Col>
                <Col>3017506250</Col>
            </Row>
            <Row>
            <Col>Calle 61 #47 - 47 Barrio La Masion, Medellín - Colombia.</Col>
            </Row>
        </Container>
    )
}

export default Contacts;