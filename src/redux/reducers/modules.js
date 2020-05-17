import { ADD_MODULE } from "../actionTypes";
import { DELETE_MODULE } from "../actionTypes";

const initialState = {
  allIds: [],
  byIds: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case '_SET_Module': {
      return {
        ...state,
        [action.key]: action.value
      }
    }
    case 'LOGOUT' : {
      return {
        initialState,
      }
    }
    case ADD_MODULE: {
      const { id, code, name, start, end, weeks } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            code,
            name,
            start, 
            end, 
            weeks
          }
        }
      };
    }
    case DELETE_MODULE: {
      const deleted_id = action.payload.id;
      const filtered_allIds = state.allIds.filter(id => id !== deleted_id );
      const filtered_byIds = Object.keys(state.byIds)
        .filter(key => key !== deleted_id)
        .reduce((obj, key) => {
          obj[key] = state.byIds[key];
          return obj;
        }, {});
      return {
        allIds: filtered_allIds,
        byIds: filtered_byIds
      };
    }
    
    default:
      return state;
  }
}
