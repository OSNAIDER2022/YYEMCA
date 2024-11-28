import { Container, Col, Row } from 'react-bootstrap'
import '../css/PresentationMessage.css';




function PresentationMessage() {
    return(
        <Container className='presentation_mensage'>
            <Row>
            <Col lg={8}>
                
            </Col>
                <Col  className='columna1_presentacion' lg={4}>
                    <h1>En Medellín y sus alrededores, tu viaje es más que un trayecto.</h1>
                    Somos la empresa que transforma tus desplazamientos en experiencias inolvidables. Con nosotros, la comodidad y la atención personalizada te acompañarán desde el primer hasta el último kilómetro.
                </Col>
            </Row>
            <Row>
                <Col  className='columna2_presentacion'>
                    <p>¡Reserva tu taxi hoy mismo y disfruta de una experiencia  inolvidable!</p>
                    
                </Col>
                
            </Row>
        </Container>
        )
}

export default PresentationMessage;

