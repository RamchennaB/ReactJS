import React,{useEffect, useState} from 'react';
import { Link ,useNavigate } from 'react-router-dom';
import './index.css'
function Login(){
    const [email,setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [remember,setRemember]=useState(false);
    const [isLog, setIsLog] = useState(false);
    const userEmail=JSON.parse(localStorage.getItem('email'));
    const userPass=JSON.parse(localStorage.getItem('pass'));
    const navigate = useNavigate();
    

    useEffect(() => {
        if(remember){
           localStorage.setItem('email', JSON.stringify(email));
           localStorage.setItem('pass', JSON.stringify(password));
         }
         
         
        },[email,password]);

      const handleSubmit = (e) => {
        e.preventDefault();
        if(email == userEmail && pass == userPass){
            alert('Login Successful');
            navigate('/home');
        }
        else{
            alert('invalid user or pass');
            console.log(userEmail);
            console.log(userPass);
        }
    }
    return(
          <div className='Login'>
            <form className='form' onSubmit={handleSubmit}>
                <h1>LOGIN</h1>
                <input type="email" placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/><br />
                <input type="password" placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/><br />
                <label><input type="checkbox" checked={remember} onChange={() =>{setRemember(!remember)}}/>Remember me</label><br />
                <button>Login</button>
            </form>

        </div>
    );

}

export default Login;
