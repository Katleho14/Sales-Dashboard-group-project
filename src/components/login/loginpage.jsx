import React, { useState } from 'react';
import './login.css';

import user_icon from '../assets/user.png';
import email_icon from '../assets/email.png';
import password_icon from '../assets/padlock.png';

const LoginPage = () => {
    const [action, setAction] = useState("Sign Up");
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the form submission, e.g., send data to your API
        console.log('Form submitted:', formData);
    };

    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
                <form className="input" onSubmit={handleSubmit}>
                    <div className="input">
                        <img src={user_icon} alt="User Icon" />
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="input">
                        <img src={email_icon} alt="Email Icon" />
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Email Address" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="input">
                        <img src={password_icon} alt="Password Icon" />
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Password" 
                            value={formData.password} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="forgot-password">Forgot Password?<span>Click Here!</span></div>
                    <div className="Submit-container">
                        <button type="submit" className="submit">{action}</button>
                        <button type="button" className="submit" onClick={() => setAction(action === "Sign Up" ? "Login" : "Sign Up")}>
                            {action === "Sign Up" ? "Login" : "Sign Up"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;