import React,{Component} from 'react';
import{Modal, Button, Row, Col,Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

export class EditModule extends Component{
    constructor(props){
      super(props);
      this.state = {modules:[], Code: '', Name: '', Start:'', End:'', Weeks:''};
      this.getWeeks = this.getWeeks.bind(this);
      this.changeInput = this.changeInput.bind(this);
      this.weeksBetween = this.weeksBetween.bind(this);
    }

    getWeeks(){
      if (this.state.Start == '' || this.state.End==''){
        return 0
      } else {
        const resultingweeks = this.weeksBetween(this.state.Start,this.state.End)
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
      this.setState({[name]: value});
    };

    refreshList(){
      fetch('http://localhost:4546/modules')
        .then(response=> response.json())
        .then(data =>{
            this.setState({modules: data});
      }
        ); 
    }  
    editModule = _ =>{
      
      const {module} = this.state;
      fetch(`http://localhost:4546/modules/update?ModuleCode=${module.Code}&ModuleName=${module.Name}&StartDate=${module.Start}&EndDate=${module.End}&Weeks=${module.Weeks}`)
      .then(this.refreshList)
      .catch(err => console.error(err))
    }

    handleSubmit(event){
      event.preventDefault(); 
      alert('New module added!') 
    }
 
    render(){
      const {modules, module} = this.state;
        return(
            <Modal
              {...this.props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
              <Modal.Header> 
                <Modal.Title>Edit Module</Modal.Title>
              </Modal.Header>
            <Modal.Body>
              <div>
                  <Form>
                    <div className='field'>
                      <div><p className="fieldtitle">Module code</p></div>
                      <div className="fieldinput"><input name="Code" placeholder="COMP0000" onChange={this.changeInput}/></div>
                    </div>
                    <div className='field'>
                      <div><p className="fieldtitle">Module name</p></div>
                      <div className="fieldinput"><input name="Code" placeholder="e.g. Software Architecture" onChange={this.changeInput}/></div>
                    </div>
                    <div className='field'>
                      <div><p className="fieldtitle">Start date</p></div>
                      <div className="fieldinput"><input name="Start" placeholder="mm/dd/yy" type="date" onChange={this.changeInput}/></div>
                    </div>
                    <div className='field'>
                      <div><p className="fieldtitle">End date</p></div>
                      <div className="fieldinput"><input name="End" placeholder="mm/dd/yy" type="date" onChange={this.changeInput}/></div>
                    </div>
                    <div className='field'>
                      <div><p className="fieldtitle">Weeks</p></div>
                      <div><p className="weeks" name="Weeks">dd</p></div>
                    </div>             
                    <Form.Group>
                      <button  className="button3" type='submit' onClick={this.addModule}>Add module</button>
                    </Form.Group> 
                  </Form>         
              </div>
            </Modal.Body>
          </Modal>
        );
    }
}