import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';


const Button = ({ variant = 'primary', label, icon, onClick, type }) => {
  const variantClass = variant === 'info' ? 'btn-info' : variant === 'secondary' ? 'btn-secondary' : 'btn-primary';

  return (
    <button className={`btn ${variantClass} d-flex align-items-center`} onClick={onClick} type={type || 'button'}>
      {icon && <Icon icon={icon} style={{ marginRight: '8px' }} />}
      {label}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};
export default Button;
