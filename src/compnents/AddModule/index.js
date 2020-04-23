import React,{Component} from 'react';
import{Modal, Button, Row, Col,Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

export class AddModule extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(event){
      event.preventDefault(); 
      alert('New module added!')
      
/*       fetch('' ,{
        method:'POST'
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          ModuleName: event.target.ModuleName.value
          ModuleCode: event.target.ModuleCode.value
          StartDate: event.target.StartDate.value
          EndDate: event.target.EndDate.value
          Week: event.target.Week.value

        })

    }
      )
      .then(res=> res.json())
      .then((result)=>
      {
        alert(result); 
      },
      (error)=>{
        alert('Failed')
      }
      )
 */
    }
 
    render(){
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
                 <Form onSubmit={this.handleSubmit}>

                  <Form.Group controlId='ModuleName'>
                  <Form.Label>Module Name</Form.Label> 
                  <Form.Control
                    type='text'
                    name='ModuleName'
                    required
                    placeholder='Design'
                  /> 
                  </Form.Group> 

                  <Form.Group controlId='ModuleCode'>
                  <Form.Label>Module Code</Form.Label> 
                  <Form.Control
                    type='text'
                    name='ModuleCode'
                    required
                    placeholder='COMP0000'
                  /> 
                  </Form.Group> 

                  <Form.Group controlId='StartDate'>
                  <Form.Label>Start Date</Form.Label> 
                  <Form.Control
                    type='text'
                    name='StartDate'
                    required
                    placeholder='dd/mm/yyyy'
                  /> 
                  </Form.Group> 

                  <Form.Group controlId='EndDate'>
                  <Form.Label>End Date</Form.Label> 
                  <Form.Control
                    type='text'
                    name='EndDate'
                    required
                    placeholder='dd/mm/yyyy'
                  /> 
                  </Form.Group> 

                  <Form.Group controlId='Week'>
                  <Form.Label>Amount of weeks</Form.Label> 
                  <Form.Control
                    type='text'
                    name='Week'
                    required
                    placeholder='14'
                  /> 
                  </Form.Group> 
                   
                  <Form.Group >
                  <button  className="button3" type='submit'>
                     Add module
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