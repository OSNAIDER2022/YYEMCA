import { Container, Col, Row } from 'react-bootstrap';
import './css/Banner.css'

function Banner(){
    return(
        <Container className='banner'>
            <Row>
                <Col>
                created by SEOS technology solutions.
                </Col>
            </Row>

        </Container>
    )
}

export default Banner