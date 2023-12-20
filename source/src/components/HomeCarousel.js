import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';

import '../css/Home.css';

function HomeCarousel() {
  const navigate=useNavigate('');
  const navigateToFridge= () => {
    navigate("/promotion#fridge");
    setTimeout(() => {
        const contactSection = document.getElementById("fridge");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    }, 100);
}

  return (
        <Carousel data-bs-theme="dark" >
    <Carousel.Item onClick={navigateToFridge}   className='HomeCarouselItem' >
      <img height={"600px"} 
        className="d-block w-100"
        src="./homeimg/carousel_1.png"
        alt="First slide" 
      />
      {/* <Carousel.Caption>
        
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption> */}
    </Carousel.Item>

    <Carousel.Item onClick={()=>navigate(`/detail/16`)}  className='HomeCarouselItem'>
      <img height={"600px"}
        className="d-block w-100"
        src="./homeimg/carousel_2_edit.png" 
        alt="Second slide"
      />
      <Carousel.Caption >
    
         
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item onClick={()=>navigate(`/products`)} className='HomeCarouselItem'>
      <img height={"600px"}
        className="d-block w-100"
        src="./homeimg/carousel_3.png"
        alt="Third slide"
      />
      {/* <Carousel.Caption> */}
  
      {/* </Carousel.Caption> */}
    </Carousel.Item>
  </Carousel>
 
  );
}

export default HomeCarousel;