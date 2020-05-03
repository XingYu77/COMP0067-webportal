import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

const Login = props =>{
    return(
      <div>
        <div className="loginheader">
          <img src={require('../../ucl-logo.jpg')} className="logo" />
          <p className="logotext1">Traffic Light</p>
          <p className="logotext2">Feedback System</p>
        </div>
          
        <div className='thebody'>
          <div className="loginbox"> 
            <p className="loginText1" >Access your account</p>
            <p className="loginText2" >Welcome to UCL Traffic Light Feedback System! As an Academic Staff, you can Login to manage the modules you are leading.</p>
            <Link to='../../containers/Home'><button className="loginbutton">Login</button></Link>
          </div>
        </div>
      </div>
    );
}

export default Login;