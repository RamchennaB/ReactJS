import React, { useState, useEffect } from "react";
import "./App.css";
function App(){
    const [uEmail, setuEmail] = useState("");
    const [uPass, setuPass] = useState("");
    const [rMe, setrMe] = useState(false);
    const [isLog, setisLog] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    useEffect(() => {
        const userStore = localStorage.getItem("useremail");
        const passStore = localStorage.getItem("password");
        const rmeStore = localStorage.getItem("rememberMe");
       
    }, []);
    const ShowPasswordto = () => {
      setShowPassword(!showPassword);
    };
    const loginFn = () => {
        
            setisLog(true);
            if (rMe) {
                localStorage.setItem("userEmail", uEmail);
                localStorage.setItem("password", uPass);
                localStorage.setItem("rememberMe", true);
            } else {
                localStorage.removeItem("userEmail");
                localStorage.removeItem("password");
                localStorage.removeItem("rememberMe");
            }
      
    };
    const logoutFn = () => {
        setisLog(false);
        localStorage.removeItem("userEmail");
        localStorage.removeItem("password");
        localStorage.removeItem("rememberMe");
    };
    return (
        <div className="app-container">
           
            {isLog ? (
                <div className="welcome">
                    <h2 className="welcome-text">
                        Welcome to Tatva Vaidhika Grama
                    </h2>
                    <button onClick={logoutFn} 
                            className="logout-button">
                        Logout
                    </button>
                </div>
            ) : (
                <div>
                   <h1 className="header">Tatva Vaidhika Grama</h1>
                    <h2 className="login-header">Login</h2>
                        <input
                            type="text"
                            value={uEmail}
                            onChange={(e) => setuEmail(e.target.value)}
                            className="input-field"
                            placeholder="Email Id"
                        />
                    
                    <br />
                    
                        <input
                            type={showPassword ? "text" : "password"}
                            value={uPass}
                            onChange={(e) => setuPass(e.target.value)}
                            className="input-field"
                            placeholder="Password"
                        />
                   
                    <br />
                    <label>
                     <input
                        type="checkbox"
                         checked={showPassword}
                         onChange={ShowPasswordto}
                      />
                       Show Password
                     </label><br/>
                    <label>
                        <input
                            type="checkbox"
                            checked={rMe}
                            onChange={() => setrMe(!rMe)}
                        />
                        Remember ME
                    </label>
                    <br />
                    <button onClick={loginFn} 
                            className="login-button">
                        Login
                    </button>
                </div>
            )}
        </div>
    );
};
export default App;
