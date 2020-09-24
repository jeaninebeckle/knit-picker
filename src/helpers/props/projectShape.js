import PropTypes from 'prop-types';

const projectShape = PropTypes.shape({
  uid: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  patternId: PropTypes.string.isRequired,
});

export default { projectShape };
