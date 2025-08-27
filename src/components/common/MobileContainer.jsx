import { useMobile } from '../../hooks/useMobile';
import styles from './MobileContainer.module.css';

/**
 * Smart container that automatically adapts to mobile/desktop
 * Makes it easy to create mobile-optimized layouts
 */
const MobileContainer = ({ 
  children, 
  className = '',
  mobileOnly = false,
  desktopOnly = false,
  padding = 'default',
  center = false,
  maxWidth = '1200px'
}) => {
  const { isMobile, isTablet, isDesktop, getCurrentBreakpoint } = useMobile();

  // Hide component based on device type
  if (mobileOnly && !isMobile) return null;
  if (desktopOnly && isMobile) return null;

  // Get padding class
  const getPaddingClass = () => {
    switch (padding) {
      case 'none': return styles.noPadding;
      case 'small': return styles.smallPadding;
      case 'large': return styles.largePadding;
      default: return styles.defaultPadding;
    }
  };

  const containerClasses = [
    styles.container,
    getPaddingClass(),
    center ? styles.center : '',
    className
  ].filter(Boolean).join(' ');

  const containerStyle = {
    maxWidth: isDesktop ? maxWidth : '100%',
  };

  return (
    <div 
      className={containerClasses}
      style={containerStyle}
      data-breakpoint={getCurrentBreakpoint()}
    >
      {children}
    </div>
  );
};

export default MobileContainer;