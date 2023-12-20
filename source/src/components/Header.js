import '../css/Header.css';
import { Link } from 'react-router-dom';
import { Cart3 } from 'react-bootstrap-icons';
import { Person } from 'react-bootstrap-icons';
import { Telephone, List } from 'react-bootstrap-icons';

import HeaderSearch from './HeaderSearch';

function Header({ handleSubmit, value, carts }) {
    const deleteLocalStorage = () => {
        localStorage.clear();
    }
    const totalQuantity = carts.reduce((total, product) => total + product.quantity, 0);
    console.log(totalQuantity);

    const showMenu = (e) => {
        document.getElementById("headerContent").removeAttribute("hidden");
        return true;
    }
    return (
        <div className='Header'>


            <div className="headerHome">
                <Link to='#' >
                    <li>
                        <div className='headerHomemedia_dropdown' >
                            <div className='headerHomemedia_dropdownbtn'><List /></div>

                            <div className='headerHomemedia_dropdown-content' >
                                <ul >
                                    {/* <Link to='/' className="navbar-link"> <li>HOME</li></Link> */}
                                    <Link to='/promotion' > <li>Promotion</li></Link>

                                    <Link to='/products' ><li>Products</li></Link>
                                    <Link to='/blogs' >
                                        <li>
                                            {/* <div class="headerHome_dropdown"> */}
                                            {/* <div className='dropbtn'> */}
                                            Blog
                                            {/* </div> */}
                                            {/* <div class="dropdown-content">
                                                <Link to="/expert-tips">Expert Tips</Link>

                                            </div>
                                        </div> */}

                                        </li>
                                    </Link>


                                    <Link to='/contact' > <li>
                                        {/* <div class="headerHome_dropdown"> */}
                                        {/* <div className='dropbtn'> */}
                                        Support
                                        {/* </div>
                                        {/* <div class="dropdown-content" hidden id="headerContent"> */}
                                        {/* <Link to="/contact">Contact Us</Link> */}

                                        {/* <Link to="/feedback">Feedback</Link> */}
                                        {/* </div> */}
                                        {/* </div>  */}

                                    </li>
                                    </Link>
                                    <Link to='/about-us' ><li>About Us</li></Link>
                                </ul>
                            </div>
                        </div>
                    </li>
                </Link>

                <div>  <Link to='/'><img src="./homeimg/Logo-Tashas-Design.png" alt="logo" height="100px" width="100px" /></Link></div>

                <div className='headerHomeTab'>  <ul>
                    {/* <Link to='/' > <li>HOME</li></Link> */}
                    <Link to='/promotion' headerHomeTab> <li>PROMOTION</li></Link>

                    <Link to='/products' ><li>PRODUCTS</li></Link>
                    <Link to='/blogs' >
                        <li>
                            <div class="headerHome_dropdown">
                                <div className='dropbtn'>BLOG</div>
                                <div class="dropdown-content">
                                    <Link to="/expert-tips">Expert Tips</Link>

                                </div>
                            </div>

                        </li></Link>


                    <Link to='/contact' > <li>
                        <div class="headerHome_dropdown">
                            <div className='dropbtn '>SUPPORT</div>
                            <div class="dropdown-content">
                                <Link to="/contact">Contact Us</Link>

                                <Link to="/feedback">Feedback</Link>
                            </div>
                        </div>

                    </li></Link>
                    <Link to='/about-us' ><li>ABOUT US</li></Link>
                </ul>
                </div>
                <div></div>

                <div className='headerHome4'>
                    <div class="headersearch" ><HeaderSearch value={value} handleSubmit={handleSubmit} /></div>
                    <div className='headerUser'>
                        {localStorage.getItem('username') ?
                            (<span> Hi, {localStorage.getItem('username')} | <Link to="/log-in" onClick={() => deleteLocalStorage()}>LOG OUT</Link> </span>) :
                            (<Link to="/log-in"><div><Person /></div></Link>)
                        }
                    </div>

                    <Link to='/cart'> <div className='cartQty_container'><Cart3 />{totalQuantity === 0 ?
                        <span className='cartQty hidden' disabled>{totalQuantity}</span> :
                        <span className='cartQty'>{totalQuantity}</span>
                    }</div></Link>
                </div>

            </div>

            <div className='headerHomeTabmedia'>
                <ul >
                    {/* <Link to='/' > <li>HOME</li></Link> */}
                    <Link to='/promotion' headerHomeTab> <li>PROMOTION</li></Link>

                    <Link to='/products' ><li>PRODUCTS</li></Link>
                    <Link to='/blogs' >
                        <li>
                            <div class="headerHome_dropdown">
                                <div className='dropbtn'>BLOG</div>
                                <div class="dropdown-content">
                                    <Link to="/expert-tips">Expert Tips</Link>

                                </div>
                            </div>

                        </li></Link>


                    <Link to='/contact' > <li>
                        <div class="headerHome_dropdown">
                            <div className='dropbtn '>SUPPORT</div>
                            <div class="dropdown-content">
                                <Link to="/contact">Contact Us</Link>

                                <Link to="/feedback">Feedback</Link>
                            </div>
                        </div>

                    </li></Link>
                    <Link to='/about-us' ><li>ABOUT US</li></Link>
                </ul>
            </div>
        </div>
    );
}

export default Header;