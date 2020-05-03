import React, { Component } from 'react';
import './style.css';
import Header from '../../compnents/Header';
import {Link} from 'react-router-dom';
import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddModule} from '../../compnents/AddModule';
import {EditModule} from '../../compnents/EditModule';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {AddModuleShow:false, editModuleShow:false, modules:[]};
        this.passValues = this.passValues.bind(this);
    }

    passValues(){
    }

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
        let editModuleClose =() => this.setState({editModuleShow:false})
        return(
        <div>
            <Header/>
            <div className="Homepagebody">
                <div className="mymodules">
                    <p className="text4">My Modules</p>
                    <div className="right">
                        <button  className="addmodule" onClick={()=>this.setState({AddModuleShow:true})}>+ Add module</button>
                        <AddModule
                            show={this.state.AddModuleShow}
                            onHide={addModuleClose}
                        />
                    </div>
                </div >

                <div className="mymodules1">
                    <p className="text5" >Here you will find the modules you have created as an Academic Staff.</p>
                </div>
            
                <div className='mytable'>
                    <table id="moduletable">
                        <thead>
                            <tr>
                                <th className="Codetitle">Code</th>
                                <th>Module name</th>
                                <th>Start date</th>
                                <th>End date</th>
                                <th>Weeks in total</th>
                                <th> </th>
                                <th> </th>
                                <th> </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td name="Code"><Link to='../../containers/Module' className="Coderow">COMP0071</Link></td>
                                <td name="Name">System Architecture</td>
                                <td name="Start">01/01/2020</td>
                                <td name="End">02/01/2020</td>
                                <td>4</td>
                                <td><button className='tableOption' onClick={()=> this.setState({editModuleShow:true}, this.passValues())}>Edit</button></td>
                                <EditModule
                                    show = {this.state.editModuleShow}
                                    onHide = {editModuleClose}
                                />
                                <td><button className='tableOption'>Duplicate</button></td>
                                <td><button className='tableOption'>Delete</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
       </div>
    );
  }
}

export default Home;