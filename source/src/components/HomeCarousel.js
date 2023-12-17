import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';
import { ChevronDoubleRight } from 'react-bootstrap-icons' ;
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
        src="./homeimg/carousel_2.png" 
        alt="Second slide"
      />
      <Carousel.Caption >
                <p>For the coffee connoisseur, every cup is a moment to savor.
          <br/>
           So, why not surprise them with a gift as coveted as their daily brew? .</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item onClick={()=>navigate(`/products`)} className='HomeCarouselContent3'>
      <img height={"600px"}
        className="d-block w-100"
        src="./homeimg/carousel_3.jpg"
        alt="Third slide"
      />
      {/* <Carousel.Caption> */}
     <div>
        <p >
        From lavish holiday dinners to casual celebrations, Tasha has all the small kitchen appliances you need for creating crowd-pleasing dishes with ease.
        </p>
       <p className='HomeCarousel_shop'>Shop Now<ChevronDoubleRight/></p>
        </div>
      {/* </Carousel.Caption> */}
    </Carousel.Item>
  </Carousel>
 
  );
}

export default HomeCarousel;