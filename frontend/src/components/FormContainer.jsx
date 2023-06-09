import PropTypes from 'prop-types';

const FormContainer = ({ children }) => {
  return (
    <div className="container">
      { children }
    </div>
  );
};

// Require a component and location to be passed to each ProtectedRoute.
FormContainer.propTypes = {
  children: PropTypes.any,
};

export default FormContainer;
