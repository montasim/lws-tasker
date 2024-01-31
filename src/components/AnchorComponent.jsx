import PropTypes from 'prop-types';

function AnchorComponent({
  customClass,
  to,
  children
}) {
    return (
        <a
            className={customClass} // Added default classes for consistent styling
            href={to}
        >
            {children}
        </a>
    );
}

AnchorComponent.propTypes = {
    customClass: PropTypes.string,
    to: PropTypes.string.isRequired, // Renamed 'link' prop to 'to'
    children: PropTypes.node.isRequired,
};

AnchorComponent.defaultProps = {
    customClass: 'flex items-center gap-x-4 text-white', // No default custom class
};

export default AnchorComponent;
