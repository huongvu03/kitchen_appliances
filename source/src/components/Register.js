import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import '../css/Register.css';

    
    function Register({onAddUser}){
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [cpassword, setCPassword] = useState('');
        const [username, setUsername] = useState('');
        const [fname, setFname] = useState('');
        const [datebirth, setDateBirth] = useState('');

        const [errorEmail, setErrorEmail] = useState('');
        const [errorPassword, setErrorPassword] = useState('');
        const [errorCPassword, setErrorCPassword] = useState('');
        const [errorUsername, setErrorUsername] = useState('');
        
        
        const navigate = useNavigate();
        
        function handleVatlidation(e){
            e.preventDefault();
            if(!email||!password||!cpassword||!username ||password!==cpassword ||username.length<5){
                if(!email){
                    setErrorEmail('Email is required');
                }
                else if(email){
                    setErrorEmail('');
                }
                if(!password){
                    setErrorPassword('Password is required');
                }
                else if(password){
                    setErrorPassword('');
                }
                if(!cpassword){
                    setErrorCPassword('Confirm Password is required');
                }
                else if(password!==cpassword){
                    setErrorCPassword('Confirm Password isn\'t match');
                }
                else if(cpassword){
                    setErrorCPassword('');
                }
                if(!username){
                    setErrorUsername('Full Name is required');
                }
                else if(username.length<5){
                setErrorUsername('User Name >=5 characters');
                }
                else if(username){
                    setErrorUsername('');
                }
            }
            else{
                const newUser ={email, password, username};
                onAddUser(newUser);
                setEmail('');
                setPassword('');
                setUsername('');
                console.log(email, password, username);
                navigate('/log-in');
                // setIsOpen(true);
                var signindata=`email:${email}, pass:${password}, username:${username}`
                localStorage.setItem('signin',signindata);
            }
            // return navigate('/log-in');
        }
        
        return(
            <div>
                <div className="Register_img">
                <img src='./homeimg/Homepage-Register.jpg' alt="" width={"100%"} height={"100%"} />
                <div >
                    <p className="Register_Content">
                        PRODUCT REGISTRATION<br></br>
                        <h2>THERE’S GOOD REASON TO REGISTER</h2>
                        Register your appliance for easy access to product updates, warranty information, special offers, recipes and more.
                    </p>
                </div>

            </div>
            <div className="Register">
                
                <div className="Register_title">
                <h1>Register</h1>
                {/* <p></p> */}
                {/* <div>Create an account to view your activity and receive personalized product information</div> */}
                </div>
                <div className="Register_right"><span>*</span> Required fields</div>
                <div className="Register_box" >
                    <div>Simply enter your email and basic information to create an account. </div>
                    <hr></hr>
                    <form onSubmit={handleVatlidation}>
                        <div className="Register_grid">
                            <div>
                                <div>Email Address <span>*</span></div>
                                <input type="email"  name="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                               <div className="Register_error">{errorEmail}</div>
                            </div>
                            <div></div>
                            <div>
                                <div>Password<span>*</span></div>
                                <input type="password" name="password" value ={password} onChange={(e)=> setPassword(e.target.value)}/>
                                <div className="Register_error">{errorPassword}</div>
                                <div className="Register_passvali">Passwords must have a minimum of 8 characters and three of the <br/>four options below
                                    <br/>[Uppercase letter, Lowercase letter, Number, Special character]</div>
                            </div>
                            <div>
                                <div>Confirm Password<span>*</span></div>
                                <input type="password"  name="confirm_password"  value ={cpassword} onChange={(e)=> setCPassword(e.target.value)} />
                                <div className="Register_error">{errorCPassword}</div>
                            </div>
                            <div>
                                <div>User Name<span>*</span></div>
                                <input type="text" name="F_name"value ={username} onChange={(e)=> setUsername(e.target.value)}/>
                                <div className="Register_error">{errorUsername}</div>
                            </div>
                            <div>
                                <div>Full Name<span></span></div>
                                <input type="text" name="fname" value ={fname} onChange={(e)=> setFname(e.target.value)} />
                                <div className="Register_error"></div>
                            </div>
                            <div>
                                <div>Date of Birth<span></span></div>
                                <input type="date" name="date_of_birth" value ={datebirth} onChange={(e)=> setDateBirth(e.target.value)} />
                                <div className="Register_error"></div>
                            </div>
                            <div></div>
                        </div>
                        
                        <div>
                            <hr></hr>
                            <div className="Register_checkbox">
                                <input type="checkbox" />
                                <div>Sign me up to receive product tips and tricks, special offers and more from Tasha.</div>
                                <input type="checkbox"checked="true"/>
                                <div>I have read and agree to the <Link to='/privacy-policy'>TASHA PRIVACY POLICY</Link>.<span>*</span></div>
                                <input type="checkbox" checked="true"/>
                                <div>I have read and agree to the <Link to='/terms-of-use'>TASHA TERMS AND CONDITIONS</Link>.<span>*</span></div>
                            </div>
                            <hr></hr>
                            <div className="Register_button">
                            <button className="cancel"><Link to='/log-in'>CANCEL</Link></button>
                            <button type="submit">REGISTER</button>
                            </div>
                        </div>
                        
                    </form>
                </div>
            </div>
            </div>
            );
    }
    export default Register;
