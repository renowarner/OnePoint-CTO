import React, { useEffect, useRef, useState } from 'react';

interface HoneyBookWidgetProps {
  formId: string;
  companyId?: string; 
  children?: React.ReactNode;
  legacy?: boolean;
  suffix?: string;
  directLink?: string;
  fallbackText?: string;
  leadSource?: string;
}

const HoneyBookWidget: React.FC<HoneyBookWidgetProps> = ({ 
  formId, 
  companyId, 
  children, 
  legacy = false, 
  suffix = "1",
  directLink,
  fallbackText = "Trouble loading? Click here to open in a new window.",
  leadSource
}) => {
  const [isLocal, setIsLocal] = useState(false);
  const initialized = useRef(false);

  useEffect(() => {
    setIsLocal(window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

    try {
      const scriptId = 'hb-script-loader';
      const existingScript = document.getElementById(scriptId);
      if (existingScript) existingScript.remove();

      const script = document.createElement('script');
      script.id = scriptId;
      script.async = true;

      if (legacy) {
        // LEGACY EMBED LOGIC
        (window as any)._hb_params = (window as any)._hb_params || [];
        (window as any)._hb_params.push({
          ad_id: formId,
          company_id: companyId,
          type: 'scheduler' // or contact_form
        });
        script.src = 'https://www.honeybook.com/assets/js/widget_embed.js';
      } else {
        // MODERN EMBED LOGIC
        const w = window as any;
        w._HB_ = w._HB_ || {};
        w._HB_.pid = formId;
        script.src = "https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js";
      }

      document.body.appendChild(script);

    } catch (err) {
      console.error("HoneyBook Widget Injection Error:", err);
    }
  }, [formId, legacy, companyId]);

  return (
    <div className="hb-widget-card" style={{
      backgroundColor: '#112240',
      border: '1px solid #233554',
      borderRadius: '12px',
      padding: '20px',
      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4)',
      maxWidth: '1100px',
      width: '100%',
      margin: '0 auto',
      position: 'relative',
      minHeight: '600px'
    }}>
      {/* Loading Spinner */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 0
      }}>
        <div className="hb-spinner" style={{
          width: '40px',
          height: '40px',
          border: '4px solid rgba(0, 210, 255, 0.1)',
          borderLeftColor: '#00D2FF',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }} />
        <style>{`
          @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        `}</style>
      </div>

      <div className="hb-widget-container" style={{ width: '100%', minHeight: '600px', position: 'relative', zIndex: 1 }}>
        {/* Target div for Modern scripts */}
        <div className={`hb-p-${formId}-${suffix}`} />
        {/* Target div for Legacy scripts */}
        <div className={`hb-p-${formId}`} />
      
      {/* Tracking pixel */}
      <img 
        height="1" 
        width="1" 
        style={{ display: 'none' }} 
        src={`https://www.honeybook.com/p.png?pid=${formId}`} 
        alt=""
      />
      </div>

      {/* Render optional content (like the consultation link) inside the card */}
      {(children || directLink) && (
        <div style={{ marginTop: '30px', borderTop: '1px solid #233554', paddingTop: '20px', textAlign: 'center' }}>
          {children}
          {directLink && (
            <div style={{ marginTop: children ? '15px' : '0' }}>
              <a 
                href={directLink} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#00D2FF', textDecoration: 'none', fontSize: '0.9rem' }}
              >
                {fallbackText}
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HoneyBookWidget;
