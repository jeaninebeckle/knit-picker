import axios from 'axios';
import apiKeys from '../apiKeys.json';
import utils from '../utils';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getImagesByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/userImages.json?orderBy="uid"&equalTo="${uid}"`)
    .then(({ data }) => resolve(utils.convertFirebaseCollection(data)))
    .catch((err) => reject(err));
});

const createImage = (newImage) => axios.post(`${baseUrl}/userImages.json`, newImage);

export default {
  getImagesByUid,
  createImage,
};
