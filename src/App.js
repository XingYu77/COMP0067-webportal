import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import PrivateRoute from './compnents/_privateRouter';
import Login from './containers/Login';
import Home from './containers/Home';
import Module from './containers/Module';
import OAuth from './compnents/_oauth';



class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Route path="/login" component={Login} />
					<Route path="/oauth" component={OAuth} />
					<PrivateRoute exact path="/" component={Home} />
					<PrivateRoute exact path="/Module/:moduleId" component={Module} />
				</div>
			</Router>
		)
	}
}

export default App;

