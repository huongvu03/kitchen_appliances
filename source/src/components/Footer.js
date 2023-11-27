import { Link } from 'react-router-dom';
import '../css/Footer.css'
import { Facebook, Twitter } from 'react-bootstrap-icons';
function Footer() {
    return (
        <div className='Footer'>

            <div className='Footer_c1'>
            <div><h5> <Link to="#">Terms of Use</Link>|  <Link to="#"> Privacy Policy </Link></h5></div>   
                
                <div>
                    | Don't Sell or Share My Information
                </div>
                <div><img src="./homeimg/Logo-Tashas-Design.png" alt="logo" width="50px" height={"50px"}/>  Copyright © 2023 Tasha Group. All Rights Reserved.
                </div>
            </div>

            <div>                
                <ul>
                    <li><h5>Customer Support</h5></li>
                    <li> 800-243-0000 or 850-999-4934</li>
                    <li>(Mon. to Sun. 8AM - 9PM EST)</li>
                    
                </ul>

            </div>
            <div >
                <ul>
                   
                    <li><h5>Have Tasha Premium Care?</h5></li>
                    <li>1-855-549-0540</li>
                    <li>(Mon. to Fri. 8AM - 11PM EST / Sat. to Sun. 9AM - 6PM EST)</li>
                </ul>

            </div>

            <div className='Footer_c3'>
                <ul>
                    <li><h5>Social Support</h5></li>
                    <li><Facebook />/TASHASupport</li>
                    <li> <Twitter />@tashasupport</li>
                </ul>

            </div>

        </div>

    )
}
export default Footer;