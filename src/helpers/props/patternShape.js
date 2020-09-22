import PropTypes from 'prop-types';

const patternShape = PropTypes.shape({
  patternName: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
  needleDetails: PropTypes.string.isRequired,
  yarnDetails: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  patternUrl: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired,
});

export default { patternShape };
