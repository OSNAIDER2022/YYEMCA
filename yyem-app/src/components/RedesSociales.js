import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/RedesSociales.css';
import datos_redes from '../img/redes_sociales/datos_redes';




function RedesSociales() {
    const [ enlace, setEnlace ] = useState('#');

    useEffect(() => {
      window.location.href=enlace;
    },[enlace])

    return(
        <Container>
            <Row>
                <Col>Redes Sociales</Col>
            </Row>
            <Row>
                <Col><img  className='redes_sociales' src={datos_redes.datos_redesSociales[0].imagen} onClick={() => setEnlace(datos_redes.datos_redesSociales[0].url)}/></Col>
                <Col><img  className='redes_sociales' src={datos_redes.datos_redesSociales[1].imagen} onClick={() => setEnlace(datos_redes.datos_redesSociales[1].url)}/></Col>
                <Col><img  className='redes_sociales' src={datos_redes.datos_redesSociales[2].imagen} onClick={() => setEnlace(datos_redes.datos_redesSociales[2].url)}/></Col>
                <Col><img  className='redes_sociales' src={datos_redes.datos_redesSociales[3].imagen} onClick={() => setEnlace(datos_redes.datos_redesSociales[3].url)}/></Col>
                <Col><img  className='redes_sociales' src={datos_redes.datos_redesSociales[4].imagen} onClick={() => setEnlace(datos_redes.datos_redesSociales[4].url)}/></Col>
                <Col><img  className='redes_sociales' src={datos_redes.datos_redesSociales[5].imagen} onClick={() => setEnlace(datos_redes.datos_redesSociales[5].url)}/></Col>
            </Row>
        </Container>
    )
}

export default RedesSociales;