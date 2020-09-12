import PropTypes from 'prop-types';

const yarnShape = PropTypes.shape({
  color: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  weight: PropTypes.number.isRequired,
  uid: PropTypes.string.isRequired,
  isOwned: PropTypes.bool.isRequired,
  material: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired,
});

export default { yarnShape };
