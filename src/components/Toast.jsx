import { useState, useEffect } from 'react';
import './Toast.css';

function Toast() {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const handleShowToast = (e) => {
      const id = Date.now();
      const newToast = {
        id,
        message: e.detail.message
      };

      setToasts(prev => [...prev, newToast]);

      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== id));
      }, 3000);
    };

    window.addEventListener('show-toast', handleShowToast);
    return () => window.removeEventListener('show-toast', handleShowToast);
  }, []);

  return (
    <div className="toast-container">
      {toasts.map(toast => (
        <div key={toast.id} className="toast">
          {toast.message}
        </div>
      ))}
    </div>
  );
}

export default Toast;
