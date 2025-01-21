import PropTypes from 'prop-types';

const TextField = ({ label, value, onChange, name, type, required, placeholder,min,max }) => {
  return (
    <div className='mb-3'>
      <label htmlFor={name} className='form-label'>
        {label}
      </label>
      <input
        type={type || 'text'}
        className='form-control'
        min={min}
        max={max}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        required={required}
      />
    </div>
  );
};

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  min:PropTypes.number,
  max:PropTypes.number,
};

export default TextField;
