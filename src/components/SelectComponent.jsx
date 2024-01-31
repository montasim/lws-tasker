import PropTypes from 'prop-types';

function SelectComponent({
  customClass,
  inputName,
  inputId,
  inputValue,
  options,
  onChange,
  isRequired,
}) {
    return (
        <select
            className={customClass}
            name={inputName}
            id={inputId}
            value={inputValue}
            onChange={onChange}
            required={isRequired}
        >
            <option value="">Select Priority</option>
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
}

SelectComponent.propTypes = {
    customClass: PropTypes.string,
    inputName: PropTypes.string.isRequired,
    inputId: PropTypes.string.isRequired,
    inputValue: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onChange: PropTypes.func.isRequired,
    isRequired: PropTypes.bool,
};

SelectComponent.defaultProps = {
    customClass: 'block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5',
    isRequired: true,
};

export default SelectComponent;
