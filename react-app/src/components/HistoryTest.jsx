import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function HistoryTest() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Test browser history functionality
    const handlePopState = (event) => {
      console.log('Browser back/forward button pressed:', event.state);
    };

    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const testNavigation = () => {
    console.log('Current location:', location.pathname);
    console.log('History length:', window.history.length);
    console.log('History state:', window.history.state);
  };

  return (
    <div style={{ position: 'fixed', top: '10px', right: '10px', zIndex: 9999, background: 'rgba(0,0,0,0.8)', color: 'white', padding: '10px', borderRadius: '5px' }}>
      <button onClick={testNavigation} style={{ margin: '5px', padding: '5px' }}>
        Test History
      </button>
      <div style={{ fontSize: '12px' }}>
        Current: {location.pathname}
      </div>
    </div>
  );
}

export default HistoryTest;
