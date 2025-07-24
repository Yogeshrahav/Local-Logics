import React from "react";

const LoginForm = () => {
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
      <button type='button'> Login </button>
    </div>
  )
}

export default LoginForm;