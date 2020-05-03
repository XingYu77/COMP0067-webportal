import React, { Component } from 'react';
import Header from '../Header';
import Subheader from '../Subheader';
import './style.css';
import {Link} from 'react-router-dom';

class Teams extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='Studentpagebody'>
                <div className='mytable'>
                    <table id="moduletable">
                        <thead>
                            <tr>
                                <th> </th>
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
                            <tr>
                                <td name="Number">1</td>
                                <td name="Name">Team 9</td>
                                <td name="Lab">Lab A</td>
                                <td name="ProjectName">Traffic Light App</td>
                                <td name="TA">John A.</td>
                                <td name="TeamLeader">Westfields, Richard</td>
                                <td name="FirstMember">Moore, Fabian</td>
                                <td name="SecondMember">Wimbley, Tina</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    );
}
}

export default Teams;