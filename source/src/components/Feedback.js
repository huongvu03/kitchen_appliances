import { useState } from "react";
import '../css/ContactUs.css';
import ModalConfirm from "./ModalConfirm";
import { useNavigate } from "react-router-dom";

function Feedback() {
    const[purpose,setPurpose]=useState('');
    const[satisfied,setSatisfied]=useState('');
    const [improve, setImprove] = useState('');
    const [cpurpose, setCPurpose] = useState('');

    const [error, setError] = useState('');
        const [showModal, setShowModal] = useState(false);
    const [textmodal, setTextModal] = useState('');
    const navigate = useNavigate('');

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!purpose || !satisfied || !improve) {
            setError('Type is required');
            return false;
        }else{
        var feedback = `purpose: ${purpose}, 
            custom purpose:${cpurpose} , 
            improved:${improve}, 
            satisfies: ${satisfied} `
        localStorage.setItem("feedback", feedback);
        setTextModal('Thank you for your Feedback !');
        setShowModal(true);
        setError('');
        setCPurpose('');setImprove ('');setPurpose('');setSatisfied('');
        return true;
    }
}

    const handleClose = () => {
        setShowModal(false);
        navigate(`/`);
    }

    return (
        <div className="Feedback">
            <h1>  We'd love to hear from you</h1>
            <h6>* Required Information</h6>

            <form onSubmit={handleSubmit}>
                <ul>
                    <li className="Feedback_Q" style={{ color: "black" }}>
                        <p>Q1. *What is the purpose of your visit to Tasha's support website?(*Support: After-sales)</p>
                        <li className="Feedbackerror">{error}</li>
                    </li>
                    <li> <input type="radio" value="product registration" name={purpose}  onClick={(e) => setPurpose(e.target.value)} />Product registration.</li>
                    <li> <input type="radio"  value="update and upgrade software" name={purpose}  onClick={(e) => setPurpose(e.target.value)}/>Update and upgrade software.</li>
                    <li> <input type="radio"  value="See instructions for use"    name={purpose}  onClick={(e) => setPurpose(e.target.value)}/>See instructions for use.</li>
                    <li> <input type="radio"  value="Find out the warranty policy." name={purpose}  onClick={(e) => setPurpose(e.target.value)}/>Find out the warranty policy.</li>
                    <li> <input type="radio"  value="Find product support information in the Help Library and How-To Videos section." name={purpose}  onClick={(e) => setPurpose(e.target.value)}/>Find product support information in the Help Library and How-To Videos section.</li>
                    <li> <input type="radio"  value="Find the warranty center address." name={purpose}  onClick={(e) => setPurpose(e.target.value)}/>Find the warranty center address.</li>
                    <li> <input type="radio"  value="Find warranty contact information" name={purpose}  onClick={(e) => setPurpose(e.target.value)}/>Find warranty contact information</li>
                    <li> <input type="radio"  value="Find a place to buy parts and replacement accessories." name={purpose}  onClick={(e) => setPurpose(e.target.value)}/>Find a place to buy parts and replacement accessories.</li>
                    <li> <input type="radio"  value="Repairs (delays, technician skills and attitudes)" name={purpose}  onClick={(e) => setPurpose(e.target.value)}/>Repairs (delays, technician skills and attitudes)</li>
                    <li> <input type="radio"  value="Call center (connection, operator attitude and knowledge)" name={purpose}  onClick={(e) => setPurpose(e.target.value)}/>Call center (connection, operator attitude and knowledge)</li>
                    <li> <input type="radio"  value="Products (quality, features, price)" name={purpose}  onClick={(e) => setPurpose(e.target.value)}/>Products (quality, features, price)</li>
                    <li> <input type="radio"  value="Other (please provide specific information about our Services)" name={purpose}  onClick={(e) => setPurpose(e.target.value)}/>Other (please provide specific information about our Services)</li>
                    
                    <li ><input type="text" value={cpurpose} onChange={(e) => setCPurpose(e.target.value) } className="Feedbackcustomer"/></li>
                    
                    <li className="Feedback_Q" style={{ color: "black" }}>
                        Q2. *How satisfied are you with the availability and quality of the information you sought?
                    <li className="Feedbackerror">{error}</li>

                    </li>
                    <li> <input type="radio" name={satisfied} value="Very satisfied"  onClick={(e) => setSatisfied(e.target.value)}/>Very satisfied</li>
                    <li> <input type="radio" name={satisfied} value="Satisfied"  onClick={(e) => setSatisfied(e.target.value)}/>Satisfied</li>
                    <li> <input type="radio" name={satisfied} value="Normal"  onClick={(e) => setSatisfied(e.target.value)}/>Normal</li>
                    <li> <input type="radio" name={satisfied} value="Dissatisfied"  onClick={(e) => setSatisfied(e.target.value)}/>Dissatisfied</li>
                    <li> <input type="radio" name={satisfied} value="Very dissatisfied"  onClick={(e) => setSatisfied(e.target.value)}/>Very dissatisfied</li>

                    <li className="Feedback_Q" style={{ color: "black" }}>
                        Q3. *What do you think our website needs to improve? Please share your thoughts with us.
                    <li className="Feedbackerror">{error}</li>

                    </li>
                    <li  >

                        <textarea value={improve} name="" id="" cols="105" placeholder='' onChange={(e) => setImprove(e.target.value)} ></textarea>

                    </li>

                    <button className="Feedback_btn"> Submit</button>

                </ul>

            </form>
            <ModalConfirm show={showModal} handleClose={handleClose} textmodal={textmodal} />

        </div>
    );

} export default Feedback;