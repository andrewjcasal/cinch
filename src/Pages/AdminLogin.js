import React from 'react';
import Logo from '../assets/images/logo-large.png';
require('./AdminLogin.css');

const Login = () => (
  <div className="login-container light-montserrat">
    <div className="login-header xlight-montserrat">
      <p>Login</p>
    </div>
    <div className="login-form-container">
      <form className="login-form">
        <img src={Logo} alt="Cinch Logo" />
        <div className="login-form-group">
          <p className="login-input-title text-uppercase"> e-mail</p>
          <input type="text" placeholder="Your Email Address" class="login-input light-montserrat" />
        </div>
        <div className="login-form-group">
          <p className="login-input-title text-uppercase"> password</p>
          <input type="password" placeholder="Password" className="login-input light-montserrat" />
        </div>
        <button type="submit" className="login-input-button login-form-group xlight-montserrat text-uppercase"> Login </button>
      </form>
    </div>
  </div>
)

export default Login;