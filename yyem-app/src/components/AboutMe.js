import { Col, Row, Image, Container } from 'react-bootstrap';
import '../css/AboutMe.css'

function AboutMe() {
    return(
        <Container>
        <Row>
            <Col>
                <h3>Sobre Nosotros</h3>        
            </Col>
        </Row>
        <Row>
            <Col>
              <Image src='./src/img/ceo.jpg' roundedCircle/>  
            </Col>
        </Row>
        <Row>
            <Col>
            Et veniam est velit est aliquip pariatur ipsum ad. Cupidatat aliqua aute do voluptate excepteur esse pariatur consectetur adipisicing. Laborum consequat nulla ex aute aliquip ut enim aliqua reprehenderit nostrud et cupidatat culpa. Incididunt fugiat exercitation sint quis laboris. Et exercitation ut excepteur minim nulla. Ad occaecat esse ipsum amet eu dolore laboris dolore fugiat exercitation deserunt duis.        
            </Col>
        </Row>
        </Container>
    )
}

export default AboutMe;