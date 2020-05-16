import React, { Component } from 'react';
import './style.css';
import { Modal, Form } from 'react-bootstrap';
import Header from '../../compnents/Header';
import { Link } from 'react-router-dom';
import { AddModule } from '../../compnents/AddModule';
import { EditModule } from '../../compnents/EditModule';
import { getModules } from "../../redux/selectors";
import { connect } from "react-redux";
import { deleteModule } from "../../redux/actions"


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            AddModuleShow: false,
            EditModuleShow: false,
            confirmCancelShow: false,
            moduleToDeleteId: '',
            moduleToOpenId: '',
            clickedModuleId: '',
            clickedModuleCode: '',
            clickedModuleName: '',
            clickedModuleStart: '',
            clickedModuleEnd: '',
            clickedModuleWeeks: ''
        };
        this.fetchRowDetails = this.fetchRowDetails.bind(this);
        this.fetchRowDetailsToDelete = this.fetchRowDetailsToDelete.bind(this);
    }

    fetchRowDetails = (e) => {
        const clicked_id = e.target.getAttribute('id');
        this.setState({ clickedModuleId: clicked_id });
        const clicked_code = e.target.getAttribute('code');
        this.setState({ clickedModuleCode: clicked_code });
        const clicked_name = e.target.getAttribute('name');
        this.setState({ clickedModuleName: clicked_name });
        const clicked_start = e.target.getAttribute('starti');
        this.setState({ clickedModuleStart: clicked_start });
        const clicked_end = e.target.getAttribute('end');
        this.setState({ clickedModuleEnd: clicked_end });
        const clicked_weeks = e.target.getAttribute('weeks');
        this.setState({ clickedModuleWeeks: clicked_weeks });
        this.setState({ EditModuleShow: true })
    }

    fetchRowDetailsToDelete = (e) => {
        const clicked_id = e.target.getAttribute('id');
        this.setState({ moduleToDeleteId: clicked_id });
        this.setState({ confirmCancelShow: true })
    }

    goToDelete = (e) => {
        const module_to_delete_id = e.target.getAttribute('id');
        console.log(module_to_delete_id);
        this.props.deleteThisModule(module_to_delete_id)
    }

    render() {
        let addModuleClose = () => this.setState({ AddModuleShow: false })
        let editModuleClose = () => this.setState({ EditModuleShow: false })
        let confirmClose = () => this.setState({ confirmCancelShow: false })
        return (
            <div>
                <Header />
                <div className="Homepagebody">
                    <div className="mymodules">
                        <p className="text4">My Modules</p>
                        <div className="right">
                            <button className="addmodule" onClick={() => this.setState({ AddModuleShow: true })}>+ Add module</button>
                            <AddModule
                                show={this.state.AddModuleShow}
                                onHide={addModuleClose}
                            />
                        </div>
                    </div>
                    <div className="mymodules1">
                        <p className="text5" >Here you will find the modules you have created as an Academic Staff.</p>
                    </div>

                    <div className='mytable'>
                        <table id="table_id" className="display">
                            <thead>
                                <tr>
                                    <th>Code</th>
                                    <th>Module name</th>
                                    <th>Start date</th>
                                    <th>End date</th>
                                    <th>Weeks in total</th>
                                    <th> </th>
                                    <th> </th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.mymodules && this.props.mymodules.length ? this.props.mymodules.map(
                                    (module) => {
                                        return <tr key={module.id}>
                                            <td><Link className='tableOption'
                                                state={module.id}
                                                to={'../containers/Module/' + module.id}>
                                                {module.code}</Link></td>
                                            <td>{module.name}</td>
                                            <td>{module.start}</td>
                                            <td>{module.end}</td>
                                            <td>{module.weeks}</td>
                                            <td className='tableOption'
                                                id={module.id}
                                                code={module.code}
                                                name={module.name}
                                                starti={module.start}
                                                end={module.end}
                                                weeks={module.weeks}
                                                onClick={this.fetchRowDetails}>Edit</td>
                                            <td className='tableOption'
                                                id={module.id}
                                                onClick={this.fetchRowDetailsToDelete}>Delete</td>
                                        </tr>;
                                    }
                                )
                                    : "No modules added yet."}
                            </tbody>
                        </table>
                    </div>

                    <Modal size="md" aria-labelledby="contained-modal-title-vcenter" centered
                        show={this.state.confirmCancelShow}
                        onHide={confirmClose}>
                        <Modal.Header>
                            <Modal.Title>Confirm action</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div>
                                <Form>
                                    <div className='confirmText'>Are you sure you want to delete this module?</div>
                                    <Form.Group>
                                        <div className="buttons">
                                            <button className="button4" type='submit' id={this.state.moduleToDeleteId} onClick={this.goToDelete}>Yes, delete</button>
                                            <button className="button5" type='submit'>No</button>
                                        </div>
                                    </Form.Group>
                                </Form>
                            </div>
                        </Modal.Body>
                    </Modal>

                    <EditModule
                        id={this.state.clickedModuleId}
                        code={this.state.clickedModuleCode}
                        name={this.state.clickedModuleName}
                        start={this.state.clickedModuleStart}
                        end={this.state.clickedModuleEnd}
                        weeks={this.state.clickedModuleWeeks}
                        show={this.state.EditModuleShow}
                        onHide={editModuleClose}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const mymodules = getModules(state);
    return { mymodules };
};

const mapDispatchToProps = dispatch => {
    return {
        deleteThisModule: (id) => { dispatch(deleteModule(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);