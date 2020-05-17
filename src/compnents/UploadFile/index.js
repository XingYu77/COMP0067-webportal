import React, { Component } from 'react';
import { Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import CSVReader from 'react-csv-reader'

import { connect } from "react-redux";
import { postData } from '../../redux/_action';
import { withRouter } from 'react-router-dom';

class UploadFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadedStudents: null,
      uploadedTeams: null,
      uploadedTAs: null,
    };
    this.handleStudentsUpload = this.handleStudentsUpload.bind(this);
    this.handleTeamsUpload = this.handleTeamsUpload.bind(this);
    this.handleTAsUpload = this.handleTAsUpload.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.__onClick = this.__onClick.bind(this);
  }

  handleStudentsUpload = (data, fileInfo) => {
    var payload = data.slice(4, -1);
    const prefix = "https://comp0067-node.azurewebsites.net/public/uploads/";

    payload = payload.map((row) => {
      return {
        studentID: row[1],
        forename: row[4],
        surename: row[3],
        mail: row[11],
        program: row[6],
        imgsrc: prefix + row[1] + '.jpg',
      }
    })

    this.props.dispatch({ type: '_SET_Draft', key: 'studentList', value: payload });
  };

  handleTeamsUpload = (data, fileInfo) => {
    var payload = data.slice(1, -1);

    payload = payload.map((row) => {
      return {
        ta: row[3],
        member: [row[7], row[10], row[13]],
        teamname: "Team " + row[0],
        projecttitle: row[4],
        projectbrief: row[5],
        lab: 'Lab ' + row[1],
      }
    })

    this.props.dispatch({ type: '_SET_Draft', key: 'teamList', value: payload });
  };

  handleTAsUpload = (data, fileInfo) => {
    var payload = data.slice(1, -1);

    payload = payload.map((row) => {

      return {
        studentID: row[3],
        forename: row[1].split(' ')[0],
        surename: row[1].slice(row[1].split(' ')[0].length),
        mail: row[2],
        program: row[4],
        userGroup: 'TA'
      }
    })

    this.props.dispatch({ type: '_SET_Draft', key: 'taList', value: payload });
  };

  onChangeHandler(event) {
    this.props.dispatch({ type: '_SET_Draft', key: 'file', value: event.target.files[0] });
    console.log(event.target.files[0]);
  }

  __onClick(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('payload', this.props.draft.file);

    postData('students/create', this.props.draft.studentList, this.props.match.params.moduleId)
      .then((result) => {
        postData('students/create', this.props.draft.taList, this.props.match.params.moduleId)
          .then((result) => {
            postData('teams/create', this.props.draft.teamList, this.props.match.params.moduleId)
              .then((result) => {
                fetch('https://comp0067-node.azurewebsites.net/students/upload', {
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    Authorization: 'Bearer ' + this.props.JWT,
                    'Contetnt-Type': 'multipart/form-data',
                  },
                  body: formData,
                })
                .then((res) => {
                  if (res.ok) {
                    this.props.history.push('#');
                    this.props.history.go();
                  }
                  throw new Error(res.status);
                });
              })
          })
      })
      .catch((error) => {
        console.warn(error);
      })

    console.log(this.props.match.params.moduleId);
  }

  render() {
    return (
      <Modal
        {...this.props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header>
          <Modal.Title>Upload files</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Form>
              <div className='field'>
                <div><p className="fieldtitle">Students (.csv)</p></div>
                <div><p className="description">Attach a .csv file with the module's students information, making sure the column headers are written like this: Student Code, Surname, Forename, email, Department. There is no need to follow this specific order, only to follow this exact name if the column is to be included. From this, only email is mandatory to give. </p></div>
                <CSVReader className="fieldinput" onFileLoaded={(data, fileInfo) => this.handleStudentsUpload(data, fileInfo)} />
              </div>
              <div className='field'>
                <div><p className="fieldtitle">Teams (.csv)</p></div>
                <div><p className="description">Attach a .csv file with the module's teams information, making sure the column headers are written like this: Team Number, Lab, TA Email, Project Title, Project Brief, Project IXN Partner, Leader email, Second Member email, Third Member email. There is no need to follow this specific order, only this exact name if the column is to be included. From this, only TA email, members email are mandatory to give. </p></div>
                <CSVReader className="fieldinput" onFileLoaded={(data, fileInfo) => this.handleTeamsUpload(data, fileInfo)} />
              </div>
              <div className='field'>
                <div><p className="fieldtitle">TAs (.csv)</p></div>
                <div><p className="description">Attach a .csv file with the module's TAs information, making sure to have the columns: Student ID, Forename, Surname, Email, Degree. There is no need to follow this specific order, only this exact name if the column is to be included. From this, only Email is mandatory to give. </p></div>
                <CSVReader className="fieldinput" onFileLoaded={(data, fileInfo) => this.handleTAsUpload(data, fileInfo)} />
              </div>
              <div className='field'>
                <div><p className="fieldtitle">Pictures (.zip)</p></div>
                <div><p className="description">Attach a .zip file with the module's student pictures. Each picture should be named as: StudentCode.jpg</p></div>
                <div className="fieldinput"><input name="tasFile" placeholder="e.g. pictures.zip" type='file' onChange={this.onChangeHandler} /></div>
              </div>
              <Form.Group>
                <button onClick={this.__onClick} className="button3">Upload files</button>
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
    JWT: state.authReducer.JWT,
    draft: state.draftReducer,
  };
};

const UploadWrapper = withRouter(UploadFile);
export default connect(mapStateToProps)(UploadWrapper);