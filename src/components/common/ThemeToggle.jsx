import { useTheme } from '../../context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = ({ className = '', showLabel = true, variant = 'button' }) => {
  const { theme, toggleTheme, isDarkMode, isSystemMode } = useTheme();

  const getIcon = () => {
    if (theme === 'light' || theme === 'system') {
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="theme-toggle__icon"
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      );
    } else {
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="url(#moon-gradient)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="theme-toggle__icon"
        >
          <defs>
            <linearGradient id="moon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#40E0D0', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#0080FF', stopOpacity: 1}} />
            </linearGradient>
          </defs>
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      );
    }
  };

  const getLabel = () => {
    if (theme === 'light' || theme === 'system') return 'Light mode';
    return 'Dark mode';
  };

  const getAriaLabel = () => {
    const currentMode = getLabel().toLowerCase();
    const nextMode = (theme === 'light' || theme === 'system') ? 'dark mode' : 'light mode';
    return `Currently using ${currentMode}. Click to switch to ${nextMode}`;
  };

  if (variant === 'select') {
    return (
      <div className={`theme-toggle theme-toggle--select ${className}`}>
        <label htmlFor="theme-select" className="theme-toggle__label">
          Theme:
        </label>
        <select
          id="theme-select"
          value={theme}
          onChange={(e) => toggleTheme(e.target.value)}
          className="theme-toggle__select"
          aria-label="Select theme preference"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="system">System</option>
        </select>
      </div>
    );
  }

  return (
    <button
      className={`theme-toggle theme-toggle--button ${className}`}
      onClick={toggleTheme}
      aria-label={getAriaLabel()}
      title={getAriaLabel()}
      type="button"
    >
      <span className="theme-toggle__icon-container">
        {getIcon()}
      </span>
      
      {showLabel && (
        <span className="theme-toggle__label">
          {getLabel()}
        </span>
      )}
      
      {/* Visual indicator for system mode */}
      {isSystemMode && (
        <span className="theme-toggle__system-indicator" aria-hidden="true">
          <span className={`theme-toggle__dot ${isDarkMode ? 'theme-toggle__dot--dark' : 'theme-toggle__dot--light'}`} />
        </span>
      )}
    </button>
  );
};

export default ThemeToggle;