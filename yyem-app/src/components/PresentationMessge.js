import { Container, Col, Row } from 'react-bootstrap'
import '../css/PresentationMessage.css';




function PresentationMessage() {
    return(
        <Container className='presentation_mensage'>
            <Row>
            <Col lg={8}>
                
            </Col>
                <Col  className='columna1_presentacion' lg={4}>
                    <h1>En Medellín y sus alrededores, tu viaje será más que un trayecto.</h1>
                    Somos la empresa que transforma tus desplazamientos en experiencias inolvidables. Con la comodidad y atención personalizada que tú necesitas.
                </Col>
            </Row>
            <Row>
                <Col  className='columna2_presentacion'>
                    <p>¡Reserva ahora mismo y disfruta de una gran experiencia!</p>
                    
                </Col>
                
            </Row>
        </Container>
        )
}

export default PresentationMessage;

