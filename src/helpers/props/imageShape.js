import PropTypes from 'prop-types';

const imageShape = PropTypes.shape({
  imageUrl: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
});

export default { imageShape };
