import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import './style.css';

class Login extends Component {
  componentDidMount() {
    if (this.props.JWT !== null) {
      this.props.history.push('/');
      this.props.history.go();
    }
  }

  render() {
    const URL = 'https://uclapi.com/oauth/authorise?state=0&client_id=3118358259981676.8916381618480693';
    
    return (
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
            <Link to={URL}><button className="loginbutton">Login</button></Link>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
      JWT: state.authReducer.JWT,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      dispatch,
  };
};

var LoginWrapper = withRouter(Login)

export default connect(mapStateToProps, mapDispatchToProps)(LoginWrapper);