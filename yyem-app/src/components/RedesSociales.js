import { Container, Row, Col } from 'react-bootstrap';
import '../css/RedesSociales.css';
import imagenes_redes from '../img/redes_sociales/imagenes_redes';

function RedesSociales() {
    return(
        <Container>
            <Row>
                <Col>Redes Sociales</Col>
            </Row>
            <Row>
                <Col><img  className='redes_sociales' src={imagenes_redes.facebook}/></Col>
                <Col><img  className='redes_sociales' src={imagenes_redes.linkedin}/> </Col>
                <Col><img  className='redes_sociales' src={imagenes_redes.instagram}/> </Col>
                <Col><img  className='redes_sociales' src={imagenes_redes.whatsapp}/> </Col>
                <Col><img  className='redes_sociales' src={imagenes_redes.telegram}/> </Col>
                <Col><img  className='redes_sociales' src={imagenes_redes.tiktok}/> </Col>
            </Row>
        </Container>
    )
}

export default RedesSociales;