import { Container, Col, Row } from 'react-bootstrap'
import '../css/PresentationMessage.css';




function PresentationMessage() {
    return(
        <Container className='presentation_mensage'>
            <Row>
            <Col lg={8}>
                
            </Col>
                <Col  className='columna1_presentacion' lg={4}>
                    <h1>Te traemos el mejor servicio de Taxi en Medellín</h1>
                    <p>Con una amplia variedad de servicios de transporte a fin de brindar la mejor experiencia a nuestros usuarios, durante su viaje.</p>                
                </Col>
            </Row>
            <Row>
                <Col  className='columna2_presentacion'>
                    <p>Pide ya mismo tu servicio y danos gusto de atenderte.</p>
                    
                </Col>
                
            </Row>
        </Container>
        )
}

export default PresentationMessage;

