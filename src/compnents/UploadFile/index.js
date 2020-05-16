import React,{Component} from 'react';
import{Modal,Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import CSVReader from 'react-csv-reader'

export class UploadFile extends Component{
    constructor(props){
      super(props);
      this.state = {
        uploadedStudents: null,
        uploadedTeams: null,
        uploadedTAs: null,
      };
      this.handleStudentsUpload = this.handleStudentsUpload.bind(this);
      this.handleTeamsUpload = this.handleTeamsUpload.bind(this);
      this.handleTAsUpload = this.handleTAsUpload.bind(this);
    }

    handleStudentsUpload=(data,fileInfo)=>{
      let studentsTitles = Object.values(data[0]);
      let studentsUploaded = data.slice(1);

      let IDlocation = studentsTitles.indexOf('Student Code');
      let forenamelocation = studentsTitles.indexOf('Forename');
      let surenamelocation = studentsTitles.indexOf('Surname');
      let maillocation = studentsTitles.indexOf('email');
      let programlocation = studentsTitles.indexOf('Department');

      let studentsObject = studentsUploaded.map((student) => {
          return {
          'studentID': student[IDlocation],
          'forename': student[forenamelocation],
          'surename': student[surenamelocation],
          'mail': student[maillocation],
          'program': student[programlocation],
          }
          });
      this.setState({uploadedStudents: studentsObject });
    };

    handleTeamsUpload=(data,fileInfo)=>{
      let teamsTitles = Object.values(data[0]);
      let teamsUploaded = data.slice(1);

      let teamnumberlocation = teamsTitles.indexOf('Team Number');
      let projecttitlelocation = teamsTitles.indexOf('Project Title');
      let projectbrieflocation = teamsTitles.indexOf('Project Brief');
      let projectpartnerlocation = teamsTitles.indexOf('Project Partner');
      let projecttypelocation = teamsTitles.indexOf('Project Type');
      let taemaillocation = teamsTitles.indexOf('TA Email');
      let leaderemaillocation = teamsTitles.indexOf('Leader Email');
      let secondmemberemaillocation = teamsTitles.indexOf('Second Member Email');
      let thirmemberemaillocation = teamsTitles.indexOf('Third Member Email');

      let teamsObject = teamsUploaded.map((team) => {
          return {
          'ta': team[taemaillocation],
          'member': [team[leaderemaillocation],team[secondmemberemaillocation],team[thirmemberemaillocation]],
          'teamname': 'Team '+ team[teamnumberlocation],
          'projecttitle': team[projecttitlelocation],
          'projectbrief': team[projectbrieflocation],
          'projectpartner': team[projectpartnerlocation],
          'projecttype': team[projecttypelocation],
          }
          });
      
      this.setState({uploadedTeams: teamsObject });
    };

    handleTAsUpload=(data,fileInfo)=>{
      let tasTitles = Object.values(data[0]);
      let tasUploaded = data.slice(1);

      let IDlocation = tasTitles.indexOf('Student ID');
      let forenamelocation = tasTitles.indexOf('Forename');
      let surnamelocation = tasTitles.indexOf('Surname');
      let emaillocation = tasTitles.indexOf('Email');
      let degreelocation = tasTitles.indexOf('Degree');

      let tasObject = tasUploaded.map((ta) => {
          return {
          'studentID': ta[IDlocation],
          'forename': ta[forenamelocation],
          'surename': ta[surnamelocation],
          'mail': ta[emaillocation],
          'program': ta[degreelocation],
          'userGroup': 'TA',
          }
          });
        
      this.setState({uploadedTAs: tasObject });
    };
 
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
                      <div><p className="description">Attach a .csv file with the module's students information, making sure the column headers are written like this: Student Code, Surname, Forename, email, Department. There is no need to follow this specific order, only to follow this exact name if the column is to be included. From this, only email is mandatory to give. </p></div>
                      <CSVReader className="fieldinput" onFileLoaded={(data, fileInfo) => this.handleStudentsUpload(data,fileInfo)} />
                    </div>
                    <div className='field'>
                      <div><p className="fieldtitle">Teams (.csv)</p></div>
                      <div><p className="description">Attach a .csv file with the module's teams information, making sure the column headers are written like this: Team Number, Lab, TA Email, Project Title, Project Brief, Project IXN Partner, Leader email, Second Member email, Third Member email. There is no need to follow this specific order, only this exact name if the column is to be included. From this, only TA email, members email are mandatory to give. </p></div>
                      <CSVReader className="fieldinput" onFileLoaded={(data, fileInfo) => this.handleTeamsUpload(data,fileInfo)} />
                    </div>
                    <div className='field'>
                      <div><p className="fieldtitle">TAs (.csv)</p></div>
                      <div><p className="description">Attach a .csv file with the module's TAs information, making sure to have the columns: Student ID, Forename, Surname, Email, Degree. There is no need to follow this specific order, only this exact name if the column is to be included. From this, only Email is mandatory to give. </p></div>
                      <CSVReader className="fieldinput" onFileLoaded={(data, fileInfo) => this.handleTAsUpload(data,fileInfo)} />
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