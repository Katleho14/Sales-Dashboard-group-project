import React from 'raect' 6.9k (gzipped:
import './login.css'

import user_icon from '/assets/user.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/padlock.png'

    const Login = () => {
        return(
            <div className='container'>
                <div className="header">
               <div className="text">Sign Up</div>
               <div className="underline"></div>
               <div className="input">
                <div className="input">
                    <img src={user_icon} alt=""/>
                    <input type="text" placeholder="Name"/>
                </div>
                <div className="input">
                    <img src={email_icon} alt=""/>
                    <input type="email" placeholder="Email Address"/>
                </div>
                <div className="input">
                    <img src={password_icon} alt=""/>
                    <input type="password" placeholder="Password"/>
                </div>
               </div>
               <div className="forgot-password">Forgot Password?<span>Click Here!</span></div>
               <div className="Submit-container">
                <div className="submit">Sign Up</div>
                <div className="submit">Login</div>
               </div>
                </div>
            </div>
        )
    }

    export default Login