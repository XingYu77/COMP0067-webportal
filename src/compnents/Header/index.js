import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';



const Header = props =>{
    return(
        <div>
           
          <header className="welcome">
            <img src={require('../../ucl-logo.jpg')} width="89" height="26"  className="logo" />
            <p className="text1" >Traffic Light </p>
            <p className="text2" >Feedback System </p>
            <p className="text3" >Hi, steve </p>

          </header>
          <header className="header">
            <nav className="headerMenu">
           
            <Link to='../../containers/Home'>Home</Link>
            <Link to='../../containers/Settings' style={{marginLeft:320}}>Settings</Link>
                
            </nav>
          </header>
     </div>
    );
}

export default Header;