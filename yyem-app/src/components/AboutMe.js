import { Col, Row, Image, Container } from 'react-bootstrap';
import '../css/AboutMe.css'
import foto_ceo from '../img/ceo.jpg'

function AboutMe() {
    return(
        <Container className='aboutMe'>
        <Row>
            <Col>
            <h3>Sobre Nosotros</h3>        
              <Image src={foto_ceo} className='foto_ceo'/>  
            </Col>
            <Col>
                <p>Et veniam est velit est aliquip pariatur ipsum ad. Cupidatat aliqua aute do voluptate excepteur esse pariatur consectetur adipisicing. Laborum consequat nulla ex aute aliquip ut enim aliqua reprehenderit nostrud et cupidatat culpa. Incididunt fugiat exercitation sint quis laboris. Et exercitation ut excepteur minim nulla. Ad occaecat esse ipsum amet eu dolore laboris dolore fugiat exercitation deserunt duis.</p>
            </Col>
        </Row>
        </Container>
    )
}

export default AboutMe;