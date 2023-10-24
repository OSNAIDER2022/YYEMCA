import { useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import '../css/Carrusel.css';
import imagenes_carrusel from '../img/imagenes_carrusel';



function Carrusel() {
      const [index, setIndex] = useState(0);

      const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
      };


    return(
      <Container className='Carrusel'>
        <Carousel data-bs-theme="light" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imagenes_carrusel.img1}            
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imagenes_carrusel.img2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imagenes_carrusel.img3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </Container>
      )
}

export default Carrusel;