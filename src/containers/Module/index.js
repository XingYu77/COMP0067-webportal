import React, { Component } from 'react';
import Header from '../../compnents/Header';
import { Tabs } from "@yazanaabed/react-tabs";
import Students from '../../compnents/Students';
import Teams from '../../compnents/Teams';
import TAs from '../../compnents/TAs';
import './style.css';
import UploadFile from '../../compnents/UploadFile';
import { connect } from "react-redux";
import { getModuleById } from '../../redux/selectors';
import { postData } from '../../redux/_action';

class Module extends Component {
  constructor(props) {
    super(props);
    this.state = { UploadFilesShow: false };
  };

  async componentDidMount() {
    postData('students/list', [], this.props.match.params.moduleId)
      .then((list) => {
        postData('students/info', list, this.props.match.params.moduleId)
          .then((result) => {
            let allIds = [];
            let byIds = {};

            Object.entries(result).forEach(([key, value]) => {
              allIds.push(key);
              byIds[key] = {
                moduleId: this.props.match.params.moduleId,
                studentId: value.info.studentid,
                firstName: value.info.firstname,
                lastName: value.info.lastname,
                photo: Array.isArray(value.info.imgsrc) ? value.info.imgsrc[0] : null,
                eMail: value.info.email,
                team: value.info.gid,
              }
            });


            this.props.dispatch({ type: '_SET_Student', key: 'byIds', value: byIds });
            this.props.dispatch({ type: '_SET_Student', key: 'allIds', value: allIds });
          })
      })
      .catch((error) => {
        console.warn(error);
      })

    postData('teams/list', [], this.props.match.params.moduleId)
      .then((list) => {
        postData('teams/info', list, this.props.match.params.moduleId)
          .then((result) => {
            let allIds = [];
            let byIds = {};
            let taIds = {};

            Object.entries(result).forEach(([key, value]) => {
              allIds.push(key);
              byIds[key] = {
                moduleId: this.props.match.params.moduleId,
                name: value.info.name,
                lab: value.info.lab,
                projectName: value.info.projectName,
                ta: value.info.ta,
                teamLeader: value.member[0],
                firstMember: value.member[1],
                secondMember: value.member[2],
              }
              taIds[value.info.ta] = true;
            });

            this.props.dispatch({ type: '_SET_Team', key: 'byIds', value: byIds });
            this.props.dispatch({ type: '_SET_Team', key: 'allIds', value: allIds });

            taIds = Object.keys(taIds);

            postData('students/info', taIds, this.props.match.params.moduleId)
              .then((result) => {
                let allIds = [];
                let byIds = {};

                Object.entries(result).forEach(([key, value]) => {
                  allIds.push(key);
                  byIds[key] = {
                    moduleId: this.props.match.params.moduleId,
                    studentId: value.info.studentid,
                    name: value.info.firstname + ' ' + value.info.lastname,
                    eMail: value.info.email,
                    degree: value.info.program,
                  }
                });

                this.props.dispatch({ type: '_SET_TA', key: 'byIds', value: byIds });
                this.props.dispatch({ type: '_SET_TA', key: 'allIds', value: allIds });
              })

          })
      })
      .catch((error) => {
        console.warn(error);
      })
  }

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