import { useEffect } from 'react';
import './ConsultationPage.css';

const ConsultationPage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="container">
      <div className="consultation-content">
        <div 
          className="calendly-inline-widget" 
          data-url="https://calendly.com/rdwarner/rwmeet?hide_event_type_details=1&hide_gdpr_banner=1" 
          style={{ minWidth: '320px', height: '700px' }} 
        />
      </div>
    </div>
  );
};

export default ConsultationPage;
