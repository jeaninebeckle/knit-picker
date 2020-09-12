import axios from 'axios';
import apiKeys from '../apiKeys.json';
import utils from '../utils';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getYarnsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/yarns.json?orderBy="uid"&equalTo="${uid}"`)
    .then(({ data }) => resolve(utils.convertFirebaseCollection(data)))
    .catch((err) => reject(err));
});

const getSingleYarns = (yarnId) => axios.get(`${baseUrl}/yarns/${yarnId}.json`);

const deleteYarns = (yarnId) => axios.delete(`${baseUrl}/yarns/${yarnId}.json`);

const createYarns = (newYarn) => axios.post(`${baseUrl}/yarns.json`, newYarn);

export default {
  getYarnsByUid,
  getSingleYarns,
  deleteYarns,
  createYarns,
};
