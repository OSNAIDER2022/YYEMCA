import { useEffect, useState } from 'react';
import { Container, Col, Row, Card, Modal, Button, Image } from 'react-bootstrap';
import '../css/Services.css'
import datos_portafolio from '../img/services/servicesData.js';
import lista_precios from '../img/services/serviceContext.js';
import socialMediaData from '../img/socialMedia/socialMediaData.js';


function Services() {
    const [modalShow, setModalShow] = useState(false);
    const [listado, setListado] = useState(lista_precios)
    const [ goToChat, setGoToChat ] = useState('#');
    
    useEffect(() => {window.open(goToChat)},[goToChat])

    function MydModalWithGrid(props) {
    return (
          
          <Modal {...props} aria-labelledby="contained-modal-title-vcenter" size='xl' className='b'>
            <Modal.Header closeButton >
              {/* renderizado de la Card Title */}
              {Array.from({ length: listado.length }).map((_, idg) => (
                <Modal.Title id="contained-modal-title-vcenter">
                  <div className='tituloContext'>
                    {listado[idg].item1}
                  </div>
                </Modal.Title>
              ))}
              
            </Modal.Header>
            <Modal.Body>
              <Container>
                {/* renderizado de la image and context Card */}
                {Array.from({ length: listado.length }).map((_, idg) => (
                  <Row key={idg} className='c'>
                    <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4}>
                      <Image className='imageContext' src={listado[idg].item2} fluid/>                           
                    </Col>
                    <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8}>
                      <Row>{listado[idg].item3}</Row>
                      <Row className='textCenter'>{listado[idg].item4}</Row>
                      <Row>{listado[idg].item5}</Row>
                    </Col>
                  </Row>
                ))} 
              </Container>
            </Modal.Body>
            <Modal.Footer>
              {/* <Button variant='secondary' onClick={props.onHide}>Close</Button> */}
              <Button variant='warning' onClick={props.onSubmit} onClickCapture={() =>  setGoToChat(socialMediaData.socialMediaData[4].url)}>Contáctanos</Button>
              {/* <Button variant='info' onClick={props.onSubmit} onClickCapture={() =>  setGoToChat(socialMediaData.socialMediaData[5].url)}>Contáctanos</Button> */}
            </Modal.Footer>
          </Modal>
          
        );
      }
      


    return(
        <Container>
            <Row>
                <Col>
                <h3  className='titulo_portafolio'> Conoce nuestros servicios, haciendo click en las imágenes:</h3>
                </Col>
            </Row>

            <Row xs={1} sm={2} md={2} lg={3} xl={3} xxl={3} className="g-4">
                {Array.from({ length: datos_portafolio.length }).map((_, idx) => (
                    <Col key={idx} className='texto_portafolio'>
                    <Card  className='back1'>
                        <Card.Img variant="top" src={datos_portafolio[idx].imagen} className='imagenes' onClick={() => setModalShow(true) & setListado(datos_portafolio[idx].id_lista)}/>
                        <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
                        <Card.Body>
                        <Card.Title>
                          {datos_portafolio[idx].titulo}
                        </Card.Title>
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
            
            Viaja con nosotros y tendras un viaje cómodo y seguro.
            
                </Col>
            </Row> 
        </Container>
        )
}

export default Services;