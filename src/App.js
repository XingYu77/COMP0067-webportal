import React from 'react';
import './App.css';
import Login from './containers/Login';
import Home from './containers/Home';
import Settings from './containers/Settings';
import Students from './containers/Students';
import Teams from './containers/Teams';
import TAs from './containers/TAs';
import { BrowserRouter as Router,Route} from 'react-router-dom';


class App extends React.Component {
	render(){
		return(
		<Router >
		 <div>
			<Route exact path="/" component={Login} />
            <Route exact path="/containers/Login" component={Login} />
			<Route exact path="/containers/Home" component={Home} />
			<Route exact path="/containers/Settings" component={Settings} />  
			<Route exact path="/containers/Students" component={Students} />  
			<Route exact path="/containers/Teams" component={Teams} /> 
			<Route exact path="/containers/TAs" component={TAs} />                                                                                                                                                                                                                                                                                 
			                                                                                                                                                                                                                                                                                                                                                                                                                                         
		</div>
		</Router>
		)
	}
}
export default App;

