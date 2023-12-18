import { Link, useNavigate } from 'react-router-dom';
import '../css/Footer.css'
// import { Facebook, Twitter } from 'react-bootstrap-icons';
import { Instagram, Twitter, Youtube, Facebook, Google } from 'react-bootstrap-icons';
import { useState } from "react";
import ModalConfirm from './ModalConfirm';


function Footer() {

    //for validation
    const [error, setErrorEmail] = useState('');

    //store email input
    const [emailadd, setEmailAdd] = useState('');

    const [showModal, setShowModal] = useState(false);
    const [textmodal, setTextModal] = useState('');
    const navigate=useNavigate('');

      const handleSubmit = (e) => {
        e.preventDefault();
        const newemail = { emailadd };
        onSignUp(newemail);
        setEmailAdd('');
    }
    const onSignUp = () => {

        if (!emailadd) {
            setErrorEmail('Email is required !');
            return false;
        }
        else if (!/^[a-zA-Z0-9]{1,20}@[a-zA-Z]{1,5}.com$/.test(emailadd)) {
            setErrorEmail("Email:example@*****.com");
            return false;
        }
        else {
            setErrorEmail('');
            setTextModal('Register successful !');
            setShowModal(true);
            var dataemail = `${emailadd}`;
            localStorage.setItem('data', dataemail);
            return true;
        }
    }

    const handleClose = () => {
        setShowModal(false);
        navigate(`/products`);
     }

    return (
        <div className='Footer'>
            <div className="FooterSocial">
                <div className="FooterSocial_left">
                    <div className='FooterSocial_title'>JOIN OUR COMMUNITY</div>
                    <div>Subscribe to receive exclusive discounts, exciting product information, delicious recipes, and helpful tips</div>

                    <form className="FooterSocial_leftInput" onSubmit={handleSubmit}>
                        <input type="text" placeholder='example@*****.com' value={emailadd}
                            onChange={(e) => setEmailAdd(e.target.value)} />

                        <button type='submit' value="Add">SIGN UP</button>
                        <div><text style={{ color: "red" }}>{error}</text></div>
                    </form>

                </div>
                <div className='FooterSocial_right'>
                    <div className='FooterSocial_title'>STAY CONNECT</div>
                    <ul>
                        <a href='https://www.facebook.com/'><Facebook /></a>
                        <a href='https://www.google.com/'><Google /></a>
                        <a href='https://www.instagram.com'><Instagram /></a>
                        <a href='https://www.twitter.com'><Twitter /></a>
                        <a href='https://www.youtube.com/'><Youtube /></a>
                    </ul>
                </div>

            </div>
            <div className='Footerrow2'>

                <div className='Footer_c1'>
                    <div><h5> <Link to="/terms-of-use">Terms of Use</Link>|  <Link to="/privacy-policy"> Privacy Policy </Link></h5></div>

                    <div className='Footer_c1Content'>
                        | Don't Sell or Share My Information
                    </div>
                    <div className='Footercopyright'><img src="./homeimg/Logo-Tashas-Design.png" alt="logo" width="50px" height={"50px"} />  Copyright © 2023 Tasha Group.All Rights Reserved.
                    </div>
                </div>

                <div>
                    <ul  className='Footer_c2'>
                        <li><h5>Customer Support</h5></li>
                        <li>1800 678 8888</li>
                        <li>(Mon. to Sun. 8AM - 9PM EST)</li>

                    </ul>

                </div>
                <div >
                    <ul  className='Footer_c4'>

                        <li ><h5>Have Tasha Premium Care?</h5></li>
                        <li>1-855-549-0540</li>
                        <li>(Mon. to Fri. 8AM - 11PM EST /<br/> Sat. to Sun. 9AM - 6PM EST)</li>
                    </ul>

                </div>

                <div className='Footer_c3'>
                    <ul>
                        <li><h5>Social Support</h5></li>
                        <a href='https://www.facebook.com/'> <li><Facebook />/TASHASupport</li></a>
                        <a href='https://www.twitter.com'><li> <Twitter />@tashasupport</li></a>
                    </ul>

                </div>
            </div>
            <ModalConfirm show={showModal} handleClose={handleClose} textmodal={textmodal} />

        </div>

    )
}
export default Footer;