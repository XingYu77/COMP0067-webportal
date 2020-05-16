import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { PrivateRoute } from './compnents/_privateRouter';
import Home from './containers/Home';
import Login from './containers/Login';
import Module from './containers/Module';


class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Route path="/login" component={Login} />
					<PrivateRoute exact path="/" component={Home} />
					<PrivateRoute exact path="/Module/:moduleId" component={Module} />
				</div>
			</Router>
		)
	}
}

export default App;

