import { ADD_TEAMS } from "../actionTypes";

const initialState = {
  allIds: ['1629d8ac-5a91-4981-80e9-808167a2203c','c931ad08-48bd-4c24-9f4b-3a7b7babaa0d','3a1ffe11-6eb8-4039-b29e-4dac343d13f2'],
  byIds:
    {
      '1629d8ac-5a91-4981-80e9-808167a2203c':{
        moduleId: '60c6a4b2-b608-4173-84b7-21b695290b0c',
        name: 'Team 1',
        lab: 'Lab A',
        projectName: 'VR Simulations',
        ta: '7f77f1dc-7bba-4d3d-8bd5-bf25c955c9dc',
        teamLeader: 'efb20e4a-4c95-4d4f-b623-89857496be49',
        firstMember: '64339a44-ff67-4152-a8af-ce714d5997b8',
        secondMember: '2e2d81e9-66cf-4eae-83c6-04e0d02c39ca',
      },
      'c931ad08-48bd-4c24-9f4b-3a7b7babaa0d':{
        moduleId: '60c6a4b2-b608-4173-84b7-21b695290b0c',
        name: 'Team 2',
        lab: 'Lab A',
        projectName: 'VR Simulations',
        ta: '407ff97a-4c0b-4248-b319-0f390db9ffe6',
        teamLeader: 'efb20e4a-4c95-4d4f-b623-89857496be49',
        firstMember: '64339a44-ff67-4152-a8af-ce714d5997b8',
        secondMember: '2e2d81e9-66cf-4eae-83c6-04e0d02c39ca',
      },
      '3a1ffe11-6eb8-4039-b29e-4dac343d13f2':{
        moduleId: '60c6a4b2-b608-4173-84b7-21b695290b0c',
        name: 'Team 3',
        lab: 'Lab A',
        projectName: 'VR Simulations',
        ta: 'cbcdadf1-52a3-46e9-965d-f94ad3a77f6c',
        teamLeader: 'efb20e4a-4c95-4d4f-b623-89857496be49',
        firstMember: '64339a44-ff67-4152-a8af-ce714d5997b8',
        secondMember: '2e2d81e9-66cf-4eae-83c6-04e0d02c39ca',
      },
    }
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