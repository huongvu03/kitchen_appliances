import '../css/Header.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Cart3} from 'react-bootstrap-icons';
import { Person } from 'react-bootstrap-icons';
import { Telephone } from 'react-bootstrap-icons';

function Header() {
    const navigate = useNavigate();
    return (
        <div className="headerHome">
            <div>  <Link to='/'><img src="./homeimg/Logo-Tashas-Design.png" alt="logo" height="100px" width="100px" /></Link></div>
            <ul>
                <Link to='/'> <li>HOME</li></Link>
                <Link to='/producthome'><li>PRODUCTS</li></Link>
                <Link to='/ourblog'> <li>
                    <NavDropdown title="OUR BLOG" id="collapsible-nav-dropdown">
                        <NavDropdown.Item onClick={() => navigate(`/expert-tips`)} className='headerDown'>Expert Tips</NavDropdown.Item>
                    </NavDropdown> </li></Link>
                <Link to='/manuals'> <li>
                    <NavDropdown title="SUPPORT" id="collapsible-nav-dropdown">
                        <NavDropdown.Item onClick={() => navigate(`/contact`)} className='headerDown'> Contact Us</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => navigate(`/feedback`)} className='headerDown'>Feedback</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => navigate(`/register-complain`)} className='headerDown'>Register Complain</NavDropdown.Item>
                       

                        {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                    </NavDropdown>
                </li></Link>
                <Link to='/about-us'><li>ABOUT US</li></Link>
            </ul>
            <div></div>
            <div className='headerHome4'>
                <Link to='/log-in'> <div><Person /></div></Link>
                <Link to='/cart'> <div><Cart3 /></div></Link>
                <div className='headerPhone'><Telephone /> 678 8888</div>
            </div>
        
        </div>
    );
}

export default Header;