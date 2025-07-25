import React from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/UserPage')
    }
  return (
    <div>
      <label>
         Name 
         <input placeholder='Enter Name'type='text' required/>
      </label><br/>
      <label>
        Email  
        <input type='text' placeholder='Email' required/>
      </label><br/>
      <label>
        Password
        <input type='password' placeholder='Password'/>
      </label>
      <button type='button'onClick={handleClick}> Login </button>
    </div>
  )
}

export default LoginForm;