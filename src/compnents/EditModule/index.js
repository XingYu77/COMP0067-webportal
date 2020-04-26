import React,{Component} from 'react';
import{Modal, Button, Row, Col,Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

export class EditModule extends Component{
    constructor(props){
        super(props);
        this.state = {modules:[],
        module:{
          Code:'code',
          Name:'name',
          Start:'start date',
          End:'end date',
          Weeks:'weeks'
        }};
        this.refreshList = this.refreshList.bind(this);
    }

    componentDidMount(){
      this.refreshList();
  }

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
            {...this.props} 
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton> 
              <Modal.Title id="contained-modal-title-vcenter"> 
              New Module
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div >
              <Row>
                <Col sm={12}>
                 <Form >
                   <div>
                   Module Code
                  <input
                   value = {module.Code}
                   onChange={e => this.setState({ module: {...module,Code:e.target.value}})}
                   />
                   </div>
                   <div>
                   Module Name
                  <input
                   value = {module.Name}
                   onChange={e => this.setState({ module: {...module,Name:e.target.value}})}
                   />
                   </div>
                   <div>
                   Start Date
                  <input
                   value = {module.Start}
                   onChange={e => this.setState({ module: {...module,Start:e.target.value}})}
                   />
                   </div>
                   <div>
                   End Date
                  <input
                   value = {module.End}
                   onChange={e => this.setState({ module: {...module,End:e.target.value}})}
                   />
                   </div>
                   <div>
                   Weeks
                  <input
                   value = {module.Weeks}
                   onChange={e => this.setState({ module: {...module,Weeks:e.target.value}})}
                   />
                   </div>                  
                  <Form.Group >
                  <button  className="button3" type='submit' onClick={this.editModule}>
                     Edit module
                 </button>
                  </Form.Group> 
    
                  </Form> 
                </Col>
              </Row>          
            </div>
            </Modal.Body>
            
          </Modal>
        );
    }
}