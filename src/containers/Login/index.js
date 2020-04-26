import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';



const Login = props =>{
    return(
        <div style={{ height:'100vh', textAlign: 'center', backgroundColor: '#e3e3e3'}}>
           
          <header className="welcome">
            <img src={require('../../ucl-logo.jpg')} width="89" height="26"  className="logo" />
            <p className="text1" >Traffic Light </p>
            <p className="text2" >Feedback System </p>
          </header >
       

          <div className="login"> 
            <p className="loginText1" >Access your account </p>
            <p className="loginText2" >Welcom to UCL Traffic Light Feedback System! As </p>
            <p className="loginText2" >an Academic Staff, you can Login to manage the modules </p>
            <p className="loginText2" >modules you are leading </p>
          <Link to='../../containers/Home' style={{ textDecoration: 'none' }}>
                <button  className="module">
                
                    <div>
                    <p className="text6" >Login </p>
                    
                    </div>
                    
                </button>
                </Link>
          </div>
     </div>
    );
}

export default Login;