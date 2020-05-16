import React, { Component } from 'react';
import Header from '../../compnents/Header';
import { Tabs } from "@yazanaabed/react-tabs";
import Students from '../../compnents/Students';
import Teams from '../../compnents/Teams';
import TAs from '../../compnents/TAs';
import './style.css';
import { UploadFile } from '../../compnents/UploadFile';
import { connect } from "react-redux";
import { getModuleById } from '../../redux/selectors';

class Module extends Component {
  constructor(props) {
    super(props);
    this.state = { UploadFilesShow: false };
  };

  render() {
    let UploadFilesClose = () => this.setState({ UploadFilesShow: false })
    return (
      <div>
        <Header />
        <div className="subheader1">
          <p className="text9">{this.props.mymodule.name}</p>
        </div>
        <div className="subheader">
          <div className="moduledetails">
            <p className="text8" >{this.props.mymodule.code}</p>
            <p className="text8" >{this.props.mymodule.weeks} weeks ({this.props.mymodule.start} - {this.props.mymodule.end})</p>
          </div>
          <div className="button1"><button className="button2" onClick={() => this.setState({ UploadFilesShow: true })}>Upload file</button></div>
          <UploadFile
            show={this.state.UploadFilesShow}
            onHide={UploadFilesClose}
          />
        </div>
        <div className="myTabs">
          <Tabs activeTab={{ id: "tab1" }}>
            <Tabs.Tab id="tab1" title="Students">
              <div className="tabBody"><Students moduleId={this.props.mymodule.id} /></div>
            </Tabs.Tab>
            <Tabs.Tab id="tab2" title="Teams">
              <div className="tabBody"><Teams moduleId={this.props.mymodule.id} /></div>
            </Tabs.Tab>
            <Tabs.Tab id="tab3" title="TAs">
              <div className="tabBody"><TAs moduleId={this.props.mymodule.id} /></div>
            </Tabs.Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const mymodule = getModuleById(state, ownProps.match.params.moduleId);
  return { mymodule };
};

export default connect(mapStateToProps)(Module);