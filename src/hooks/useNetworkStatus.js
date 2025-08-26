import { useState, useEffect, useCallback } from 'react';

// Hook for detecting network status
export const useNetworkStatus = () => {
  const [isOnline, setIsOnline] = useState(
    typeof navigator !== 'undefined' ? navigator.onLine : true
  );
  const [connectionInfo, setConnectionInfo] = useState(null);
  const [isSlowConnection, setIsSlowConnection] = useState(false);

  useEffect(() => {
    // Network status change handlers
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    // Connection information handler
    const updateConnectionInfo = () => {
      if ('connection' in navigator) {
        const connection = navigator.connection;
        const info = {
          effectiveType: connection.effectiveType,
          downlink: connection.downlink,
          rtt: connection.rtt,
          saveData: connection.saveData
        };
        
        setConnectionInfo(info);
        
        // Determine if connection is slow
        const slowConnection = 
          connection.effectiveType === 'slow-2g' ||
          connection.effectiveType === '2g' ||
          connection.downlink < 1.5 ||
          connection.rtt > 400 ||
          connection.saveData;
          
        setIsSlowConnection(slowConnection);
      }
    };

    // Add event listeners
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Network information API
    if ('connection' in navigator) {
      const connection = navigator.connection;
      connection.addEventListener('change', updateConnectionInfo);
      updateConnectionInfo(); // Initial call
    }

    // Cleanup
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      
      if ('connection' in navigator) {
        navigator.connection.removeEventListener('change', updateConnectionInfo);
      }
    };
  }, []);

  return {
    isOnline,
    isOffline: !isOnline,
    connectionInfo,
    isSlowConnection,
    connectionType: connectionInfo?.effectiveType || 'unknown',
    downlink: connectionInfo?.downlink || 0,
    rtt: connectionInfo?.rtt || 0,
    saveData: connectionInfo?.saveData || false
  };
};

// Hook for handling offline functionality
export const useOfflineStorage = (key, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return defaultValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue];
};

// Hook for managing offline queue
export const useOfflineQueue = () => {
  const [queue, setQueue] = useOfflineStorage('offlineQueue', []);
  const { isOnline } = useNetworkStatus();

  const addToQueue = (action) => {
    const queueItem = {
      id: Date.now() + Math.random(),
      action,
      timestamp: new Date().toISOString(),
      retryCount: 0,
      maxRetries: 3
    };
    
    setQueue(prevQueue => [...prevQueue, queueItem]);
  };

  const processQueue = useCallback(async () => {
    if (!isOnline || queue.length === 0) return;

    const processedItems = [];
    
    for (const item of queue) {
      try {
        await item.action();
        processedItems.push(item.id);
      } catch (error) {
        console.warn('Failed to process queue item:', error);
        
        // Update retry count
        setQueue(prevQueue => 
          prevQueue.map(queueItem => 
            queueItem.id === item.id 
              ? { ...queueItem, retryCount: queueItem.retryCount + 1 }
              : queueItem
          )
        );
      }
    }

    // Remove successfully processed items and items that exceeded max retries
    setQueue(prevQueue => 
      prevQueue.filter(item => 
        !processedItems.includes(item.id) && 
        item.retryCount < item.maxRetries
      )
    );
  }, [isOnline, queue, setQueue]);

  // Process queue when coming back online
  useEffect(() => {
    if (isOnline) {
      processQueue();
    }
  }, [isOnline, processQueue]);

  const clearQueue = () => setQueue([]);
  
  return {
    queue,
    addToQueue,
    processQueue,
    clearQueue,
    queueSize: queue.length
  };
};