

export const getModulesState = store => store.modules;

export const getModuleList = store => getModulesState(store) ? getModulesState(store).allIds : [];

export const getModuleById = (store, id) => getModulesState(store) ? { ...getModulesState(store).byIds[id], id } : {};

export const getModules = store => getModuleList(store) === undefined? [] : getModuleList(store).map(id => getModuleById(store, id));


export const getStudentsState = store => store.students;

export const getStudentsList = store => getStudentsState(store) ? getStudentsState(store).allIds : [];

export const getStudentById = (store, id) => getStudentsState(store) ? { ...getStudentsState(store).byIds[id], id } : {};

export const getStudents = store => getStudentsList(store).map(id => getStudentById(store, id));


export const getTeamsState = store => store.teams;

export const getTeamsList = store => getTeamsState(store) ? getTeamsState(store).allIds : [];

export const getTeamById = (store, id) => getTeamsState(store) ? { ...getTeamsState(store).byIds[id], id } : {};

export const getTeams = store => getTeamsList(store).map(id => getTeamById(store, id));


export const getTAsState = store => store.ta;

export const getTAsList = store => getTAsState(store) ? getTAsState(store).allIds : [];

export const getTAById = (store, id) => getTAsState(store) ? { ...getTAsState(store).byIds[id], id } : {};

export const getTAs = store => getTAsList(store).map(id => getTAById(store, id));
