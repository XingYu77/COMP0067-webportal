import React, { Component } from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import { CsvToHtmlTable } from 'react-csv-to-table';
import ReactFileReader from 'react-file-reader';

class Subheader extends Component{
    constructor(){
        super()
        this.state={
        csvData: ''
      }
    }
;
    render(){
        return(
            <div>
            <div className="subheader">
                    <p className="text8" >COMP0067 - 14weeks(01/14/20 - 31/03/20) </p>
            </div >

            <div className="subheader1">
                <p className="text9" >Design</p>
                <ReactFileReader 
                    multipleFiles={false}
                    fileTypes={[".csv"]} 
                    handleFiles={this.handleFiles}>
                <button  className="button1">
                    Upload file
                </button>
                </ReactFileReader>
                <button  className="button2">
                    Export file
                </button>
            </div>

            <header className="header1">
            <nav className="headerMenu1">
           
            <Link to='../../containers/Students'>Students</Link>
            <Link to='../../containers/Teams'>Teams</Link>
            <Link to='../../containers/TAs'>TAs</Link>
                
            </nav>
          </header>
            <div className="table0">
            <CsvToHtmlTable
                data={this.state.csvData}
                csvDelimiter=","
                tableClassName="table table-striped table-hover"
            />
            </div>
        </div>
        );
  }
            handleFiles = files => {
                var reader = new FileReader();
                reader.onload =  (e) => {
                // Use reader.result
                this.setState({
                    csvData: reader.result
                })
                }
                reader.readAsText(files[0]);
            }
}

export default Subheader;