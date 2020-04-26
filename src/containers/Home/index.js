import React, { Component } from 'react';
import './style.css';
import Header from '../../compnents/Header';
import {Link} from 'react-router-dom';
import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddModule} from '../../compnents/AddModule';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {modules:[], AddModuleShow:false}
    }

    componentDidMount(){
        this.refreshList();
    }
    
/*     refreshList(){
        this.setState({
            modules:[{'ModuleCode':'COMP0067', 'ModuleName':'Design','StartDate':'01/01/2020','EndDate':'01/04/2020','Week':'14'},
            {'ModuleCode':'COMP0067', 'ModuleName':'Design','StartDate':'01/01/2020','EndDate':'01/04/2020','Week':'14'},
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
        let addModuleClose =() => this.setState({AddModuleShow:false})
      return(
       
        <div>
            <Header />
            <div className="mymodules">
                <p className="text4" >My modules </p>

                
                <button  className="button" onClick={()=>this.setState({AddModuleShow:true})}>
                    + Add module
                </button>
                <AddModule
                show={this.state.AddModuleShow}
                onHide={addModuleClose}
                />
               
            </div >

            <div className="mymodules1">
            <p className="text5" >Here you will find the modules you have created as an Academic Staff.</p>
           </div>
           
           <div className="modulelist">
                {modules.map(module =>
                <Link to='../../containers/Students' style={{ textDecoration: 'none' }}>
                <button  className="module">
                <img src={require('../../folder.png')} width="46" height="32"  className="folder" />
                    <div>
                    <p className="text6" >{module.ModuleCode} </p>
                    <p className="text7" >{module.ModuleName} </p>
                    </div>
                    
                </button>
                </Link>
                )}
            </div >
       </div>
    );
  }
}

export default Home;