import './LoadingSpinner.css';

const LoadingSpinner = ({ 
  size = 'medium', 
  color = 'primary',
  text = 'Loading...',
  showText = true,
  className = '',
  ...props 
}) => {
  const sizeClasses = {
    small: 'loading-spinner--small',
    medium: 'loading-spinner--medium',
    large: 'loading-spinner--large'
  };

  const colorClasses = {
    primary: 'loading-spinner--primary',
    secondary: 'loading-spinner--secondary',
    light: 'loading-spinner--light'
  };

  const spinnerClasses = [
    'loading-spinner',
    sizeClasses[size] || sizeClasses.medium,
    colorClasses[color] || colorClasses.primary,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className="loading-spinner-container" {...props}>
      <div 
        className={spinnerClasses}
        role="status"
        aria-label={text}
      >
        <svg
          className="loading-spinner__svg"
          viewBox="0 0 50 50"
          aria-hidden="true"
        >
          <circle
            className="loading-spinner__circle"
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="31.416"
            strokeDashoffset="31.416"
          />
        </svg>
      </div>
      {showText && (
        <span className="loading-spinner__text">
          {text}
        </span>
      )}
    </div>
  );
};

export default LoadingSpinner;