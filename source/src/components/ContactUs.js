import { useState } from 'react';
import '../css/ContactUs.css';
import {Twitter,Facebook, Google } from 'react-bootstrap-icons';
import { TelephoneOutbound, People, EnvelopeCheck } from 'react-bootstrap-icons';
import ModalConfirm from './ModalConfirm';

function ContactUs() {
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [feedback, setFeedback] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [textmodal, setTextModal] = useState('');
    const [error, setError] = useState('');
    const [emailerror, setemailError] = useState('');
    const [phoneerror, setPhoneError] = useState('');
  
 

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !feedback || !contact )
             {
            setError(' These input is required');
        } 
    
        else if (!/^[a-zA-Z0-9]{1,20}@[a-zA-Z]{1,5}.com$/.test(email)) {
            setemailError("Email:example@*****.com");
            return false;
        }
        else if (!/^0[0-9]{9}$/.test(contact)) {
            setPhoneError("Phone: Begin with 0 and must have 10 digits ");
            return false;
        }
        else {
            // const newProduct ={name,contact, email, location,feedback};
            // onAddContact(newProduct);
            setName('');
            setContact('');
            setEmail('');
            setLocation('');
            setFeedback('');
            setTextModal("Send Successful");
            setShowModal(true);
            setError('');
            setemailError('');
            setPhoneError('')
        }
    }
    const handleClose = () => {
        setShowModal(false);
      }

    return (
        <div>
            <div className='ContactUs_top'>
                <div><img src='contact_us_img/email.jpg' alt='contact' width={"100%"} height={"500px"} /></div>
                <div className='ContactUs_topcontent'>

                    <h2>CONTACT US</h2>
                    We'd love to help you. Here's how you can reach us.


                </div>
            </div>


            <div className='Contact_info'>

                <div className='Contact_infoCol' >
                    <ul>
                        <li><TelephoneOutbound /></li>
                        <li><h4>Call Us</h4></li>
                        <li> +91 -22 -6788 8888</li>
                        <li><h5>Customer Support</h5></li>
                        <li>1800 678 8888</li>
                        <li>(Mon. to Sun. 8AM - 9PM EST)</li>
                    </ul>
                </div>

                <div className='Contact_infoCol'>
                    <ul>
                        <li><People /></li>
                        <li><h4>Contact Us on Social Media</h4></li>
                        <a href='https://www.facebook.com/'> <li><Facebook />/TASHASupport</li></a>
                        <a href='https://www.twitter.com'><li> <Twitter />@tashasupport</li></a>
                        <a href='https://www.twitter.com'><li> <Google />customercare@tashaindia.com</li></a>

                    </ul>

                </div>

                <div className='Contact_infoCol'>
                    <ul>
                        <li><EnvelopeCheck /></li>

                        <li><h4>Register Complain</h4></li>
                        <a href='/feedback'> <li><Facebook />/TASHASupport</li></a>

                    </ul>
                </div>
                </div>


                <div className='ContactUs_bottom' >

                    <div className='ContactUs_bottomLeft'>
                        <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d19776604.056528866!2d68.87367680592455!3d21.06838665229177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sGodrej%20%26%20Boyce%20Mfg.%20Co.%20Ltd.!5e0!3m2!1sen!2s!4v1702201867226!5m2!1sen!2s" width="600" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className='ContactUs_info2'>
                            <ul>
                            <li className='ContactUs_info2_title'>Head Office</li>
                            <li>Tasha's Company Limited. Pirojshanagar, Vikhroli, Mumbai, Maharashtra 400079</li>
                            <li className='ContactUs_info2_title'>Our Registered Offices</li>
                            <li className='ContactUs_info2_title'>Delhi Branch</li>
                            <li>Tasha's Co. Ltd. , Sher Shah Suri Marg, Okhla, New Delhi, Delhi 110065, India.</li>
                            <li className='ContactUs_info2_title'>Kolkata Branch</li>
                            <li>Tasha's Co. Ltd. , Block GN, Sector-V, Salt Lake City, Kolkata, West Bengal 700091, India.</li>
                            <li className='ContactUs_info2_title'> Bhubaneswar Branch</li>
                            <li>Tasha's Co. Ltd. , NH-5, Highway Complex Rudrapur, P.O. Pahala, Bhubaneswar, Odisha 752101, India.</li>
                            <li className='ContactUs_info2_title'>Patna Branch</li>
                            <li>Tasha's Co. Ltd. , Grand Plaza,6th floor, 6001 - 6004& 6006, Frazer Road,Dak Bunglow Crossing, Patna, Bihar 800001, India. </li>
                            <li className='ContactUs_info2_title'>Guwahati Branch</li>
                            <li>Tasha's Co. Ltd. , 2nd Floor Basundhara Eclave, Dr BK Kakati Rd, Ulubari, Guwahati, Assam 781007, India. </li>
                            <li className='ContactUs_info2_title'>Ranchi Branch</li>
                            <li>Tasha's Co. Ltd. , Plot No.236/237, Pandra, P.O, Kamre Ranchi, Jharkhand 835222, India. </li>
                            </ul>
                        </div>

                      
                    </div>

                    <div>

                        <form className='ContactUs_form' onSubmit={handleSubmit}>
                            <h3>FeedBack</h3>
                            <div className='ContactUs_form_grid1'>
                                <input value={name} type="text" placeholder='Name*..' onChange={(e) => setName(e.target.value)} />
                                {error}
                                <input value={contact} type="number" placeholder='Contact No*..' onChange={(e) => setContact(e.target.value)} />
                                {phoneerror}

                                <input value={email} type="text" placeholder='Email Address*' onChange={(e) => setEmail(e.target.value)} />
                                {emailerror}

                                <select value={location} name="location" onChange={(e) => setLocation(e.target.value)}>
                                    <option value="0">Location..</option>
                                    <option value="1">Mumbai</option>
                                    <option value="2">New Delhi</option>
                                    <option value="3">Bhubaneswar </option>
                                    <option value="4">Kolkata</option>
                                </select>
                                {error}

                            </div>
                            <div className='ContactUs_form_text' >
                                <textarea value={feedback} name="" id="" placeholder='Comment/Feedback/Remarks*..' onChange={(e) => setFeedback(e.target.value)}></textarea>
                                {error}

                            </div>
                            <div><button className='ContactUs_submit' type='submit'>SUBMIT</button></div>
                        </form>

                    </div>

                </div>
           <ModalConfirm show={showModal} handleClose={handleClose} textmodal={textmodal}/>
        </div>



    );
}
export default ContactUs;