import { Container, Row, Col, Image } from 'react-bootstrap';
import '../css/Logo.css'
import logo from '../img/logo.jpg'

function Logo() {
    return(
        <Container className='logo' fluid='lg'>
            <Row>
                <Col>
                    <Image src={logo} fluid/>
                </Col>
            </Row>
        </Container>
    )
}

export default Logo;