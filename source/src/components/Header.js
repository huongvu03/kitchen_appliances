import '../css/Header.css';
import { Link } from 'react-router-dom';
import { Cart3 } from 'react-bootstrap-icons';
import { Person } from 'react-bootstrap-icons';
import { Telephone } from 'react-bootstrap-icons';

import HeaderSearch from './HeaderSearch';

function Header({ handleSubmit,value, carts }) {
    const deleteLocalStorage = () => {
        localStorage.clear();
    }
    const totalQuantity = carts.reduce((total, product) => total + product.quantity, 0);
    console.log(totalQuantity);
    return (
        <div className="headerHome">
            <div>  <Link to='/'><img src="./homeimg/Logo-Tashas-Design.png" alt="logo" height="100px" width="100px" /></Link></div>
            <ul>
                <Link to='/' className="navbar-link"> <li>HOME</li></Link>
                <Link to='/promotion' className="navbar-link"> <li>PROMOTION</li></Link>

                <Link to='/products' className="navbar-link"><li>PRODUCTS</li></Link>
                {/* <Link to='/blogs' className="navbar-link"> <li>OUR BLOG </li></Link> */}
                <Link to='/blogs' className="navbar-link"> <li>
                    <div class="headerHome_dropdown">
                        <div className='dropbtn navbar-link'>OUR BLOG</div>
                        <div class="dropdown-content">
                            {/* <a href="/manuals">Manuals</a> */}
                            <Link to="/expert-tips">Expert Tips</Link>

                            {/* <Link to="/feedback">Feedback</Link> */}
                        </div>
                    </div>

                </li></Link>
                {/* <Link to="/contact">Contact Us</Link> */}

                <Link to='#'className="navbar-link"> <li>
                    <div class="headerHome_dropdown">
                        <div className='dropbtn navbar-link'>SUPPORT</div>
                        <div class="dropdown-content">
                            {/* <a href="/manuals">Manuals</a> */}
                            <Link to="/contact">Contact Us</Link>

                            <Link to="/feedback">Feedback</Link>
                        </div>
                    </div>

                </li></Link>
                <Link to='/about-us' className="navbar-link"><li>ABOUT US</li></Link>
            </ul>
            <div></div>
            <div className='headerHome4'>
                <div class="headersearch" ><HeaderSearch value={value} handleSubmit={handleSubmit} /></div>

                <div className='headerUser'>
                    {localStorage.getItem('username') ?
                        (<span> Hello {localStorage.getItem('username')}, <Link to="/log-in" onClick={() => deleteLocalStorage()}><h6>Log out</h6></Link> </span>) :
                        (<Link to="/log-in"><div><Person /></div></Link>)
                    }
                </div>

                <Link to='/cart'> <div className='cartQty_container'><Cart3 />{totalQuantity === 0 ?
                    <span className='cartQty hidden' disabled>{totalQuantity}</span> :
                    <span className='cartQty'>{totalQuantity}</span>
                }</div></Link>





            </div>

        </div>
    );
}

export default Header;