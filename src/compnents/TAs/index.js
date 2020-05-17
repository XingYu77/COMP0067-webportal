import React, { Component } from 'react';
import './style.css';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-dt/css/jquery.dataTables.css';
import { connect } from "react-redux";
import { getTAs } from '../../redux/selectors';

class TAs extends Component{
    render(){
        $(document).ready( function () {
            $('#tastable').DataTable();
        } );
        return(
        <div>
            <div className='Pagebody'>
                <div className='mytable'>
                    <table id="tastable">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>eMail</th>
                                <th>Student ID</th>
                                <th>Degree</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.props.mytas.filter(ta => ta.moduleId === this.props.moduleId).map(
                                (ta) => {
                                    return <tr>
                                        <td>{ta.name}</td>
                                        <td>{ta.eMail}</td>
                                        <td>{ta.studentId}</td>
                                        <td>{ta.degree}</td>
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
    const mytas = getTAs(state);
    return {mytas};
};

export default connect (mapStateToProps)(TAs);