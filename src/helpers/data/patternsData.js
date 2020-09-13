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

export default {
  getPatternsByUid,
  getSinglePatterns,
};
