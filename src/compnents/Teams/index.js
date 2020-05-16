import React, { Component } from 'react';
import './style.css';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-dt/css/jquery.dataTables.css';
import { connect } from "react-redux";
import { getTeams , getStudents , getTAs } from '../../redux/selectors';


class Teams extends Component{
    constructor(props){
        super(props);
    }
    render(){
        $(document).ready( function () {
            $('#teamstable').DataTable();
        } );
        return(
            <div className='Studentpagebody'>
                <div className='mytable'>
                    <table id="teamstable">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Lab</th>
                                <th>Project name</th>
                                <th>TA</th>
                                <th>Team Leader</th>
                                <th>First member</th>
                                <th>Second member</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.props.myteams.filter(team => team.moduleId == this.props.moduleId).map(
                                (team) => {
                                    return <tr>
                                        <td>{team.name}</td>
                                        <td>{team.lab}</td>
                                        <td>{team.projectName}</td>
                                        <td>{this.props.mytas.filter(ta => ta.id === team.ta)[0] ? this.props.mytas.filter(ta => ta.id === team.ta)[0].name : 'Not defined'}</td>
                                        <td>{this.props.mystudents.filter(std => std.id === team.teamLeader)[0] ? this.props.mystudents.filter(std => std.id === team.teamLeader)[0].lastName + ", " + this.props.mystudents.filter(std => std.id === team.teamLeader)[0].firstName : 'Not defined'}</td>
                                        <td>{this.props.mystudents.filter(std => std.id === team.firstMember)[0] ? this.props.mystudents.filter(std => std.id === team.firstMember)[0].lastName + ", " + this.props.mystudents.filter(std => std.id === team.firstMember)[0].firstName : 'Not defined'}</td>
                                        <td>{this.props.mystudents.filter(std => std.id === team.secondMember)[0] ? this.props.mystudents.filter(std => std.id === team.secondMember)[0].lastName + ", " + this.props.mystudents.filter(std => std.id === team.secondMember)[0].firstName : 'Not defined'}</td>
                                    </tr>;
                                    }
                                )}
                        </tbody>
                    </table>
                </div>
            </div>
    );
}
}

const mapStateToProps = (state) => {
    const myteams = getTeams(state);
    const mystudents = getStudents(state);
    const mytas = getTAs(state);
    return {myteams,mystudents, mytas};
};

export default connect (mapStateToProps)(Teams);