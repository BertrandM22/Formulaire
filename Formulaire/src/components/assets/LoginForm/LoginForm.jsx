import React from 'react'
import './LoginForm.css'
import { FaLock,FaUser  } from "react-icons/fa";

export const LoginForm = () => {
  return (
    <div className='wrapper'>
<form action="">
  <h1>Login</h1>
  <div className="input-box">
    <input type="text" placeholder='Nom de compte' required />
    <FaUser className='icon'/>
  </div>
  <div className="input-box">
    <input type="password" placeholder='Mot de passe' required />
    <FaLock className='icon'/>
  </div>
  <div className="remember-forgot">
    <label ><input type="checkbox" />Se souvenir </label>
    <a href="#">Mot de passe oublier ?</a>
  </div>
  <button type="submit">Connection</button>
  <div className="register-link"></div>
  <p>pas de compte ?<a href="#">Register</a></p>
</form>
    </div>
  )
}
