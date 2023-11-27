import HomeCarousel from "./HomeCarousel";
import '../css/Home.css';
import { Instagram, Twitter, Youtube, Facebook, Google } from 'react-bootstrap-icons';
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate=useNavigate();
    return (
        <div className="Home">
            <HomeCarousel />
            <div className="HomeBody">

                <div className="HomeBody_title">CHRISTMAST FEATURED DEALS</div>
                <div className="HomeBody_btn"><button onClick={()=>navigate(`/producthome`)}>EXPLOSER MORE</button></div>
                <div className="HomeBody_content">

                    <div className="HomeBody_contentitem" >
                        <img src="./homeimg/home_cook.jpg" alt="cookware " />
                        <div className="HomeBody_contentitemRow1">Elevate your X-mas with up to 25% off Cookware.</div>
                        <div className="HomeBody_contentitemRow2"> Purchase an eligible Counter-Depth MAX refrigerator and get a free 7 cu. ft. compact fridge when you add it to your cart. Offer valid through 11/29/2023. Terms and conditions apply.*</div>
                        {/* <button>EXPLOSER MORE</button> */}
                    </div>

              
                    <div className="HomeBody_contentitem">
                        <img src="./homeimg/home_fridge.jpg" alt="fridge " />
                        <div className="HomeBody_contentitemRow1">   Buy a fridge, get a bonus fridge.</div>
                        <div className="HomeBody_contentitemRow2">   Purchase an eligible Counter-Depth MAX refrigerator and get a free 7 cu. ft. compact fridge when you add it to your cart. Offer valid through 11/29/2023. Terms and conditions apply.*</div>
                        {/* <button>EXPLOSER MORE</button> */}
                    </div>

                    <div className="HomeBody_contentitem" >
                        <img src="./homeimg/home_app.png" alt="kichen appliances" />
                        <div className="HomeBody_contentitemRow1">   Buy more, Save more for Season Greeting</div>
                        <div className="HomeBody_contentitemRow2"> Kick off your holiday saving with  eligible appliances for savings. Offer valid through 11/29/23. Terms and conditions apply.*</div>
                        {/* <button>EXPLOSER MORE</button> */}
                    </div>


                    <div className="HomeBody_contentitem">
                        <img src="./homeimg/home_storage.jpg" alt="food storage " />
                        <div className="HomeBody_contentitemRow1">  Save up to 35% on select vacuum bottles</div>
                        <div className="HomeBody_contentitemRow2">  Huge "Christmas Sale" with up to 35% off its popular line of drinkware, including tumblers, water bottles, mugs and more.</div>
                        {/* <button>EXPLOSER MORE</button> */}
                    </div>
                </div>
            </div>
            <div className="HomeSocial">
                <div className="HomeSocial_left">
                    <h5>JOIN OUR COMMUNITY</h5>
                    <div>Subscribe to receive exclusive discounts, exciting product information, delicious recipes, and helpful tips</div>
                    <div className="HomeSocial_leftInput">
                        <input type="email" placeholder='email address' />
                        <button type='submit'>SIGN UP</button>
                    </div>
                </div>
                <div className='HomeSocial_right'>
                    <h5>STAY CONNECT</h5>
                    <ul>
                        <a href='https://www.facebook.com/'><Facebook /></a>
                        <a href='https://www.google.com/'><Google /></a>
                        <a href='https://www.instagram.com'><Instagram /></a>
                        <a href='https://www.twitter.com'><Twitter /></a>
                        <a href='https://www.youtube.com/'><Youtube /></a>
                    </ul>
                </div>

            </div>


        </div>
    )
}
export default Home;