import React, { Component } from 'react';
import './style.css';
import {Link} from 'react-router-dom';

class Students extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <div>
            <div className='Pagebody'>
                <div className='mytable'>
                    <table id="moduletable">
                        <thead>
                            <tr>
                                <th> </th>
                                <th>Student ID</th>
                                <th>First name</th>
                                <th>Last name</th>
                                <th>Photo</th>
                                <th>eMail</th>
                                <th>Team</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td name="Number">1</td>
                                <td name="StudentID">19320894</td>
                                <td name="FirstName">Richard</td>
                                <td name="LastName">Westfields</td>
                                <td name="Photo">19320894.jpg</td>
                                <td name="eMail">r.westfields@ucl.ac.uk</td>
                                <td name="Team">Team 9</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
       </div>
    );
}
}

export default Students;