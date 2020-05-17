import React, { useImperativeHandle } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { postData } from '../redux/_action';

class OAuth extends React.Component {
    componentDidMount() {
        this.props.dispatch({ type: 'LOGOUT' });
        const payload = this.props.location.search.slice(1);

        try {
            var l = atob(payload);
            var req = JSON.parse(l);
        } catch (error) {
            console.warn(error);
            // this.props.history.push('/login');
        }

        const prefix = "https://comp0067-node.azurewebsites.net/"

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
            .then(async (data) => {
                this.props.dispatch({ type: 'SET_Token', UPI: req.UPI, Token: req.Token, Forename: req.Forename });
                this.props.dispatch({ type: 'SET_JWT', JWT: data.jwt });

                postData('courses/list', [])
                    .then((res) => {
                        console.log(res);

                        let allIds = [];
                        let byIds = {};

                        res.forEach((row) => {
                            let StartDate = new Date(row.StartDate);
                            let EndDate = new Date(row.EndDate);
                            const elapsed = EndDate - StartDate;

                            allIds.push(row.UID);

                            byIds[row.UID] = {
                                code: row.CourseCode,
                                name: row.CourseName,
                                start: StartDate.toLocaleDateString(),
                                end: EndDate.toLocaleDateString(),
                                weeks: Math.ceil(elapsed / 604800000),
                            }
                        })
                        this.props.dispatch({ type: '_SET_Module', key: 'allIds', value: allIds});
                        this.props.dispatch({ type: '_SET_Module', key: 'byIds', value: byIds});

                        this.props.history.push('/');
                    })
                    .catch((error) => {
                        console.warn(error);
                    })
            })
            .catch((error) => {
                console.log(error);
                // this.props.history.push('/login');
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