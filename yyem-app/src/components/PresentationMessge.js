import { Container, Col, Row } from 'react-bootstrap'
import '../css/PresentationMessage.css';




function PresentationMessage() {
    return(
        <Container className='presentation_mensage'>
            <Row>
            <Col lg={8}>
                
            </Col>
                <Col  className='columna1_presentacion' lg={4}>
                    <h1>Te ofrecemos el mejor servicio de taxi en Medellín,</h1>
                    <p>con una amplia variedad de opciones para satisfacer todas tus necesidades. 
                        Nuestros conductores son amables, profesionales y nuestros vehículos confortables además seguros. </p>                
                </Col>
            </Row>
            <Row>
                <Col  className='columna2_presentacion'>
                    <p>¡Reserva tu taxi hoy mismo y disfruta de una experiencia de viaje inolvidable!</p>
                    
                </Col>
                
            </Row>
        </Container>
        )
}

export default PresentationMessage;

