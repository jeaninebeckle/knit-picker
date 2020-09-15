import axios from 'axios';
import apiKeys from '../apiKeys.json';
import utils from '../utils';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getProjectsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/projects.json?orderBy="uid"&equalTo="${uid}"`)
    .then(({ data }) => resolve(utils.convertFirebaseCollection(data)))
    .catch((err) => reject(err));
});

const getProjectsByPatternId = (patternId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/projects.json?orderBy="patternId"&equalTo="${patternId}"`)
    .then(({ data }) => resolve(utils.convertFirebaseCollection(data)))
    .catch((err) => reject(err));
});

const getSingleProjects = (projectId) => axios.get(`${baseUrl}/projects/${projectId}.json`);

export default {
  getProjectsByUid,
  getSingleProjects,
  getProjectsByPatternId,
};
