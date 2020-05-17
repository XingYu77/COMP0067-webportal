
/**
 * Redux Actions
 * Just a simple example
 *
 * @AtrixRian
 */

import { store } from '../redux/store';

const prefix = 'https://comp0067-node.azurewebsites.net/';

export function postData(uri, data, courseID) {
    let state = store.getState();

    return fetch(prefix + uri, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: 'Bearer ' + state.authReducer.JWT,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            CourseID: courseID,
            payload: JSON.stringify(data),
        }),
    })
    .then((res) => {
        if (res.ok) {
            return res.json();
        }
        throw new Error(res.status);
    });
}