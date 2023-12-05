import HomeCarousel from "./HomeCarousel";
import '../css/Home.css';
import { useNavigate } from "react-router-dom";


function Home() {
    const navigate=useNavigate();
  
    return (
        <div className="Home">
            <HomeCarousel />         
            <div className="HomeBody">

                <div className="HomeBody_title">CHRISTMAST FEATURED DEALS</div>
                <h6 className="HomeBody_button"><button  onClick={() => navigate(`/promotion`)} className="btn">EXPLOSER MORE</button></h6>

                <div className="HomeBody_content">

                    <div className="HomeBody_contentitem" >
                        <img src="./homeimg/home_cook.jpg" alt="cookware " />
                        <div className="HomeBody_contentitemRow1">Elevate your X-mas with up to 25% off Cookware.</div>
                        <div className="HomeBody_contentitemRow2"> Purchase an eligible Counter-Depth MAX refrigerator and get a free 7 cu. ft. compact fridge when you add it to your cart. Offer valid through 11/29/2023. Terms and conditions apply.*</div>
                        <div className="HomeBody_contentitem_btn">   <button onClick={()=>navigate(`/promotion`)}>SHOP NOW</button></div>
                    </div> 

              
                    <div className="HomeBody_contentitem">
                        <img src="./homeimg/home_fridge.jpg" alt="fridge " />
                        <div className="HomeBody_contentitemRow1">   Buy a fridge, get a bonus fridge.</div>
                        <div className="HomeBody_contentitemRow2">   Purchase an eligible Counter-Depth MAX refrigerator and get a free 7 cu. ft. compact fridge when you add it to your cart. Offer valid through 11/29/2023. Terms and conditions apply.*</div>
                        <div className="HomeBody_contentitem_btn">    <button  onClick={()=>navigate(`/promotion`)}>SHOP NOW</button></div>
                    </div>

                    <div className="HomeBody_contentitem" >
                        <img src="./homeimg/home_app.png" alt="kichen appliances" />
                        <div className="HomeBody_contentitemRow1">   Buy more, Save more for Season Greeting</div>
                        <div className="HomeBody_contentitemRow2"> Kick off your holiday saving with  eligible appliances for savings. Offer valid through 11/29/23. Terms and conditions apply.*</div>
                        <div className="HomeBody_contentitem_btn">   <button  onClick={()=>navigate(`/promotion`)}>SHOP NOW</button></div>
                    </div>


                    <div className="HomeBody_contentitem">
                        <img src="./homeimg/home_storage.jpg" alt="food storage " />
                        <div className="HomeBody_contentitemRow1">  Save up to 35% on select vacuum bottles</div>
                        <div className="HomeBody_contentitemRow2">  Huge "Christmas Sale" with up to 35% off its popular line of drinkware, including tumblers, water bottles, mugs and more.</div>
                        <div className="HomeBody_contentitem_btn"> <button  onClick={()=>navigate(`/promotion`)}>SHOP NOW</button> </div>
                    </div>
                </div>
            </div>
           


        </div>
    )
}
export default Home;