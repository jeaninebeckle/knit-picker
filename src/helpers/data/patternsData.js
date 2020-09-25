import axios from 'axios';
import apiKeys from '../apiKeys.json';
import utils from '../utils';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getPatternsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/patterns.json?orderBy="uid"&equalTo="${uid}"`)
    .then(({ data }) => resolve(utils.convertFirebaseCollection(data)))
    .catch((err) => reject(err));
});

const getSinglePatterns = (patternId) => axios.get(`${baseUrl}/patterns/${patternId}.json`);

const deletePatterns = (patternId) => axios.delete(`${baseUrl}/patterns/${patternId}.json`);

const createPatterns = (newPattern) => axios.post(`${baseUrl}/patterns.json`, newPattern);

const updatePatterns = (patternId, updatedPattern) => axios.put(`${baseUrl}/patterns/${patternId}.json`, updatedPattern);

export default {
  getPatternsByUid,
  getSinglePatterns,
  deletePatterns,
  createPatterns,
  updatePatterns,
};
