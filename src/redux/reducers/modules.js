import { ADD_MODULE } from "../actionTypes";
import { DELETE_MODULE } from "../actionTypes";

const initialState = {
  allIds: ['60c6a4b2-b608-4173-84b7-21b695290b0c',
  'b18f5054-ba8b-48ab-869a-dabe7a3df79e',
  '71b9b2d3-aee6-42f3-9d9e-b0458d575cd8'],
  byIds:
    {
      '60c6a4b2-b608-4173-84b7-21b695290b0c':{        
        code: 'COMP0022',
        name: 'Database and Information Management Systems',
        start: '2020-02-03',
        end: '2020-03-02',
        weeks: '4'},
      'b18f5054-ba8b-48ab-869a-dabe7a3df79e':{        
        code: 'COMP0023',
        name: 'Computing Management Systems',
        start: '2019-08-10',
        end: '2020-02-10',
        weeks: '12'},
      '71b9b2d3-aee6-42f3-9d9e-b0458d575cd8':{        
        code: 'COMP0030',
        name: 'Algorithmics',
        start: '2019-08-12',
        end: '2020-02-15',
        weeks: '9'},
    }
};

export default function(state = initialState, action) {
  switch (action.type) {
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
