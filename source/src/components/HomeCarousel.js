import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';

function HomeCarousel() {
  const navigate=useNavigate('');
  return (
        <Carousel data-bs-theme="dark" >
    <Carousel.Item onClick={()=>navigate(`/products`)}>
      <img
        className="d-block w-100"
        src="./homeimg/carousel_1.jpg"
        alt="First slide" 
      />
      <Carousel.Caption>
        
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item onClick={()=>navigate(`/products`)}>
      <img
        className="d-block w-100"
        src="./homeimg/carousel_2.jpg" 
        alt="Second slide"
      />
      <Carousel.Caption>
        
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item onClick={()=>navigate(`/products`)}>
      <img
        className="d-block w-100"
        src="./homeimg/carousel_3.jpg"
        alt="Third slide"
      />
      <Carousel.Caption>
     
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
 
  );
}

export default HomeCarousel;