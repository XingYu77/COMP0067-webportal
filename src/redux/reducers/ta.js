import { ADD_TA } from "../actionTypes";

const initialState = {
  allIds: ['7f77f1dc-7bba-4d3d-8bd5-bf25c955c9dc','407ff97a-4c0b-4248-b319-0f390db9ffe6','cbcdadf1-52a3-46e9-965d-f94ad3a77f6c'],
  byIds:
    {
      '7f77f1dc-7bba-4d3d-8bd5-bf25c955c9dc':{
        moduleId: '60c6a4b2-b608-4173-84b7-21b695290b0c',
        name:'Thompson, David',
        eMail:'d.thompson@ucl.ac.uk',
        studentId: '19002384',
        degree: 'MSc Computer Science'
      },
      '407ff97a-4c0b-4248-b319-0f390db9ffe6':{
        moduleId: '60c6a4b2-b608-4173-84b7-21b695290b0c',
        name:'James, Caroline',
        eMail:'c.james@ucl.ac.uk',
        studentId: '19028374',
        degree: 'MSc Machine Learning'
      },
      'cbcdadf1-52a3-46e9-965d-f94ad3a77f6c':{
        moduleId: '60c6a4b2-b608-4173-84b7-21b695290b0c',
        name:'Queens, Ursula',
        eMail:'u.queens@ucl.ac.uk',
        studentId: '19023812',
        degree: 'MSc Physics'
      },
    }
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}