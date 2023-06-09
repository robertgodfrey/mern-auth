import PropTypes from 'prop-types';

const FormContainer = ({ children }) => {
  return (
    <div className="container mx-auto mt-10">
      { children }
    </div>
  );
};

FormContainer.propTypes = {
  children: PropTypes.any,
};

export default FormContainer;
