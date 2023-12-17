import { useNavigate } from "react-router-dom";
import '../css/Promotion.css';
import { formatCurrency } from "../helpers/currency";



function Promotion({ cook, refridge, app, food, addCart }) {
    const navigate = useNavigate();

       return (
        <div className="Promotion">
            <div><video src="./homeimg/giftidea.mp4" autoPlay controls loop width={'100%'} height={"auto"} /></div>

            <div className='Promotion_top'>
                <h1>BIG SAVING FOR A BIG DREAMS</h1>
                <div className="Promotion_topcontent">
                    Our Complete the Suite savings program brings you a whole lot closer to the kitchen of your dreams. Reach out to your local sales representative to see how we have sweetened this deal to save you up to 35% even more.
                </div>
                <h6 className="Promotion_topbtn"><button onClick={() => navigate(`/products`)} >VIEW ALL</button></h6>
            </div>

                    <div className="PromotionSec1" id="cook" >
                    <div className='PromotionSec1_left'>
                        <h3 className='title'>COOKWARE</h3>
                        <h5>EXPLORE THE COOKWARE COLLECTION SAVE UP TO 25% OFF</h5>
                        <p>From seared filets to sautéed vegetables,cast iron, and roasters provide optimal heating and eye-catching design to elevate everyday meals from stove to oven to table.</p>
                        <h6><button onClick={() => navigate(`/products`)} className="Promotion_btn">View All</button></h6>

                    </div>
                    <div className='PromotionSec1_right'>
                        <ul>
                            {cook.map(c => (
                                <li>
                                    <div className='PromotionItem'>

                                        <div><img src={c.image[0]} alt="cookware" /></div>

                                        <div className="productitem_name"> <h6>{c.name}</h6></div>
                                        <div className='productitem_price'>
                                            <h5> ${c.price}   </h5>
                                            <h6> {formatCurrency(c.price/0.75)} </h6>
                                        </div>

                                        <div className="productitem_bottom">
                                            <button className='btn_add' onClick={() => addCart(c)}>ADD TO CART</button>
                                            <button className='btn_details' onClick={() => navigate(`/detail/${c.id}`)}>DETAILS</button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    </div>
              
                    <div className="PromotionSec2" id="appliances">
                    <div className='PromotionSec2_right'>
                        <ul>
                            {app.map(c => (
                                <li>
                                    <div className='PromotionItem'>

                                        <div><img src={c.image[0]} alt="kitchen-appliances" /></div>

                                        <div className="productitem_name"> <h6>{c.name}</h6></div>

                                        <div className='productitem_price'>
                                            <h5> ${c.price}   </h5>
                                            <h6> {formatCurrency(c.price/0.85)} </h6>
                                        </div>

                                        <div className="productitem_bottom">
                                            <button className='btn_add' onClick={() => addCart(c)}>ADD TO CART</button>
                                            <button className='btn_details' onClick={() => navigate(`/detail/${c.id}`)}>DETAILS</button>
                                        </div>
                                    </div>

                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='PromotionSec2_left'>
                        <h3 className='title'>APPLIANCES</h3>
                        <h5>Save 15% OFF</h5>
                        <p>When you purchase  Hamilton Beach MultiBlend® Kitchen System with Blender and Food Processor or Hamilton Beach Premium Bread Maker . Offer valid through 12/31/23. </p>
                        <h6><button onClick={() => navigate(`/products`)} className="Promotion_btn">View All</button></h6>

                    </div>
                    </div>
                         
               
            <h4>Our latest innovations for your holiday</h4>

           
                 <div className="PromotionLast"  >
                    <div className="PromotionLastItem" >
                        <div className='PromotionLast_itemtop'  id="fridge">
                            <h3 className='title'>REFRIDGERATION</h3>
                            <h5>Save 200$ OFF</h5>
                            <p> When you purchase an 27 cu. ft. Smart Counter-Depth MAX™ French Door Refrigerator or 295L Solid Door Hybrid Chest Freezer. Offer valid through 12/31/2023. </p>
                            <h6><button onClick={() => navigate(`/products`)} className="Promotion_btn">View All</button></h6>

                        </div>

                        <div className='PromotionLast_itembottom'>

                            <ul>
                                {refridge.map(c => (
                                    <li>
                                        <div className='PromotionItem'>

                                            <div><img src={c.image[0]} alt="fridge" /></div>

                                            <div className="productitem_name"> <h6>{c.name}</h6></div>

                                            <div className='productitem_price'> <h5> ${c.price}   </h5>
                                                <h6> {formatCurrency(c.price-200)} </h6>
                                            </div>

                                            <div className="productitem_bottom">
                                                <button className='btn_add' onClick={() => addCart(c)}>ADD TO CART</button>
                                                <button className='btn_details' onClick={() => navigate(`/detail/${c.id}`)}>DETAILS</button>
                                            </div>
                                        </div>

                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>


                    <div className="PromotionLastItem" >

                        <div className='PromotionLast_itemtop'>
                            <h3 className='title'>FOOD STORAGE</h3>
                            <h5>Save 35% OFF</h5>
                            <p> When you purchase THERMOS Stainless King Vacuum-Insulated Food Jar, 24 Ounce, Matte Steel or Stanley Legendary Classic Canteen Water. Offer valid through 12/31/2023.</p>
                            <h6><button onClick={() => navigate(`/products`)} className="Promotion_btn">View All</button></h6>

                        </div>
                        <div className='PromotionLast_itembottom'>

                            <ul>
                                {food.map(c => (
                                    <li>
                                        <div className='PromotionItem'>

                                            <div><img src={c.image[0]} alt="food storage" width={"100%"} height={"100%"} /></div>

                                            <div className="productitem_name"> <h6>{c.name}</h6></div>

                                            <div className='productitem_price'> <h5> ${c.price}   </h5>
                                                <h6> {formatCurrency(c.price/0.65)} </h6>
                                            </div>

                                            <div className="productitem_bottom">
                                                <button className='btn_add' onClick={() => addCart(c)}>ADD TO CART</button>
                                                <button className='btn_details' onClick={() => navigate(`/detail/${c.id}`)}>DETAILS</button>
                                            </div>
                                        </div>

                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>



                </div>
          
           
                

        </div>




    );
}
export default Promotion;