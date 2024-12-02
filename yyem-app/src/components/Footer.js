import { Container, Col, Row } from 'react-bootstrap';
import '../css/Footer.css'
import SocialMedia from './SocialMedia';
import Contacts from './Contacts';
import Banner from '../Banner';

function Footer(){
    return(
        <Container className='footer'>
            <Row>
                <Col lg={6}><Contacts/></Col>
                <Col lg={6}><SocialMedia/></Col>
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