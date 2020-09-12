import PropTypes from 'prop-types';

const needleShape = PropTypes.shape({
  size: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  length: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
  isOwned: PropTypes.bool.isRequired,
  notes: PropTypes.string.isRequired,
});

export default { needleShape };
