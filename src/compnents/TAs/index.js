import React, { Component } from 'react';
import Header from '../Header';

import './style.css';
import {Link} from 'react-router-dom';

class TAs extends Component{
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
                                <th>Name</th>
                                <th>eMail</th>
                                <th>Student ID</th>
                                <th>Degree</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td name="Number">1</td>
                                <td name="Name">Armster, John</td>
                                <td name="eMail">j.armster@ucl.ac.uk</td>
                                <td name="StudentID">196382320</td>
                                <td name="Degree">Computer Science</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
       </div>
    );
}
}

export default TAs;