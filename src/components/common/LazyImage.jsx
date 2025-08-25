import { useState, useRef, useEffect } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './LazyImage.css';

const LazyImage = ({
  src,
  alt,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PC9zdmc+',
  className = '',
  sizes,
  srcSet,
  loading = 'lazy',
  onLoad,
  onError,
  style,
  width,
  height,
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [imageRef, setImageRef] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [hasStartedLoading, setHasStartedLoading] = useState(false);
  
  const [intersectionRef, isIntersecting, hasIntersected] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px'
  });

  const imageElementRef = useRef(null);

  useEffect(() => {
    if (!hasIntersected || hasStartedLoading) return;

    const img = new Image();
    setHasStartedLoading(true);

    const handleLoad = () => {
      setImageSrc(src);
      setIsLoaded(true);
      onLoad?.(img);
    };

    const handleError = (error) => {
      setIsError(true);
      onError?.(error);
    };

    img.onload = handleLoad;
    img.onerror = handleError;

    if (srcSet) {
      img.srcset = srcSet;
    }
    
    img.src = src;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [hasIntersected, hasStartedLoading, src, srcSet, onLoad, onError]);

  const combinedRef = (node) => {
    intersectionRef.current = node;
    imageElementRef.current = node;
    if (typeof setImageRef === 'function') {
      setImageRef(node);
    }
  };

  const imageClasses = [
    'lazy-image',
    className,
    isLoaded ? 'lazy-image--loaded' : 'lazy-image--loading',
    isError ? 'lazy-image--error' : ''
  ].filter(Boolean).join(' ');

  if (isError) {
    return (
      <div 
        ref={combinedRef}
        className={`${imageClasses} lazy-image--error-container`}
        style={{ width, height, ...style }}
        role="img"
        aria-label={alt}
      >
        <div className="lazy-image__error-content">
          <svg 
            className="lazy-image__error-icon"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            aria-hidden="true"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 14.5c-.77.833.192 2.5 1.732 2.5z" 
            />
          </svg>
          <span className="lazy-image__error-text">Failed to load image</span>
        </div>
      </div>
    );
  }

  return (
    <img
      ref={combinedRef}
      src={imageSrc}
      alt={alt}
      className={imageClasses}
      loading={loading}
      sizes={sizes}
      srcSet={isLoaded ? srcSet : undefined}
      style={style}
      width={width}
      height={height}
      {...props}
    />
  );
};

export default LazyImage;