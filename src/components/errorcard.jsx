import PropTypes from 'prop-types';

const ErrorCard = ({ error }) => {
  return (
    <div className="error-card">
      <div className="error-header-row">
        <span className="error-category">{error.category}</span>
        {error.level && <span className="error-level">{error.level}</span>}
      </div>
      <h3 className="error-title">{error.title}</h3>
      <p className="error-description">{error.description}</p>
      <div className="error-fix-tip">
        <h4>Fix Tip:</h4>
        <p>{error.fix}</p>
      </div>
    </div>
  );
};

ErrorCard.propTypes = {
  error: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    fix: PropTypes.string.isRequired,
    level: PropTypes.string,
  }).isRequired,
};

export default ErrorCard;
