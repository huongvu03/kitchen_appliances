
import { useNavigate } from "react-router-dom";
import '../css/ProductHome.css';


function ProductHome({ cook, refridge, app, food }) {
    const navigate = useNavigate();
    return (
        <div className="ProductHome">
            <div><video src="./homeimg/giftidea.mp4" controls loop width={'100%'} height={"auto"} /></div>

            <div className='ProductHome_top'>
                <h1>BIG SAVING FOR A BIG DREAMS</h1>
                <div className="ProductHome_topcontent">
                    Our Complete the Suite savings program brings you a whole lot closer to the kitchen of your dreams. Reach out to your local sales representative to see how we have sweetened this deal to save you up to 30% even more.
                </div>
                <h6><button onClick={() => navigate(`/products`)} className="btn">EXPLOSER MORE</button></h6>
            </div>


            <div className="ProductHomeSec1" >

                <div className='ProductHomeSec1_left'>
                    <h3 className='title'>COOKWARE</h3>
                    <h5>EXPLORE THE COOKWARE COLLECTION SAVE UP TO 25% OFF</h5>
                    <p>From seared filets to sautéed vegetables,cast iron, and roasters provide optimal heating and eye-catching design to elevate everyday meals from stove to oven to table.</p>
                </div>

                <div className='ProductHomeSec1_right'>
                    <ul>
                        {cook.map(c => (
                            <li>

                                <div className='ProductHomeItem'>

                                    <div><img src={c.image[0]} /></div>
                                    <div className='productitem_content'>
                                        <h6>{c.name}</h6>
                                        {/* <p>{product.category}</p> */}
                                        <div>${c.price}</div></div>

                                    <div className="productitem_bottom">
                                        <button className='btn_add'>ADD TO CART</button>
                                        <button className='btn_details'>DETAILS</button>

                                    </div>
                                </div>

                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            <div className="ProductHomeSec1">
                <div className='ProductHomeSec1_right'>

                    <ul>
                        {app.map(c => (
                            <li>
                                <div className='ProductHomeItem'>

                                    <div><img src={c.image[0]} /></div>
                                    <div className='productitem_content'>
                                        <h6>{c.name}</h6>
                                        {/* <p>{product.category}</p> */}
                                        <div>${c.price}</div></div>

                                    <div className="productitem_bottom">
                                        <button className='btn_add'>ADD TO CART</button>
                                        <button className='btn_details'>DETAILS</button>

                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='ProductHomeSec1_left'>
                    <h3 className='title'>APPLIANCES</h3>
                    <h5>Save $100</h5>
                    <p>When you purchase 2 eligible LG appliances. Offer valid through 12/29/23. Terms and conditions apply.*</p>
                    <h5>Save $300</h5>
                    <p>When you purchase 3 eligible LG appliances. Offer valid through 12/29/23. Terms and conditions apply.*</p>
                </div>


            </div>
            <h4>Our latest innovations for your holiday</h4>

            <div className="ProductHomeLast">

                <div className="ProductHomeLastItem">

                    <div className='ProductHomeLast_itemleft'>
                        <h3 className='title'>REFRIDGERATION</h3>
                        <h5>Your fridge could use a sidekick</h5>
                        <p>Purchase an eligible Counter-Depth MAX refrigerator and get a free 7 cu. ft. compact fridge when you add it to your cart. Offer valid through 12/29/2023. Terms and conditions apply.*</p>
                    </div>

                    <div className='ProductHomeLast_itemright'>

                        <ul>
                            {refridge.map(c => (
                                <li>
                                    <div className='ProductHomeItem'>

                                        <div><img src={c.image[0]} /></div>
                                        <div className='productitem_content'>
                                            <h6>{c.name}</h6>
                                            {/* <p>{product.category}</p> */}
                                            <div>${c.price}</div></div>

                                        <div className="productitem_bottom">
                                            <button className='btn_add'>ADD TO CART</button>
                                            <button className='btn_details'>DETAILS</button>

                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                <div className="ProductHomeLastItem">

                    <div className='left'>
                        <h3 className='title'>FOOD STORAGE</h3>
                        <p>The legendary Bonneville bloodline itemsis built into our Modern Classics, with an unparalleled performance history, racing success and cultural impact.</p>
                    </div>
                    <div className='right'>

                        <ul>
                            {food.map(c => (
                                <li>
                                    <div className='ProductHomeItem'>

                                        <div><img src={c.image[0]} /></div>
                                        <div className='productitem_content'>
                                            <h6>{c.name}</h6>
                                            {/* <p>{product.category}</p> */}
                                            <div>${c.price}</div></div>

                                        <div className="productitem_bottom">
                                            <button className='btn_add'>ADD TO CART</button>
                                            <button className='btn_details'>DETAILS</button>

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
export default ProductHome;