import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import '../css/Register.css';

    
    function Register({onAddUser}){
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [username, setUsername] = useState('');
        
        
        const navigate = useNavigate();
        
        function handleVatlidation(e){
            e.preventDefault();
            const newUser ={email, password, username};
            onAddUser(newUser);
            setEmail('');
            setPassword('');
            setUsername('');
            console.log(email);
            alert("Register Successful")
            navigate('/log-in');
        }

        return(
            <div className="Register">
                <div className="Register_title">
                <h1>Sign Up</h1>
                <p></p>
                <div>Create an account to view your activity and receive personalized product information</div>
                </div>
                <div className="Register_right"><span>*</span> Required fields</div>
                <div className="Register_box" >
                    <div>Simply enter your email and basic information to create an account. Not sure if your already have an account? Enter your email to find your account.</div>
                    <hr></hr>
                    <form onSubmit={handleVatlidation}>
                        <div className="Register_grid">
                            <div>
                                <div>Email Address <span>*</span></div>
                                <input type="email"  name="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                               
                            </div>
                            <div></div>
                            <div>
                                <div>Password<span>*</span></div>
                                <input type="password" name="password" value ={password} onChange={(e)=> setPassword(e.target.value)}/>
                                
                                <div className="Register_passvali">Passwords must have a minimum of 8 characters and three of the <br/>four options below
                                    <br/>[Uppercase letter, Lowercase letter, Number, Special character]</div>
                            </div>
                            <div>
                                <div>Confirm Password<span>*</span></div>
                                <input type="password"  name="confirm_password"/>
                                
                            </div>
                            <div>
                                <div>User Name<span>*</span></div>
                                <input type="text" name="F_name"value ={username} onChange={(e)=> setUsername(e.target.value)}/>
                               
                            </div>
                            <div>
                                <div>Full Name<span>*</span></div>
                                <input type="text" name="L_name"  />
                                <div></div>
                            </div>
                            <div>
                                <div>Date of Birth<span>*</span></div>
                                <input type="date" name="date_of_birth" />
                                <div></div>
                            </div>
                            <div></div>
                        </div>
                        
                        <div>
                            <hr></hr>
                            <div>
                                <input type="checkbox"/>
                                <div>Sign me up to receive product tips and tricks, special offers and more from Tasha.</div>
                                <input type="checkbox"/>
                                <div>I have read and agree to the TASHA PRIVACY POLICY.<span>*</span></div>
                                <input type="checkbox"/>
                                <div>I have read and agree to the TASHA TERMS AND CONDITIONS.<span>*</span></div>
                            </div>
                            <hr></hr>
                            <div>
                            <button><Link to='/log-in'>CANCEL</Link></button>
                            <button type="submit">SIGN UP</button>
                            </div>
                        </div>
                        
                    </form>
                </div>
            </div>
            );
    }
    export default Register;
