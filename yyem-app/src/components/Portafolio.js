import { useState } from 'react';
import { Container, Col, Row, Card, Modal, Button } from 'react-bootstrap';
import '../css/Portafolio.css'
import datos_portafolio from '../img/portafolio/datos_portafolio.js';



function Portafolio() {
    const [modalShow, setModalShow] = useState(false);

    function MydModalWithGrid(props) {
        return (
          <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Using Grid in Modal
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="grid-example">
              <Container>
                <Row>
                  <Col xs={12} md={8}>
                    .col-xs-12 .col-md-8
                  </Col>
                  <Col xs={6} md={4}>
                    .col-xs-6 .col-md-4
                  </Col>
                </Row>
      
                <Row>
                  <Col xs={6} md={4}>
                    .col-xs-6 .col-md-4
                  </Col>
                  <Col xs={6} md={4}>
                    .col-xs-6 .col-md-4
                  </Col>
                  <Col xs={6} md={4}>
                    .col-xs-6 .col-md-4
                  </Col>
                </Row>
              </Container>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }
      

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
                        <Card.Img variant="top" src={datos_portafolio[idx].imagen} className='imagenes' onClick={() => setModalShow(true)}/>
                        <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
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