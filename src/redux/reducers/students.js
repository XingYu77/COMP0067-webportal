import { ADD_STUDENT } from "../actionTypes";

const initialState = {
  allIds: ['efb20e4a-4c95-4d4f-b623-89857496be49','64339a44-ff67-4152-a8af-ce714d5997b8','2e2d81e9-66cf-4eae-83c6-04e0d02c39ca'],
  byIds:
    {
      'efb20e4a-4c95-4d4f-b623-89857496be49':{
        moduleId: '60c6a4b2-b608-4173-84b7-21b695290b0c',
        studentId: '19023451',
        firstName: 'William',
        lastName: 'Burns',
        photo: '19023451.jpg',
        eMail: 'w.burns@ucl.ac.uk',
        team: '1629d8ac-5a91-4981-80e9-808167a2203c'
      },
      '64339a44-ff67-4152-a8af-ce714d5997b8':{
        moduleId: '60c6a4b2-b608-4173-84b7-21b695290b0c',
        studentId: '19038273',
        firstName: 'Katherine',
        lastName: 'Gama',
        photo: '19023451.jpg',
        eMail: 'k.gama@ucl.ac.uk',
        team: '1629d8ac-5a91-4981-80e9-808167a2203c'
      },
      '2e2d81e9-66cf-4eae-83c6-04e0d02c39ca':{
        moduleId: '60c6a4b2-b608-4173-84b7-21b695290b0c',
        studentId: '19028364',
        firstName: 'Tara',
        lastName: 'Hubsch',
        photo: '19023451.jpg',
        eMail: 't.hubsch@ucl.ac.uk',
        team: 'c931ad08-48bd-4c24-9f4b-3a7b7babaa0d'
      },
    }
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
      return {
        initialState
      };
    }
    default:
      return state;
  }
}