import React, { Component } from 'react';
import { Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { connect } from "react-redux";
import { postData } from '../../redux/_action';
import { withRouter } from 'react-router-dom';

class EditModule extends Component {
  constructor(props) {
    super(props);
    this.state = { id: '', Code: '', Name: '', Start: '', End: '', Weeks: '' };
    this.getWeeks = this.getWeeks.bind(this);
    this.changeInput = this.changeInput.bind(this);
    this.weeksBetween = this.weeksBetween.bind(this);

    this.__click = this.__click.bind(this);
  }

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
    console.log(this.state);
    const target = e.target;
    const value = target.value;
    const name = target.name
    this.setState({ [name]: value });
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.id !== nextProps.id) {
      this.setState({ id: nextProps.id });
      this.setState({ Code: nextProps.code });
      this.setState({ Name: nextProps.name });
      this.setState({ Start: nextProps.start });
      this.setState({ End: nextProps.end });
      this.setState({ Weeks: nextProps.weeks });
    }
  }

  __editmodule(value) {
    return async (dispatch) => {
      postData('courses/update', {
        id: value.id,
        coursename: value.Name,
        coursecode: value.Code,
        startdate: value.Start,
        enddate: value.End,
      })
      .then((result) => {
        this.props.history.goBack();
      })
      .catch((error) => {
        console.warn(error);
      })
    }
  }
  __click(e) {
    e.preventDefault();
    this.props.dispatch(this.__editmodule(this.state));
  }

  render() {
    return (
      <Modal
        {...this.props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header>
          <Modal.Title>Edit Module</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Form>
              <div className='field'>
                <div><p className="fieldtitle">Module code</p></div>
                <div className="fieldinput"><input name="Code" placeholder="COMP0000" value={this.state.Code} onChange={this.changeInput} /></div>
              </div>
              <div className='field'>
                <div><p className="fieldtitle">Module name</p></div>
                <div className="fieldinput"><input name="Code" placeholder="e.g. Software Architecture" value={this.state.Name} onChange={this.changeInput} /></div>
              </div>
              <div className='field'>
                <div><p className="fieldtitle">Start date</p></div>
                <div className="fieldinput"><input name="Start" placeholder="mm/dd/yy" type="date" value={this.state.Start} onChange={this.changeInput} /></div>
              </div>
              <div className='field'>
                <div><p className="fieldtitle">End date</p></div>
                <div className="fieldinput"><input name="End" placeholder="mm/dd/yy" type="date" value={this.state.End} onChange={this.changeInput} /></div>
              </div>
              <div className='field'>
                <div><p className="fieldtitle">Weeks</p></div>
                <div><p className="weeks" name="Weeks">{this.getWeeks()}</p></div>
              </div>
              <Form.Group>
                <button onClick={this.__click} className="button3">Edit module</button>
              </Form.Group>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

const EditModuleWrapper = withRouter(EditModule);
export default connect()(EditModuleWrapper);