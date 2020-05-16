import React, { Component } from 'react';
import './style.css';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-dt/css/jquery.dataTables.css';
import { connect } from "react-redux";
import { getStudents , getTeams } from '../../redux/selectors';

class Students extends Component{
    constructor(props){
        super(props);
    }

    render(){
        $(document).ready( function () {
            $('#studentstable').DataTable();
        } );
        return(
        <div>
            <div className='Pagebody'>
                <div className='mytable'>
                    <table className="studentstable" id="studentstable">
                        <thead>
                            <tr>
                                <th>Student ID</th>
                                <th>First name</th>
                                <th>Last name</th>
                                <th>Photo</th>
                                <th>eMail</th>
                                <th>Team</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.props.mystudents.filter(std => std.moduleId == this.props.moduleId).map(
                                (student) => {
                                    return <tr>
                                        <td>{student.studentId}</td>
                                        <td>{student.firstName}</td>
                                        <td>{student.lastName}</td>
                                        <td>{student.photo}</td>
                                        <td>{student.eMail}</td>
                                        <td>{ this.props.myteams.filter(t => t.id === student.team)[0] ? this.props.myteams.filter(t => t.id === student.team)[0].name : 'Not defined'}</td>
                                    </tr>;
                                    }
                                )}
                        </tbody>
                    </table>
                </div>
            </div>
       </div>
    );
}
}

const mapStateToProps = (state) => {
    const mystudents = getStudents(state);
    const myteams = getTeams(state);
    return {mystudents, myteams };
};

export default connect (mapStateToProps)(Students);