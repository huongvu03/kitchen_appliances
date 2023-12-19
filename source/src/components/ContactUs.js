import { useState } from 'react';
import '../css/ContactUs.css';
import { Twitter, Facebook, Google } from 'react-bootstrap-icons';
import { TelephoneOutbound, People, EnvelopeCheck } from 'react-bootstrap-icons';
import ModalConfirm from './ModalConfirm';
import { useNavigate } from 'react-router-dom';

function ContactUs() {
    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [mess, setMess] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [textmodal, setTextModal] = useState('');
    const [error, setError] = useState('');
    const [emailerror, setemailError] = useState('');
    const navigate=useNavigate('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!fname || !lname || !mess || !email) {
            setError(' Type is required');
            setemailError(' Type is required');
            return false;
        }

        else if (!/^[a-zA-Z0-9]{1,20}@[a-zA-Z]{1,5}.com$/.test(email)) {
            setemailError("Email:example@*****.com");
            return false;
        }

        else {
            // const newProduct ={name,contact, email, location,feedback};
            // onAddContact(newProduct);
            setFName('');
            setLName('');
            setEmail('');
            setMess('');
            setTextModal("Thank you for contact us! We will get back to you soon!");
            setShowModal(true);
            setError('');
            setemailError('');

        }
    }
    const handleClose = () => {
        setShowModal(false);
        navigate(`/`);
    }

    return (
        <div className='ContactUs'>
            <div className='ContactUs_top'>
                <div><img src='contact_us_img/email.jpg' alt='contact' width={"100%"} height={"500px"} /></div>
                <div className='ContactUs_topcontent'>

                    <h1>CONTACT US</h1>
                    We'd love to help you. Here's how you can reach us.


                </div>
            </div>


            <div className='Contact_info'>

                <div className='Contact_infoCol' >
                <div className='Contact_infoColContent'>
                    <div className='Contact_infoColIcon'><TelephoneOutbound /></div>
                    <div><h4>Call Us</h4></div>
                    <div> +91 -22 -6788 8888</div>
                    <div><h5>Customer Support</h5></div>
                    <div>1800 678 8888</div>
                    <div>(Mon. to Sun. 8AM - 9PM EST)</div>
                    </div>
                </div>

                <div className='Contact_infoCol2'>
                    <div  className='Contact_infoColContent2'>
                        <div className='Contact_infoColIcon'><People /></div>
                        <div><h4>Contact Us on Social Media</h4></div>
                        <a href='https://www.facebook.com/'> <div><Facebook />/TASHASupport</div></a>
                        <a href='https://www.twitter.com'><div> <Twitter />@tashasupport</div></a>

                    </div>

                </div>

                <div className='Contact_infoCol3'>
                    <div >
                        <div className='Contact_infoColIcon'><EnvelopeCheck /></div>

                        <div><h4>FeedBack</h4></div>
                        <a href='https://www.gmail.com'><div> <Google />customercare@tashaindia.com</div></a>
                    </div>

                </div>
            </div>


            <div className='ContactUs_bottom' >
                <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d19776604.056528866!2d68.87367680592455!3d21.06838665229177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sGodrej%20%26%20Boyce%20Mfg.%20Co.%20Ltd.!5e0!3m2!1sen!2s!4v1702201867226!5m2!1sen!2s" width="100%" height="100%" style={{ border: "none", borderRadius: "60px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div className='ContactUs_bottomR'>


                    <form onSubmit={handleSubmit}>

                        <h3>Contact Us</h3>
                        <h6>* Required Information</h6>
                        <ul>
                            <li className='ContactUslabel'>First Name *</li>
                            <li> <input value={fname} type="text" placeholder='First Name' onChange={(e) => setFName(e.target.value)} /></li>
                            <li className='ContactUserror'>{error}</li>
                            <li className='ContactUslabel'>Last Name *</li>
                            <li> <input value={lname} type="text" placeholder='Last Name' onChange={(e) => setLName(e.target.value)} /></li>
                            <li className='ContactUserror'>{error}</li>

                            <li className='ContactUslabel'>Email *</li>
                            <li><input value={email} type="text" placeholder='Email Address' onChange={(e) => setEmail(e.target.value)} /></li>
                            <li className='ContactUserror'>{emailerror}</li>


                            <li className='ContactUslabel'>Message *</li>
                            <li  >

                                <textarea value={mess} name="" id="" placeholder='Enter your problem or any comments' onChange={(e) => setMess(e.target.value)}></textarea>

                            </li>
                            <li className='ContactUserror'>{error}</li>

                            <li className='ContactUs_submit' ><button type='submit'>SUBMIT</button></li>
                        </ul>

                    </form>




                </div>
            </div>
            <h2 className='ContactUsdisplay1'>WHERE TO FIND US</h2>

            <div className='ContactUs_branches'>
            <h2 className='ContactUsdisplay2'>WHERE TO FIND US</h2>

                <div className='ContactUs_branchesimg'><img src="./contact_us_img/contact.png" alt="branches" /></div>
                <ul >
                    <li className='ContactUs_branches_title'>Head Office</li>
                    <li className='ContactUs_branches_add'>Tasha's Company Limited. Pirojshanagar, Vikhroli, Mumbai, Maharashtra 400079</li>

                    <li className='ContactUs_branches_title'>Our Registered Offices</li>

                    <li className='ContactUs_branchesbranches'>
                        <li className='ContactUs_branches_title'>Delhi Branch</li>
                        <li className='ContactUs_branches_add'>Tasha's Co. Ltd. , Sher Shah Suri Marg, Okhla, New Delhi, Delhi 110065, India.</li>

                        <li className='ContactUs_branches_title'>Kolkata Branch</li>
                        <li className='ContactUs_branches_add'>Tasha's Co. Ltd. , Block GN, Sector-V, Salt Lake City, Kolkata, West Bengal 700091, India.</li>

                        <li className='ContactUs_branches_title'> Bhubaneswar Branch</li>
                        <li className='ContactUs_branches_add'>Tasha's Co. Ltd. , NH-5, Highway Complex Rudrapur, P.O. Pahala, Bhubaneswar, Odisha 752101, India.</li>

                        <li className='ContactUs_branches_title'>Patna Branch</li>
                        <li className='ContactUs_branches_add'>Tasha's Co. Ltd. , Grand Plaza,6th floor, 6001 - 6004& 6006, Frazer Road,Dak Bunglow Crossing, Patna, Bihar 800001, India. </li>

                        <li className='ContactUs_branches_title'>Guwahati Branch</li>
                        <li className='ContactUs_branches_add'>Tasha's Co. Ltd. , 2nd Floor Basundhara Eclave, Dr BK Kakati Rd, Ulubari, Guwahati, Assam 781007, India. </li>

                        <li className='ContactUs_branches_title'>Ranchi Branch</li>
                        <li className='ContactUs_branches_add'>Tasha's Co. Ltd. , Plot No.236/237, Pandra, P.O, Kamre Ranchi, Jharkhand 835222, India. </li>

                    </li>

                </ul>
            </div>
            <ModalConfirm show={showModal} handleClose={handleClose} textmodal={textmodal} />



        </div>
    );
}
export default ContactUs;