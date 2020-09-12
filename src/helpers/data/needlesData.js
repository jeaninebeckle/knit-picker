import axios from 'axios';
import apiKeys from '../apiKeys.json';
import utils from '../utils';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getNeedlesByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/needles.json?orderBy="uid"&equalTo="${uid}"`)
    .then(({ data }) => resolve(utils.convertFirebaseCollection(data)))
    .catch((err) => reject(err));
});

const getSingleNeedles = (needleId) => axios.get(`${baseUrl}/needles/${needleId}.json`);

const deleteNeedles = (needleId) => axios.delete(`${baseUrl}/needles/${needleId}.json`);

const createNeedles = (newNeedles) => axios.post(`${baseUrl}/needles.json`, newNeedles);

const updateNeedles = (needleId, updatedNeedle) => axios.put(`${baseUrl}/needles/${needleId}.json`, updatedNeedle);

export default {
  getNeedlesByUid,
  getSingleNeedles,
  deleteNeedles,
  createNeedles,
  updateNeedles,
};
