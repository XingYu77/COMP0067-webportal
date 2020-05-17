import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import './style.css';

class Login extends Component {
  componentDidMount() {
    if (this.props.JWT !== null) {
      this.props.history.push('/');
    }
  }

  render() {
    const URL = './oauth?eyJVUEkiOiJ1Y3pscnQ1QHVjbC5hYy51ayIsIlRva2VuIjoiZDQ0Y2ZkNThhZjk1ZjllMGJlYjljOGQ0NWYyZjkyM2VkOWE0ODVmNjg4OTdhZmViYzlhOTM2NDAwN2E1ZmRmY2VhMWJkNTUxNGRkMDcwZGE4ZjUxNWRiNWQyNDBkNTU2ZDhiZjczZmMwYjYxMGQ0MjFkZTkxZTEwNzZlMTc5MjAiLCJGb3JlbmFtZSI6IlJ1b3FpbiIsIkZ1bGxOYW1lIjoiUnVvcWluIFRhbmciLCJVc2VyQXZhdGFyIjoiaHR0cHM6Ly9pbWcubW9lZ2lybC5vcmcvY29tbW9uL2EvYWIvJUU1JTk4JUI0JUU1JUI5JUIzJUU0JUJDJThBJUU0JUI5JThCJUU1JThBJUE5LmpwZWciLCJVc2VyR3JvdXAiOiJBUyJ9';
    
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