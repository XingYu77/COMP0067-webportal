import {ADD_MODULE} from "./actionTypes";
import {DELETE_MODULE} from "./actionTypes";
import {ADD_STUDENT} from "./actionTypes";
import {ADD_TEAM} from "./actionTypes";

let lastModuleId = 0;

export const addThisModule = (code, name, start, end, weeks) => ({
  type: ADD_MODULE,
  payload: {
      id: lastModuleId + 1,
      code, 
      name, 
      start,
      end, 
      weeks
  }
});

export const deleteModule = (id) => ({
  type: DELETE_MODULE,
  payload: {
      id
  }
});

let lastStudentId = 0;

export const addStudent = (moduleId, studentId, firstName, lastName, photo, eMail, team) => ({
  type: ADD_STUDENT,
  payload: {
      id: lastStudentId + 1,
      moduleId,
      studentId,
      firstName,
      lastName,
      photo,
      eMail,
      team
  }
});

let lastTeamId = 0;

export const addTeam = (moduleId, name, lab, projectName, ta, teamLeader, firstMember, secondMember) => ({
  type: ADD_TEAM,
  payload: {
      id: lastTeamId + 1,
      name, 
      lab, 
      projectName,
      ta,
      teamLeader,
      firstMember,
      secondMember
  }
});

let lastTAId = 0;

export const addTA = (moduleId, name, email, studentId, degree) => ({
  type: ADD_TEAM,
  payload: {
      id: lastTeamId + 1,
      moduleId, 
      name, 
      email, 
      studentId, 
      degree
  }
});

