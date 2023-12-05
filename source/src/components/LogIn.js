import { useState } from "react";
import '../css/LogIn.css';
import { Link } from "react-router-dom";

function Login({ checkLogin, errorLogin, resetPass }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const checkUser = { username, password };
        checkLogin(checkUser);
        setUsername('');
        setPassword('');
    }

    const [email, setEmail] = useState('');
    const handleReset = (e) => {
        e.preventDefault();
        const checkReset = { email };
        resetPass(checkReset);
        setEmail('');
    }

    return (
        <div className="LoginPage">
            <div>
                <img src='./homeimg/Homepage-Register.jpg' alt="" width={"100%"} height={"100%"}/>
                <div >
                <p className="LoginContent">
                PRODUCT REGISTRATION
<h2>THERE’S GOOD REASON TO REGISTER</h2>
Register your appliance for easy access to product updates, warranty information, special offers, recipes and more.
                </p>
                </div>
               
            </div>
            <div  className="Login">
            <div className="Loginleft">
                <form onSubmit={handleLogin}>
                    <h4>Sign into MyTasha's</h4>
                    <h6>* Required Information</h6>

                                    <table>
                        <tr>
                            <td className="LoginleftLabel">*User Name</td>
                        </tr>
                        <tr>
                            <td ><input type="text" value={username} placeholder="User name" className="LoginleftInput"
                                onChange={(e) => setUsername(e.target.value)} /></td>
                        </tr>
                       
                        <tr>
                            <td  className="LoginleftLabel">*Password</td>

                        </tr>
                        <tr>
                            <td><input type="password" value={password} placeholder="Password"  className="LoginleftInput"
                                onChange={(e) => setPassword(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td colSpan="2" className="Login-btn"><input type="submit" value="SIGN IN" /></td>
                        </tr>
                        <tr className="LoginError">{errorLogin}</tr>

                    </table>
                </form>

                <div  className="LoginlefPass"> Forgot password ?</div>
                <form onSubmit={handleReset}>
                                           <div  className="LoginleftInput-bottom" ><input type="text" value={email} placeholder="Enter your Email Account"
                            onChange={(e) => setEmail(e.target.value)} /></div>
                  
                  <div className="Loginbottom-btn" > <input type="submit" value="Submit" /> </div>
                      
                </form>
            </div>
            <div>
               

                <div className="Loginright">
                    <h4>Register today and get up to <span>35% off</span> your first purchase <Link to="/product-home">on Our Best Deal*.</Link> </h4>
                    <p className="Login-btn"><input type="submit" value="REGISTER NOW"  /></p>
                    <h5>Membership Benefits</h5>
                    <ul>
                        <li>    Special offers and deals on your next purchase on TASHA.com</li>
                        <li>	Quick access to important information, such as product warranties and owner's manuals.</li>
                        <li>	Convenient support for your LG registered products, such as requesting and tracking repair status.</li>
                        <li>	Easy account navigation to file a claim or in the case of a recall.</li>
                    </ul>
                </div>

            </div>

            </div>

        </div>
    );
}
export default Login;

