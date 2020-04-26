import React from 'react';
import Header from '../../compnents/Header';
import Subeader from '../../compnents/Subheader';
import * as ReactBootStrap from 'react-bootstrap'
import './style.css';

const TAs =props =>{
    const TAset =[
        {name:'Hamiton', email:'haniton@gmail.com',stuid:'19222101',degree:'Bsc Computer Science'},
        {name:'Hamiton', email:'haniton@gmail.com',stuid:'19222101',degree:'Bsc Computer Science'},
        {name:'Hamiton', email:'haniton@gmail.com',stuid:'19222101',degree:'Bsc Computer Science'},
        {name:'Hamiton', email:'haniton@gmail.com',stuid:'19222101',degree:'Bsc Computer Science'},
    ]

    const renderTA = (TA, index) =>{
        return(
            <tr key={index}>
                <td style={{width:'140px', height:'39px',color:'#9b9b9b'}}>{TA.name}</td>
                <td style={{width:'140px', height:'39px',color:'#9b9b9b'}}>{TA.email}</td>
                <td style={{width:'140px', height:'39px',color:'#9b9b9b'}}>{TA.stuid}</td>
                <td style={{width:'140px', height:'39px',color:'#9b9b9b'}}>{TA.degree}</td>
            </tr>
        )
    }
    return(
        
        <div>
        <Header />
        <Subeader />
        <div className="moduletable">
              <ReactBootStrap.Table striped border hover>
                  <thead>
                      <tr>
                          <th style={{width:'140px', height:'39px',color:'#535353',textAlign:'left'}}>Name</th>                       
                          <th style={{width:'140px', height:'39px',color:'#535353',textAlign:'left'}}>eMail</th>
                          <th style={{width:'140px', height:'39px',color:'#535353',textAlign:'left'}}>Student ID</th>
                          <th style={{width:'140px', height:'39px',color:'#535353',textAlign:'left'}}>Degree</th>
                          
                      </tr>
                  </thead>
                  <tbody>
                      {TAset.map(renderTA)}
                  </tbody>
              </ReactBootStrap.Table>
          </div>

       </div>
    );
}

export default TAs;