/**
 * authReducer
 * Just a simple example
 *
 * @AtrixRian
 */

const initialState = {
    Forename: null,
    Token: null,
    UPI: null,
    JWT: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_Token' : {
            return {
                ...state,
                UPI: action.UPI,
                Token: action.Token,
                Forename: action.Forename,
            };
        }
        case 'SET_JWT' : {
            return {
                ...state,
                JWT: action.JWT,
            };
        }
        case 'LOGOUT' : {
            return initialState;
        }
        default: {
            return state;
        }
    }
};

export default authReducer;
