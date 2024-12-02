import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/SocialMedia.css';
import socialMediaData from '../img/socialMedia/socialMediaData';




function SocialMedia() {
    const [ enlace, setEnlace ] = useState('#');

    useEffect(() => {
        //override page
    //window.location.href=enlace;
    window.open(enlace);
    },[enlace])

    return(
        <Container>
            <Row>
                <Col>
                Conoce nuestras Redes Sociales:
                </Col>
            </Row>
            <Row>
                <Col><img  className='redes_sociales' src={socialMediaData.socialMediaData[0].imagen} onClick={() => setEnlace(socialMediaData.socialMediaData[0].url)}/>
                <img  className='redes_sociales' src={socialMediaData.socialMediaData[1].imagen} onClick={() => setEnlace(socialMediaData.socialMediaData[1].url)}/>
                <img  className='redes_sociales' src={socialMediaData.socialMediaData[2].imagen} onClick={() => setEnlace(socialMediaData.socialMediaData[2].url)}/>
                <img  className='redes_sociales' src={socialMediaData.socialMediaData[3].imagen} onClick={() => setEnlace(socialMediaData.socialMediaData[3].url)}/></Col>
                <row>
                Comunícate con nosotros:
                </row>
                <Col>
                <img  className='redes_sociales' src={socialMediaData.socialMediaData[4].imagen} onClick={() => setEnlace(socialMediaData.socialMediaData[4].url)}/>
                <img  className='redes_sociales' src={socialMediaData.socialMediaData[5].imagen} onClick={() => setEnlace(socialMediaData.socialMediaData[5].url)}/>
                </Col>
            </Row>    
        </Container>
    )
}

export default SocialMedia;