import { Icon } from "@iconify/react";
import PropTypes from "prop-types";

const Iconify = ({
  className,
  icon,
  iconColor,
  onClick,
  iconStyle,
  disabled = false,
}) => {
  return (
    <div
      className={`${className} ${
     "cursor-pointer"
      }`}
      onClick={!disabled ? onClick : undefined}
    >
      <Icon
        icon={icon}
        className={`${iconStyle || `w-100 h-100 text-${iconColor}`}`}
      />
    </div>
  );
};

Iconify.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  iconColor: PropTypes.string,
  onClick: PropTypes.func,
  iconStyle: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Iconify;
