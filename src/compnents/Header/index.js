import React from 'react';
import './style.css';

const Header = props =>{
    return(
        <div>
          <div className="mainheader">
            <div className="left">
              <img src={require('../../ucl-logo.jpg')} className="logo"/>
              <p className="logotext1">Traffic Light</p>
              <p className="logotext2">Feedback System</p>
            </div>
            <div className="right">
              <div>
                <button className="dropbtn">Hi, Steven</button>
                <img src={require('../../triangle_home.png')} className="triangle"/>
              </div>
              <div className="dropdown-content">
                <a href='/login'>Logout</a>
              </div>
            </div>
          </div>
          <div className="secondaryheader">
            <ul>
              <li><a className="blank"> </a></li>
              <li><a className="active" href='/'>Home</a></li>
            </ul>
          </div>
     </div>
    );
}

export default Header;