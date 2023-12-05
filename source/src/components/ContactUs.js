import { useState } from 'react';
import '../css/ContactUs.css';
function ContactUs({onAddContact}){
    const [name,setName] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [feedback, setFeedback] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name){
            alert(' Please Input Your Name ');
        }else if(!contact){
            alert(' Please Input Your Contact');
        }
        else if(!email){
            alert('Please Input Your Contact');
        }
        else if(!feedback){
            alert(' Please Input Your Comment/Feedback/Remarks..');
        }
        else{
        // const newProduct ={name,contact, email, location,feedback};
        // onAddContact(newProduct);
        // setName('');
        // setContact('');
        // setEmail('');
        // setLocation('');
        // setFeedback('');
        alert("Send Successful");
        
        }
    }
    return(
        <div>
            <div className='ContactUs_title'> 
                <div><img src='contact_us_img/1.jpg' alt='contact'/></div>
                <div className='ContactUs_title_r'>
                    <div className='ContactUs_title_r_1'>Talk to Us</div>
                    <div>
                        For more information on brochures,
                        <br/>
                         registering complaints or franchise related query,
                        <br/>
                        please do not hesitate to get in touch with us.
                    </div>
                </div>
            </div>
            <div className='ContactUs_grid1'>
                <div>
                    <div className='ContactUs_button1'>
                    <div><button>Request a Brochure</button></div>
                    <div><button>Complaint related to Product or Service</button></div>
                    <div><button>Trade & Franchise related query</button></div>
                    </div>
                    <div>
                        <form className='ContactUs_form' onSubmit={handleSubmit}> 
                            <div className='ContactUs_form_grid1'>
                                <input value={name} type="text" placeholder='Name*..' onChange={(e)=> setName(e.target.value)}/>
                                <input value={contact} type="number" placeholder='Contact No*..' onChange={(e)=> setContact(e.target.value)}/>
                                <input value={email} type="email" placeholder='Email Address*' onChange={(e)=> setEmail(e.target.value)}/>
                                <select  value={location} name="location" onChange={(e)=> setLocation(e.target.value)}>
                                    <option value="0">Location..</option>
                                    <option value="1">Sai Gon</option>
                                    <option value="2">Hue</option>
                                    <option value="3">Da Nang</option>
                                    <option value="4">Ha Noi</option>
                                </select>
                            </div>
                            <div  className='ContactUs_form_text' >
                                <textarea value={feedback} name="" id=""  placeholder='Comment/Feedback/Remarks*..' onChange={(e)=>setFeedback(e.target.value)}></textarea>
                            </div>
                            <div><button  className='ContactUs_submit' type='submit'>SUBMIT</button></div>
                        </form>
                    </div>
                </div>
                <div className='ContactUs_info1'>
                    <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d951.9239212190365!2d106.68217396534898!3d10.790659436363082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528d4a7c59c09%3A0x8e2f7cbc924be1db!2zMzkxYSDEkC4gTmFtIEvhu7MgS2jhu59pIE5naMSpYSwgUGjGsOG7nW5nIDE0LCBRdeG6rW4gMywgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1697009959360!5m2!1svi!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className='ContactUs_info2'>
                        <div className='ContactUs_info2_title'>Head Office</div>
                        <div>Tasha's Ltd.391A, Nam Ky Khoi Nghia, Vo Thi Sau Ward, District 3, HCMC</div>
                        <div className='ContactUs_info2_title'>Call Us</div>
                        <div>Tel - 022 6788 8888
                            <br/>
                            Fax - 022 6789 9999, 66950922</div>
                        <div className='ContactUs_info2_title2'>Customer Care Toll Free:</div>
                        <div>1800 678 8888</div>
                        <div className='ContactUs_info2_title2'>Email ID:</div>
                        <div>customercare@hafeleindia.com</div>
                    </div>
                </div>
            </div>
        </div>
        
        
      
    );
}
export default ContactUs;