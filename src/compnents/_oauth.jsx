import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class OAuth extends React.Component {
    componentDidMount() {
        var payload = "eyJVUEkiOiJ1Y3pscnQ1QHVjbC5hYy51ayIsIlRva2VuIjoiZDQ0Y2ZkNThhZjk1ZjllMGJlYjljOGQ0NWYyZjkyM2VkOWE0ODVmNjg4OTdhZmViYzlhOTM2NDAwN2E1ZmRmY2VhMWJkNTUxNGRkMDcwZGE4ZjUxNWRiNWQyNDBkNTU2ZDhiZjczZmMwYjYxMGQ0MjFkZTkxZTEwNzZlMTc5MjAiLCJGb3JlbmFtZSI6IlJ1b3FpbiIsIkZ1bGxOYW1lIjoiUnVvcWluIFRhbmciLCJVc2VyQXZhdGFyIjoiaHR0cHM6Ly9pbWcubW9lZ2lybC5vcmcvY29tbW9uL2EvYWIvJUU1JTk4JUI0JUU1JUI5JUIzJUU0JUJDJThBJUU0JUI5JThCJUU1JThBJUE5LmpwZWciLCJVc2VyR3JvdXAiOiJBUyJ9";
        var l = atob(payload);
        var req = JSON.parse(l);
        const prefix = "https://comp0067-node.azurewebsites.net/"

        console.log(req);

        fetch(prefix + 'jwt/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                UPI: req.UPI,
                Token: req.Token,
            }),
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            throw new Error(res.status);
        })
        .then((data) => {
            this.props.dispatch({ type: 'SET_Token', UPI: req.UPI, Token: req.Token, Forename: req.Forename});
            this.props.dispatch({ type: 'SET_JWT', JWT: data.jwt });

            this.props.history.push('/');
        })
        .catch((error) => {
            console.log(error);
        });
    }

	render() {
		return (
            <div>
                Redirecting...
			</div>
		);
	}
}

const OAuthWrapper = withRouter(OAuth);

export default connect()(OAuthWrapper);