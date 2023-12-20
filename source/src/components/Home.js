import HomeCarousel from "./HomeCarousel";
import '../css/Home.css';
import { useNavigate } from "react-router-dom";
import { ChevronDoubleRight } from 'react-bootstrap-icons' ;


function Home() {
    const navigate = useNavigate();
    const navigateToCook = () => {
        navigate("/promotion#cook");
        setTimeout(() => {
            const productSection = document.getElementById("cook");
            if (productSection) {
                productSection.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
    }

    const navigateToFridge = () => {
        navigate("/promotion#fridge");
        setTimeout(() => {
            const productSection = document.getElementById("fridge");
            if (productSection) {
                productSection.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
    }

    const navigateToApp = () => {
        navigate("/promotion#appliances");
        setTimeout(() => {
            const productSection = document.getElementById("appliances");
            if (productSection) {
                productSection.scrollIntoView({ behavior: "smooth" });
            }
        }, 150);
    }

    const navigateToFood = () => {
        navigate("/promotion#food");
        setTimeout(() => {
            const productSection = document.getElementById("food");
            if (productSection) {
                productSection.scrollIntoView({ behavior: "smooth" });
            }
        }, 150);
    }

    return (
        <div className="Home">
            <HomeCarousel />
            <div className="HomeBody">

                <div className="HomeBody_title"><h1>CHRISTMAST FEATURED DEALS</h1></div>

               <div><h6 className="HomeBody_button"><button onClick={() => navigate(`/promotion`)} >EXPLOSER MORE</button></h6></div> 

                <div className="HomeBody_content">

                    <div className="HomeBody_contentitem" onClick={navigateToCook} >
                        <img src="./homeimg/home_cook.jpg" alt="cookware " />
                        <div className="HomeBody_contentitemRow1">Elevate your X-mas with up to 25% Off Cookware.</div>
                        <div className="HomeBody_contentitemRow2"> Shop Our X-mas sale is a great opportunity to pick up must-have cookware for upcoming holiday festivities .... Offer valid through 12/31/2023. </div>
                        <div className="HomeBody_contentitem_btn">
                            <button onClick={navigateToCook}>SHOP NOW</button>

                        </div>

                    </div>



                    <div className="HomeBody_contentitem" onClick={navigateToFridge}>
                        <img src="./homeimg/home_fridge.jpg" alt="fridge " />
                        <div className="HomeBody_contentitemRow1">   Buy a Fridge, get 200$ CashBack.</div>
                        <div className="HomeBody_contentitemRow2">   Purchase an eligible Counter-Depth MAX refrigerator or 295L Solid Door Hybrid Chest Freezer . Offer valid through 12/31/2023.</div>
                        <div className="HomeBody_contentitem_btn">
                            <button onClick={navigateToFridge}>SHOP NOW</button>

                        </div>

                    </div>


                    <div className="HomeBody_contentitem" onClick={navigateToApp}>
                        <img src="./homeimg/home_app.png" alt="kichen appliances" />
                        <div className="HomeBody_contentitemRow1">   Buy more, Save more for Season Greeting</div>
                        <div className="HomeBody_contentitemRow2"> Kick off your holiday saving with  eligible appliances for savings up to 15% OFF.  Offer valid through 12/31/2023.</div>
                        <div className="HomeBody_contentitem_btn">   <button onClick={navigateToApp}>SHOP NOW</button> </div>


                    </div>



                    <div className="HomeBody_contentitem" onClick={navigateToFood}>
                        <img src="./homeimg/home_storage.png" alt="food storage " />
                        <div className="HomeBody_contentitemRow1">  Save up to 35% on select Vacuum Bottles</div>
                        <div className="HomeBody_contentitemRow2">  Huge "Christmas Sale" with up to 35% off its popular line of drinkware, including vacuum bottles and more.  Offer valid through 12/31/2023.</div>
                        <div className="HomeBody_contentitem_btn"> <button onClick={navigateToFridge}>SHOP NOW</button> </div>
                    </div>




                </div>
               <div><h6 className="HomeBody_buttonmedia"><button onClick={() => navigate(`/promotion`)} >EXPLOSER MORE<ChevronDoubleRight/></button></h6></div> 


                <h2>NEW ARRIVAL</h2>

                <div className="HomeNew1"  id="newarrival">
                    <div className="HomeNew1video"><video src="./homeimg/blenderArrival - Trim.mp4" controls autoPlay  loop width="100%" height={"100%"}/></div>
                    <div className="HomeNew1-content">
                        <h4> HI, HIBISCUS! </h4>
                        <div>
                            Made to turn heads, Hibiscus fosters unexpected connections and celebrates extravagance — inspiring free-spirited adventure in the kitchen.

                        </div>
                        <div className="HomeNew1-btn">  <button onClick={() => navigate(`/detail/13`)}>SHOP NOW</button></div>
                    </div>
                </div>

                <div className="HomeNew2-title">
                    <p>FIT FOR YOUR LIFESTYLE  </p>
                    At the center of your kitchen is refrigeration that keeps up with how you create.
                    Explore the different options below to discover which is best for your home.

                </div>

                <div className="HomeNew2">
                    <div className="HomeNew2Left"><img src="./homeimg/newrefarrival.jpg" alt="fridge" onClick={() => navigate(`/detail/11`)}/></div>
                    <div>
                        <div className="HomeNew2Right" > <video src="./homeimg/fridgevideo.mp4" controls autoPlay loop /></div>

                        <div className="HomeNew2-content" onClick={() => navigate(`/detail/11`)}>
                            <h6>NEW FRENCH DOOR REFRIGERATORS </h6>
                            <h4>DESIGNED TO COMPLEMENT ANY KITCHEN</h4>
                            <div>

                                Discover refrigerators that bring premium style to your kitchen with spacious interiors that keep every ingredient fresh and right within your reach.
                            </div>
                            <div className="HomeNew2-btn">  <button onClick={() => navigate(`/detail/11`)}>SHOP NOW</button></div>

                        </div>
                    </div>

                </div>






            </div >
        </div >

    )
}
export default Home;