import { useState } from "react";
    
    function Login({checkLogin, errorLogin}){
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const handleLogin = (e) => {
            e.preventDefault();
            const checkUser = {username, password};
            checkLogin(checkUser);
            setUsername('');
            setPassword('');
        }
    
        return(
            <div>
            <form onSubmit={handleLogin}>
                <h4>{errorLogin}</h4>
                <table>
                    <tr>
                        <td>Username</td>
                        <td><input type="text" value={username} 
                            onChange={(e) => setUsername(e.target.value)}/></td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td><input type="password" value={password} 
                            onChange={(e) => setPassword(e.target.value)}/></td>
                    </tr>
                    <tr>
                        <td colSpan="2"><input type="submit" value="Login"/></td>
                    </tr>
                </table>
            </form>
            </div>);
    }
    export default Login;
