import moment from 'moment';

const convertFirebaseCollection = (data) => {
  const objectCollection = data;
  const arrayCollection = [];

  if (objectCollection) {
    Object.keys(objectCollection).forEach((itemId) => {
      objectCollection[itemId].id = itemId;
      arrayCollection.push(objectCollection[itemId]);
    });
  }
  return arrayCollection;
};

const getDate = () => moment().format('l');

export default { convertFirebaseCollection, getDate };
