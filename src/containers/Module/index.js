import React, { Component } from 'react';
import Header from '../../compnents/Header';
import { Tabs } from "@yazanaabed/react-tabs";
import Students from '../../compnents/Students';
import Teams from '../../compnents/Teams';
import TAs from '../../compnents/TAs';
import './style.css';
import {UploadFile} from '../../compnents/UploadFile';

class Module extends Component{
    constructor(props){
        super(props);
        this.state = {UploadFilesShow:false};
    }
    render(){
        let UploadFilesClose =() => this.setState({UploadFilesShow:false})
        return(
          <div>
            <Header/>
            <div className="subheader1">
                    <p className="text9">Design</p>
            </div>
            <div className="subheader">
              <div className="moduledetails">
                  <p className="text8" >COMP0067</p>
                  <p className="text8" >14 weeks (01/14/20 - 31/03/20)</p>
              </div>
              <div className="button1"><button className="button2" onClick={()=>this.setState({UploadFilesShow:true})}>Upload file</button></div>
              <UploadFile
                  show={this.state.UploadFilesShow}
                  onHide={UploadFilesClose}
              />
            </div>
            <div className="myTabs">
              <Tabs activeTab={{id: "tab1"}}>
                  <Tabs.Tab id="tab1" title="Students">
                      <div id="" className="tabBody"><Students/></div>
                  </Tabs.Tab>
                  <Tabs.Tab id="tab2" title="Teams">
                      <div className="tabBody"><Teams/></div>
                  </Tabs.Tab>
                  <Tabs.Tab id="tab3" title="TAs">
                      <div className="tabBody"><TAs/></div>
                  </Tabs.Tab>
              </Tabs>
            </div>
          </div>
    );
  }
}

export default Module;