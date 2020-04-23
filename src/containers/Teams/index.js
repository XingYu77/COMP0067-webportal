import React from 'react';
import Header from '../../compnents/Header';
import Subeader from '../../compnents/Subheader';
import * as ReactBootStrap from 'react-bootstrap';
import './style.css';

const Teams =props =>{
    const Teamset =[
        {team:'9', lab:'A', TA:'Zhang Zhang',project:'CS Labs traffic light',leader:'Ruoqin',SecMem:'Natalia',ThirdMem:'Xingyu'},
        {team:'9', lab:'A', TA:'Zhang Zhang',project:'CS Labs traffic light',leader:'Ruoqin',SecMem:'Natalia',ThirdMem:'Xingyu'},
        {team:'9', lab:'A', TA:'Zhang Zhang',project:'CS Labs traffic light',leader:'Ruoqin',SecMem:'Natalia',ThirdMem:'Xingyu'},
        {team:'9', lab:'A', TA:'Zhang Zhang',project:'CS Labs traffic light',leader:'Ruoqin',SecMem:'Natalia',ThirdMem:'Xingyu'},
    ]

    const renderTeam = (Team, index) =>{
        return(
            <tr key={index}>
                <td style={{width:'140px', height:'39px',color:'#9b9b9b'}}>{Team.team}</td>
                <td style={{width:'140px', height:'39px',color:'#9b9b9b'}}>{Team.lab}</td>
                <td style={{width:'140px', height:'39px',color:'#9b9b9b'}}>{Team.TA}</td>
                <td style={{width:'140px', height:'39px',color:'#9b9b9b'}}>{Team.project}</td>
                <td style={{width:'140px', height:'39px',color:'#9b9b9b'}}>{Team.leader}</td>
                <td style={{width:'140px', height:'39px',color:'#9b9b9b'}}>{Team.SecMem}</td>
                <td style={{width:'140px', height:'39px',color:'#9b9b9b'}}>{Team.ThirdMem}</td>
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
                          <th style={{width:'140px', height:'39px',color:'#535353',textAlign:'left'}}>Team</th>
                          <th style={{width:'140px', height:'39px',color:'#535353',textAlign:'left'}}>Lab</th>
                          <th style={{width:'140px', height:'39px',color:'#535353',textAlign:'left'}}>TA</th>
                          <th style={{width:'140px', height:'39px',color:'#535353',textAlign:'left'}}>Project</th>
                          <th style={{width:'140px', height:'39px',color:'#535353',textAlign:'left'}}>Leader</th>
                          <th style={{width:'140px', height:'39px',color:'#535353',textAlign:'left'}}>Second Member</th>
                          <th style={{width:'140px', height:'39px',color:'#535353',textAlign:'left'}}>Third Member</th>
                          
                      </tr>
                  </thead>
                  <tbody>
                      {Teamset.map(renderTeam)}
                  </tbody>
              </ReactBootStrap.Table>
          </div>
       </div>
    );
}

export default Teams;