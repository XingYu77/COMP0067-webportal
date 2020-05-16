import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './style.css';

class Header extends Component {
  _onClick(dispatch) { 
    return () => {
      dispatch({ type: 'LOGOUT' });
      this.props.history.push('/login');
    }
  }

  render() {
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
                <button className="dropbtn">Hi, {this.props.Forename}</button>
                <img src={require('../../triangle_home.png')} className="triangle"/>
              </div>
              <div className="dropdown-content">
                <a href='#' onClick={this._onClick(this.props.dispatch)}>Logout</a>
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
}

const mapStateToProps = (state) => {
  return {
      Forename: state.authReducer.Forename,
      AuthR: state.authReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      dispatch,
  };
};

var HeaderWrapper = withRouter(Header)

export default connect(mapStateToProps, mapDispatchToProps)(HeaderWrapper);