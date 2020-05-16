import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { PrivateRoute } from './compnents/_privateRouter';
import Home from './containers/Home';
import OAuth from './compnents/_oauth';
import Login from './containers/Login';
import Module from './containers/Module';


class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Route path="/login" component={Login} />
					<Route path="/oauth" component={OAuth} />
					<Route exact path="/" component={Home} />
					<Route exact path="/Module/:moduleId" component={Module} />
				</div>
			</Router>
		)
	}
}

export default App;

