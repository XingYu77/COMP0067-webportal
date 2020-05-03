import React,{Component} from 'react';
import{Modal, Button, Row, Col,Form, InputGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

export class UploadFile extends Component{
    constructor(props){
      super(props);
      this.state = {
        uploadedStudentsFile: null,
        uploadedTeamsFile: null,
        uploadedTAsFile: null,
      };
      this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler=event=>{
      this.setState({
        selectedFile: event.target.files[0],
        loaded: 0,
      })
    }
 
    render(){
      const {modules, module} = this.state;
        return(
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
                      <div><p className="description">Attach a .csv file with the module's students information, making sure to have the columns: Student Code, Surname, Forename, Route name, email.</p></div>
                      <div className="fieldinput"><input name="studentsFile" placeholder="e.g. students.csv" type='file' onChange={this.onChangeHandler}/></div>
                    </div>
                    <div className='field'>
                      <div><p className="fieldtitle">Teams (.csv)</p></div>
                      <div><p className="description">Attach a .csv file with the module's teams information, making sure to have the columns: Team Number, Lab, TA, TA Email, Project Title, Leader ID, Second Member ID, Third Member ID</p></div>
                      <div className="fieldinput"><input name="teamsFile" placeholder="e.g. teams.csv" type='file' onChange={this.onChangeHandler}/></div>
                    </div>
                    <div className='field'>
                      <div><p className="fieldtitle">Pictures (.zip)</p></div>
                      <div><p className="description">Attach a .zip file with the module's student pictures. Each picture should be named as: StudentCode.jpg</p></div>
                      <div className="fieldinput"><input name="tasFile" placeholder="e.g. pictures.zip" type='file' onChange={this.onChangeHandler}/></div>
                    </div>           
                    <Form.Group>
                      <button  className="button3" type='submit'>Upload files</button>
                    </Form.Group> 
                  </Form>         
              </div>
            </Modal.Body>
          </Modal>
        );
    }
}