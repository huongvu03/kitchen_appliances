import { useState } from "react";
import '../css/ContactUs.css';
function Feedback(){
    const [improve, setImprove] = useState('');
    const [cpurpose, setCPurpose] = useState('');
const [error,setError]=useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
      
        var purpose=document.getElementById('purpose').name;
        var satisfied=document.getElementById('satisfied').value;
        if( !improve || !cpurpose || !purpose ){
            setError('Type is required');
            return false;
        }
            var data=`purpose: ${purpose}, 
            custom purpose:${cpurpose} , 
            improved:${improve}, 
            satisfies: ${satisfied} `
        localStorage.setItem("data",data);
       
        setImprove('');
        setCPurpose('');
        return true;
    }
  
    return(
     <div className="Feedback">
      <h1>  We'd love to hear from you</h1>
        <form onSubmit={handleSubmit}>
        <ul>
            <li className="Feedback_Q" style={{color:"black"}}>
 <p>Q1. *Required section What is the purpose of your visit to LG's support website?(*Support: After-sales)</p>
<li>{error}</li>
            </li>
            <li> <input type="radio" name="product registration" id="purpose" />Product registration.</li>
            <li> <input type="radio"  name="update and upgrade software" id="purpose"/>Update and upgrade software.</li>
            <li> <input type="radio"/>See instructions for use.</li>
            <li> <input type="radio"/>Find out the warranty policy.</li>
            <li> <input type="radio"/>Find product support information in the Help Library and How-To Videos section.</li>
            <li> <input type="radio"/>Find the warranty center address.</li>
            <li> <input type="radio"/>Find warranty contact information</li>
            <li> <input type="radio"/>Find a place to buy parts and replacement accessories.</li>
            <li> <input type="radio"/>Repairs (delays, technician skills and attitudes)</li>
            <li> <input type="radio"/>Call center (connection, operator attitude and knowledge)</li>
            <li> <input type="radio"/>Products (quality, features, price)</li>
            <li> <input type="radio"/>Other (please provide specific information about our Services)</li>
            <li><input type="text" value={cpurpose} onChange={(e)=>setCPurpose(e.target.value)}/></li>
            <li>{error}</li>
            <li  className="Feedback_Q" style={{color:"black"}}>
Q2. *Required section How satisfied are you with the availability and quality of the information you sought?

            </li>
            <li>{error}</li>
            <li> <input type="radio" id="satisfied" value={"very satisfied"}/>Very satisfied</li>
            <li> <input type="radio"  id="satisfied" value={"satisfied"}/>Satisfied</li>
            <li> <input type="radio"/>Normal</li>
            <li> <input type="radio"/>Dissatisfied</li>
            <li> <input type="radio"/>Very dissatisfied</li>
            <li  className="Feedback_Q" style={{color:"black"}}>
            Q3. What do you think our website needs to improve? Please share your thoughts with us.

            </li>
            <li>{error}</li>
            <li  >

                                <textarea value={improve} name="" id="" placeholder='' onChange={(e) => setImprove(e.target.value)}></textarea>

                            </li>
                            <li>{error}</li>
                            <button>Submit</button>
                          
        </ul>
        </form>

        <div><textarea name id="comment" cols="30" rows="10"></textarea></div>
        
     </div>
    );

}export default Feedback;