import React,{Component} from 'react';
import{ Modal , Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { connect } from "react-redux";
import { addThisModule } from "../../redux/actions";

export class AddModule extends Component{
    constructor(props){
      super(props);
      this.state = {Code: '', Name: '', Start:'', End:'', Weeks:0}
      this.getWeeks = this.getWeeks.bind(this);
      this.changeInput = this.changeInput.bind(this);
      this.weeksBetween = this.weeksBetween.bind(this);
      this.addTheModule = this.addTheModule.bind(this)
    };

    getWeeks(){
      if (this.state.Start === '' || this.state.End===''){
        return 0
      } else {
        const resultingweeks = this.weeksBetween(this.state.Start,this.state.End)
        return resultingweeks
      }
    };

    weeksBetween(d1, d2) {
      const day1 = new Date(d1)
      const day2 = new Date(d2)
      return Math.round((day2.getTime() - day1.getTime()) / (7 * 24 * 60 * 60 * 1000));
    }

    changeInput(e) {
      const target = e.target;
      const value = target.value;
      const name = target.name
      this.setState({[name]: value});
    };

    addTheModule(){
      this.props.onAddPressed(this.Code, this.Name, this.Start, this.End, this.Weeks);
      console.log(this.Code);
      this.setState({Code: '', Name: '', Start:'', End:'', Weeks:0})
  };
 
    render(){
        return(
            <Modal
              {...this.props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
              <Modal.Header> 
                <Modal.Title>New Module</Modal.Title>
              </Modal.Header>
            <Modal.Body>
              <div>
                  <Form>
                    <div className='field'>
                      <div><p className="fieldtitle">Module code</p></div>
                      <div className="fieldinput"><input name="Code" placeholder="COMP0000" onChange={this.changeInput} value = {this.state.Code}/></div>
                    </div>
                    <div className='field'>
                      <div><p className="fieldtitle">Module name</p></div>
                      <div className="fieldinput"><input name="Name" placeholder="e.g. Software Architecture" onChange={this.changeInput} value = {this.state.Name}/></div>
                    </div>
                    <div className='field'>
                      <div><p className="fieldtitle">Start date</p></div>
                      <div className="fieldinput"><input name="Start" placeholder="mm/dd/yy" type="date" onChange={this.changeInput} value = {this.state.Start}/></div>
                    </div>
                    <div className='field'>
                      <div><p className="fieldtitle">End date</p></div>
                      <div className="fieldinput"><input name="End" placeholder="mm/dd/yy" type="date" onChange={this.changeInput} value = {this.state.End}/></div>
                    </div>
                    <div className='field'>
                      <div><p className="fieldtitle">Weeks</p></div>
                      <div><p className="weeks" name="Weeks" value = {this.state.Weeks}>{this.getWeeks()}</p></div>
                    </div>             
                    <Form.Group>
                      <button 
                        onClick={this.addTheModule}
                        className="button3">
                          Add module
                        </button>
                    </Form.Group> 
                  </Form>         
              </div>
            </Modal.Body>
          </Modal>
        );
    }
}

const mapDispatchToProps = dispatch => ({
  onAddPressed: function(co,na,st,en,we) {dispatch(addThisModule(co,na,st,en,we))}
});

export default connect(null,mapDispatchToProps)(AddModule);
