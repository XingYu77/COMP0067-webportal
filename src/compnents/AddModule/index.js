import React, { Component } from 'react';
import { Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { connect } from "react-redux";
import { postData } from '../../redux/_action';
import { withRouter } from 'react-router-dom';

class AddModule extends Component {
  constructor(props) {
    super(props);
    this.state = { Code: '', Name: '', Start: '', End: '', Weeks: 0 }
    this.getWeeks = this.getWeeks.bind(this);
    this.changeInput = this.changeInput.bind(this);
    this.weeksBetween = this.weeksBetween.bind(this);

    this.__click = this.__click.bind(this);
  };

  getWeeks() {
    if (this.state.Start === '' || this.state.End === '') {
      return 0
    } else {
      const resultingweeks = this.weeksBetween(this.state.Start, this.state.End)
      return resultingweeks
    }
  };

  weeksBetween(d1, d2) {
    const day1 = new Date(d1)
    const day2 = new Date(d2)
    return Math.round((day2.getTime() - day1.getTime()) / (7 * 24 * 60 * 60 * 1000));
  }

  changeInput(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name
    this.setState({ [name]: value });
    console.log(this.state);
  };

  __addModule(value, props) {
    return async (dispatch) => {
      postData('courses/create', {
        coursename: value.Name,
        coursecode: value.Code,
        startdate: value.Start,
        enddate: value.End,
      })
      .then((result) => {
        const prefix = "https://comp0067-node.azurewebsites.net/"

        fetch(prefix + 'jwt/', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            UPI: props.UPI,
            Token: props.Token,
          }),
        })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          throw new Error(res.status);
        })
        .then((data) => {
          this.props.dispatch({ type: 'SET_JWT', JWT: data.jwt });
          this.props.history.push('#');
          this.props.history.go();
        })
        .catch((error) => {
          console.warn(error);
        })
      })
      .catch((error) => {
        console.warn(error);
      })
    }
  }

  __click(e) {
    e.preventDefault();
    this.props.dispatch(this.__addModule(this.state, this.props));
  }

  render() {
    return (
      <Modal
        {...this.props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header>
          <Modal.Title>New Module</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Form>
              <div className='field'>
                <div><p className="fieldtitle">Module code</p></div>
                <div className="fieldinput"><input name="Code" placeholder="COMP0000" onChange={this.changeInput} value={this.state.Code} /></div>
              </div>
              <div className='field'>
                <div><p className="fieldtitle">Module name</p></div>
                <div className="fieldinput"><input name="Name" placeholder="e.g. Software Architecture" onChange={this.changeInput} value={this.state.Name} /></div>
              </div>
              <div className='field'>
                <div><p className="fieldtitle">Start date</p></div>
                <div className="fieldinput"><input name="Start" placeholder="mm/dd/yy" type="date" onChange={this.changeInput} value={this.state.Start} /></div>
              </div>
              <div className='field'>
                <div><p className="fieldtitle">End date</p></div>
                <div className="fieldinput"><input name="End" placeholder="mm/dd/yy" type="date" onChange={this.changeInput} value={this.state.End} /></div>
              </div>
              <div className='field'>
                <div><p className="fieldtitle">Weeks</p></div>
                <div><p className="weeks" name="Weeks" value={this.state.Weeks}>{this.getWeeks()}</p></div>
              </div>
              <Form.Group>
                <button
                  onClick={this.__click}
                  className="button3">
                  Add module
                        </button>
              </Form.Group>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    UPI: state.authReducer.UPI,
    Token: state.authReducer.Token,
  };
};

const AddModuleWrapper = withRouter(AddModule);
export default connect(mapStateToProps)(AddModuleWrapper);
