import { useState, useEffect } from 'react';
import { useNetworkStatus } from '../../hooks/useNetworkStatus';
import './NetworkStatus.css';

const NetworkStatus = ({ 
  showOnlineStatus = false, 
  showConnectionInfo = false,
  position = 'top',
  autoHide = true,
  autoHideDelay = 3000
}) => {
  const { 
    isOnline, 
    isSlowConnection, 
    connectionType, 
    downlink, 
    saveData 
  } = useNetworkStatus();
  
  const [visible, setVisible] = useState(!isOnline);
  const [lastStatus, setLastStatus] = useState(isOnline);

  useEffect(() => {
    // Show notification when status changes
    if (lastStatus !== isOnline) {
      setVisible(true);
      setLastStatus(isOnline);

      if (autoHide && isOnline) {
        const timer = setTimeout(() => {
          setVisible(false);
        }, autoHideDelay);

        return () => clearTimeout(timer);
      }
    }

    // Always show when offline
    if (!isOnline) {
      setVisible(true);
    }
  }, [isOnline, lastStatus, autoHide, autoHideDelay]);

  const handleDismiss = () => {
    setVisible(false);
  };

  if (!visible && (!showOnlineStatus || isOnline)) {
    return null;
  }

  const getStatusIcon = () => {
    if (!isOnline) {
      return (
        <svg 
          className="network-status__icon" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M16.5 9.4 7 19l-1.5-1.5L14 9l2.5.4z" />
          <path d="M21 3 9 21l-6-6 12-12 6 6z" />
          <path d="m7 17 4-5 4 5" />
          <path d="m21 3-4 4" />
        </svg>
      );
    }

    if (isSlowConnection) {
      return (
        <svg 
          className="network-status__icon" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 20h.01" />
          <path d="M8.5 16.429a5 5 0 0 1 7 0" />
          <path d="M5 12.859a10 10 0 0 1 5.17-2.69" />
        </svg>
      );
    }

    return (
      <svg 
        className="network-status__icon" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 20h.01" />
        <path d="M8.5 16.429a5 5 0 0 1 7 0" />
        <path d="M5 12.859a10 10 0 0 1 14 0" />
        <path d="M2 8.82a15 15 0 0 1 20 0" />
      </svg>
    );
  };

  const getStatusMessage = () => {
    if (!isOnline) {
      return 'You are currently offline';
    }

    if (isSlowConnection) {
      return `Slow connection detected (${connectionType})`;
    }

    return 'Back online';
  };

  const getConnectionDetails = () => {
    if (!showConnectionInfo || !isOnline) return null;

    return (
      <div className="network-status__details">
        <span className="network-status__detail">
          Type: {connectionType}
        </span>
        {downlink > 0 && (
          <span className="network-status__detail">
            Speed: {downlink} Mbps
          </span>
        )}
        {saveData && (
          <span className="network-status__detail network-status__detail--save-data">
            Data Saver: On
          </span>
        )}
      </div>
    );
  };

  const statusClass = [
    'network-status',
    `network-status--${position}`,
    isOnline ? (isSlowConnection ? 'network-status--slow' : 'network-status--online') : 'network-status--offline',
    visible ? 'network-status--visible' : 'network-status--hidden'
  ].join(' ');

  return (
    <div 
      className={statusClass}
      role="status" 
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="network-status__content">
        <div className="network-status__main">
          {getStatusIcon()}
          <span className="network-status__message">
            {getStatusMessage()}
          </span>
        </div>
        
        {getConnectionDetails()}
        
        {!isOnline && (
          <div className="network-status__advice">
            Some features may not work properly while offline. 
            Your changes will be saved and synced when connection is restored.
          </div>
        )}
      </div>

      {(isOnline || autoHide) && (
        <button
          className="network-status__dismiss"
          onClick={handleDismiss}
          aria-label="Dismiss notification"
          type="button"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default NetworkStatus;