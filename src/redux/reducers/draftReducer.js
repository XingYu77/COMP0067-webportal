/**
 * draftReducer
 * Just a simple example
 *
 * @AtrixRian
 */

const initialState = {

};

const draftReducer = (state = initialState, action) => {
    switch (action.type) {
        case '_SET_Draft': {
            return {
                ...state,
                [action.key]: action.value,
            }
        }
        case 'LOGOUT' : {
            return initialState;
        }
        default: {
            return state;
        }
    }
};

export default draftReducer;
