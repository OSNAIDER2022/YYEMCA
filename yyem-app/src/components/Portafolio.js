import { Container, Col, Row, Card } from 'react-bootstrap';
import '../css/Portafolio.css'
import imagenes_portafolio from '../img/imagenes_portafolio';


function Portafolio() {
    return(
        <Container>
            <Row>
                <Col>
                <h3  className='titulo_portafolio'> Nuestros Servicios</h3>
                </Col>
            </Row>
            <Row className='texto_portafolio'>
                <Col order={1}>
                    <Card >
                    <Card.Img variant="top" src={imagenes_portafolio.img1} className='imagenes'/>
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                        <p>Transporte hacia el Aeropuerto</p>
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                    </Card>
                </Col>
                <Col order={2}>
                <Card>
                    <Card.Img variant="top" src={imagenes_portafolio.img2} className='imagenes'/>
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                        <p>Transporte Intermunicipal y Nacional</p>
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                    </Card>                
                </Col>
                <Col order={3}>
                <Card>
                    <Card.Img variant="top" src={imagenes_portafolio.img3} className='imagenes'/>
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                        <p>Transporte Ejecutivo  o personalizado a tus necesidades.</p>
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col className='espacio'></Col>
            </Row>
        </Container>
        )
}

export default Portafolio;