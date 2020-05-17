const initialState = {
  allIds: [],
  byIds: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case '_SET_Team': {
      return {
        ...state,
        [action.key]: action.value,
      }
    }
    case '_RESET_Team': {
        return initialState;
    }
    default:
      return state;
  }
}