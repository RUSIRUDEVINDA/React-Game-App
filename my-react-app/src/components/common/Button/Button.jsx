import PropTypes from 'prop-types';
import styles from './Button.module.css';

function Button({ children, onClick, variant = 'primary', disabled = false, ...props }) {
  return (
    <button 
      className={`${styles.btn} ${styles[variant]}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  disabled: PropTypes.bool,
};

export default Button;