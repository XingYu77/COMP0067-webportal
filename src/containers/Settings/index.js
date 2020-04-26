import React, { Component } from 'react';
import './style.css';
import * as ReactBootStrap from 'react-bootstrap'
import Header from '../../compnents/Header';
import {EditModule} from '../../compnents/EditModule';

class Settings extends Component{

    constructor(props){
        super(props);
        this.state = {modules:[], editModuleShow:false}
    }

    componentDidMount(){
        this.refreshList();
    }
    
    /* refreshList(){
        this.setState({
            modules:[{'ModuleCode':'COMP0067', 'ModuleName':'Design','StartDate':'01/01/2020','EndDate':'01/04/2020','Week':'14'},
            {'ModuleCode':'COMP0067', 'ModuleName':'AI','StartDate':'01/01/2020','EndDate':'01/04/2020','Week':'14'},
            ]
        })
    } */
    

    refreshList(){
      fetch('http://localhost:4546/modules/')
        .then(response=> response.json())
        .then(data =>{
            this.setState({modules: data});
      }
        );
    }  
    render(){

    const {modules} = this.state;
    let editModuleClose =() => this.setState({editModuleShow:false})
    const renderModule = (module, index) =>{
        return(
            <tr key={index}>
                <td style={{width:'140px', height:'39px',color:'#9b9b9b'}}>{module.ModuleCode}</td>
                <td style={{width:'140px', height:'39px',color:'#9b9b9b'}}>{module.ModuleName}</td>
                <td style={{width:'140px', height:'39px',color:'#9b9b9b'}}>{module.StartDate}</td>
                <td style={{width:'140px', height:'39px',color:'#9b9b9b'}}>{module.EndDate}</td>
                <td style={{width:'140px', height:'39px',color:'#9b9b9b'}}>{module.Weeks}</td>
                <td>
                <button  className="editmodule"
                onClick={()=> this.setState({editModuleShow:true})}>
                 edit
                </button>
                <EditModule
                show = {this.state.editModuleShow}
                onHide={editModuleClose}
                />
                </td>
            </tr>
        )
    }
    return(
        <div>
          <Header />
          <div className="mymodules">
                <p className="text4" >Settings </p>
          </div >

          <div className="mymodules1">
            <p className="text5" >Here you will find the summary of settings you have set for each of your modules.</p>
          </div>

          <div className="moduletable">
              <ReactBootStrap.Table striped border hover>
                  <thead>
                      <tr>
                          <th style={{width:'140px', height:'39px',color:'#535353',textAlign:'left'}}>Code</th>
                          <th style={{width:'140px', height:'39px',color:'#535353',textAlign:'left'}}>Module Name</th>
                          <th style={{width:'140px', height:'39px',color:'#535353',textAlign:'left'}}>Start date</th>
                          <th style={{width:'140px', height:'39px',color:'#535353',textAlign:'left'}}>End date</th>
                          <th style={{width:'140px', height:'39px',color:'#535353',textAlign:'left'}}>Weeks in total</th>
                      </tr>
                  </thead>
                  <tbody>
                      {modules.map(renderModule)}
                  </tbody>
              </ReactBootStrap.Table>
          </div>
       </div>
    );
  }
}

export default Settings;