import PropTypes from 'prop-types';

const patternShape = PropTypes.shape({
  patternName: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
  needleSize: PropTypes.number.isRequired,
  needleType: PropTypes.string.isRequired,
  needleLength: PropTypes.string.isRequired,
  yarnColor: PropTypes.string.isRequired,
  yarnType: PropTypes.string.isRequired,
  yarnWeight: PropTypes.number.isRequired,
  uid: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  patternUrl: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired,
});

export default { patternShape };
