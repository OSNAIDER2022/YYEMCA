import { Container, Col, Row, Card } from 'react-bootstrap';
import '../css/Portafolio.css'
import datos_portafolio from '../img/portafolio/datos_portafolio.js';



function Portafolio() {
    

    return(
        <Container>
            <Row>
                <Col>
                <h3  className='titulo_portafolio'> Nuestros Servicios</h3>
                </Col>
            </Row>

            <Row xs={1} sm={2} md={2} lg={3} xl={3} xxl={3} className="g-3">
                {Array.from({ length: datos_portafolio.length }).map((_, idx) => (
                    <Col key={idx} className='texto_portafolio'>
                    <Card>
                        <Card.Img variant="top" src={datos_portafolio[idx].imagen} className='imagenes'/>
                        <Card.Body>
                        <Card.Title>{datos_portafolio[idx].titulo}</Card.Title>
                        <Card.Text>
                            {datos_portafolio[idx].descripcion}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
            </Row>

            <Row>
                <Col className='espacio'>
                <Col>
            ¿No te apetece un viaje cómodo y seguro? ¡Reserva tu taxi con nosotros hoy! Te encantará nuestro servicio.
            </Col>
                </Col>
            </Row> 
        </Container>
        )
}

export default Portafolio;