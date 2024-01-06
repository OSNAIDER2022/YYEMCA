import { useState } from 'react';
import { Container, Col, Row, Card, Modal, Button } from 'react-bootstrap';
import '../css/Portafolio.css'
import datos_portafolio from '../img/portafolio/datos_portafolio.js';
import precios from '../img/portafolio/lista_precios.js';



function Portafolio() {
    const [modalShow, setModalShow] = useState(false);
    const [listado, setListado] = useState(precios)

    function MydModalWithGrid(props) {
        return (
          <Modal {...props} aria-labelledby="contained-modal-title-vcenter" className="b">
            <Modal.Header closeButton >
              <Modal.Title id="contained-modal-title-vcenter">
                Precios de viaje:
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Container>
                <Row>
                  <Col xs={6} md={4}>
                    Destino
                  </Col>
                  <Col xs={6} md={4}>
                    Hora de Salida
                  </Col>
                  <Col xs={6} md={4}>
                    Valor
                  </Col>
                </Row>

                {/* renderizado de la lista de precios */}
                {Array.from({ length: listado.length }).map((_, idg) => (
                  <Row key={idg} className='c'>
                    <Col xs={6} md={4}>
                      {listado[idg].destino}
                    </Col>
                    <Col xs={6} md={4}>
                      {listado[idg].hora_salida}
                    </Col>
                    <Col xs={6} md={4}>
                      {listado[idg].valor}
                    </Col>
                  </Row>
                ))}                
                
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

            <Row xs={1} sm={2} md={2} lg={3} xl={3} xxl={3} className="g-4">
                {Array.from({ length: datos_portafolio.length }).map((_, idx) => (
                    <Col key={idx} className='texto_portafolio'>
                    <Card  className='back1'>
                        <Card.Img variant="top" src={datos_portafolio[idx].imagen} className='imagenes' onClick={() => setModalShow(true) && setListado(datos_portafolio[idx].id_lista)}/>
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