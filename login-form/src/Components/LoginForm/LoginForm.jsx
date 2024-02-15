import React, { useState } from 'react'
import './LoginForm.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const LoginForm = () => {

const [action,setAction] = useState("")

  return (
    <div className='container'>
      <div className="header">
        <div className="text1">TeleAfia</div>
        <div className="text3">User Login</div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder='Enter email/phone number '/>
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder='Enter password'/>
        </div>
      </div>
      <div className="forgot-password">Lost password? <span>Click Here!</span></div>
      <div className="submit-container">
        <div className="submit">Login</div>
      </div>
    </div>
  )
}

export default LoginForm
