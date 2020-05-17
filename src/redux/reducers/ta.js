import { ADD_TA } from "../actionTypes";

const initialState = {
  allIds: [],
  byIds: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case '_SET_TA': {
      return {
        ...state,
        [action.key]: action.value,
      }
    }
    case '_RESET_TA': {
        return initialState;
    }
    default:
      return state;
  }
}