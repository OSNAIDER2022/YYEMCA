import { Container, Col, Row } from 'react-bootstrap';
import '../css/Footer.css'
import RedesSociales from './RedesSociales';
import Contactos from './Contactos';
import Banner from '../Banner';

function Footer(){
    return(
        <Container className='footer'>
            <Row>
                <Col lg={7}><Contactos/></Col>
                <Col lg={5}><RedesSociales/></Col>
            </Row>
            <Row>
                <Col>
                <Banner/>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;