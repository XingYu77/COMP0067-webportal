import React from 'react';
import './App.css';
import Login from './containers/Login';
import Home from './containers/Home';
import Settings from './containers/Settings';
import Module from './containers/Module';
import { BrowserRouter as Router,Route} from 'react-router-dom';


class App extends React.Component {
	render(){
		return(
		<Router>
		 <div>
			<Route exact path="/" component={Login} />
      <Route exact path="/containers/Login" component={Login} />
			<Route exact path="/containers/Home" component={Home} /> 
			<Route exact path="/containers/Module" component={Module} />                                                                                                                                                                                                                                                                               
			                                                                                                                                                                                                                                                                                                                                                                                                                                         
		</div>
		</Router>
		)
	}
}
export default App;

