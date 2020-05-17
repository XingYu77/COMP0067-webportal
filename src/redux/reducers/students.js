const initialState = {
  allIds: [],
  byIds: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case '_SET_Student': {
      return {
        ...state,
        [action.key]: action.value,
      }
    }
    case '_RESET_Student': {
        return initialState;
    }
    default:
      return state;
  }
}