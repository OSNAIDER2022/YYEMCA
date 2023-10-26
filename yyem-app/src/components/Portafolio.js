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
            <Row>
                <Col>
                    <Card >
                    <Card.Img variant="top" src={imagenes_portafolio.taxi_tradicional} className='imagenes'/>
                    <Card.Body>
                        <Card.Title>Taxi Tradicional</Card.Title>
                        <Card.Text>
                        ¿Necesitas un transporte seguro y confiable? ¡Reserva tu taxi con nosotros! 
                        Ofrecemos un servicio de taxi tradicional de alta calidad, con vehículos 
                        limpios y conductores amables y profesionales. 
                        Estamos disponibles las 24 horas del día, los 7 días de la semana, para 
                        llevarte a donde necesites ir.
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card>
                    <Card.Img variant="top" src={imagenes_portafolio.taxi_compartido} className='imagenes'/>
                    <Card.Body>
                        <Card.Title>Taxi Compartido</Card.Title>
                        <Card.Text>
                        ¿Buscas un transporte asequible, ecológico y seguro? 
                        ¡Nuestro servicio de taxi compartido es la mejor opción! 
                        Es una forma cómoda y económica de viajar, y ayuda a reducir la 
                        contaminación. Nuestros conductores están capacitados para ofrecer un 
                        servicio de alta calidad, y nuestros vehículos están equipados con las 
                        últimas tecnologías. ¡Reserva tu taxi compartido hoy mismo!
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                    </Card>                
                </Col>
                <Col>
                <Card>
                    <Card.Img variant="top" src={imagenes_portafolio.taxi_ejecutivo} className='imagenes'/>
                    <Card.Body>
                        <Card.Title>Transporte Ejecutivo</Card.Title>
                        <Card.Text>
                        ¿Buscas un servicio de transporte de lujo, cómodo y personalizado? 
                        ¡Nuestro servicio de transporte ejecutivo es la mejor opción! 
                        Ofrecemos vehículos de lujo con conductores profesionales que se 
                        encargarán de todos tus detalles. Nuestros vehículos están equipados 
                        con las últimas tecnologías para que tu viaje sea lo más placentero 
                        posible. ¡Reserva tu servicio de transporte ejecutivo hoy mismo!
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
            <Col>
                <Card >
                    <Card.Img variant="top" src={imagenes_portafolio.aeropuerto} className='imagenes'/>
                    <Card.Body>
                        <Card.Title>Transporte hacia el Aeropuerto</Card.Title>
                        <Card.Text>
                        ¿Necesitas un transporte seguro y confiable para llegar al aeropuerto? 
                        ¡Reserva tu taxi con nosotros! Ofrecemos un servicio de transporte hacia 
                        el aeropuerto de alta calidad, con vehículos limpios y conductores 
                        amables y profesionales. Estamos disponibles las 24 horas del día, 
                        los 7 días de la semana, para llevarte a donde necesites ir.                   
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card>
                    <Card.Img variant="top" src={imagenes_portafolio.nacional_intermunicipal} className='imagenes'/>
                    <Card.Body>
                        <Card.Title>Transporte Intermunicipal y Nacional</Card.Title>
                        <Card.Text>
                        Quieres viajar a tu destino favorito sin preocuparte por nada? 
                        ¡Nuestro servicio de transporte nacional e intermunicipal es la mejor 
                        opción! Nuestros conductores se encargarán de todo, desde la recogida 
                        hasta la entrega. ¡Reserva tu taxi hoy mismo!
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                    </Card>                
                </Col>
                <Col>
                <Card>
                    <Card.Img variant="top" src={imagenes_portafolio.chofer_personalizado} className='imagenes'/>
                    <Card.Body>
                        <Card.Title>Transporte personalizado con chofer</Card.Title>
                        <Card.Text>
                        ¿Quieres viajar como una estrella de cine? 
                        ¡Nuestro servicio de transporte personalizado con chofer asignado es 
                        la opción perfecta! Nuestros vehículos de lujo y nuestros conductores 
                        profesionales harán que tu viaje sea una experiencia inolvidable.
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
            <Col  lg={2}></Col>
            <Col lg={4}>
                <Card>
                    <Card.Img variant="top" src={imagenes_portafolio.administracion_taxis} className='imagenes'/>
                    <Card.Body>
                        <Card.Title>Administracion de vehiculos tipo taxi</Card.Title>
                        <Card.Text>
                        ¿Quieres ahorrar tiempo y dinero en la gestión de tu negocio de taxis? 
                        ¡Nuestro servicio de administración de vehículos tipo taxi es la solución
                        perfecta! Nos encargamos de todo, desde la gestión de flotas hasta la 
                        facturación.
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                    </Card>
            </Col>
            <Col lg={4}>
                <Card>
                    <Card.Img variant="top" src={imagenes_portafolio.venezuela} className='imagenes'/>
                    <Card.Body>
                        <Card.Title>Transporte hacia Caracas, Valencia y Maracaibo con conexion en Paraguachon</Card.Title>
                        <Card.Text>
                        ¿Quieres viajar a Caracas, Valencia o Maracaibo de forma segura y cómoda?
                        ¡Nuestro servicio de transporte es la mejor opción! 
                        Nuestros vehículos están equipados con las últimas tecnologías 
                        para que tu viaje sea lo más placentero posible. 
                        Realizamos conexiones en Paraguachón para que puedas llegar a tu destino 
                        de forma rápida y sencilla.
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                    </Card>
            </Col>
            <Col  lg={2}></Col>
            </Row>
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