import PropTypes from 'prop-types';

function ButtonComponent({
  type,
  customClass,
  onClick,
  children
}) {
    return (
        <button
            type={type}
            className={`rounded-md ${customClass}`} // Added 'rounded-md' for consistent styling
            onClick={onClick}
        >
            {children}
        </button>
    );
}

ButtonComponent.propTypes = {
    type: PropTypes.oneOf(['button', 'submit', 'reset']), // Adjust the allowed button types as needed
    customClass: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

ButtonComponent.defaultProps = {
    type: 'button', // Default type is 'button'
    customClass: '', // No default custom class
};

export default ButtonComponent;
