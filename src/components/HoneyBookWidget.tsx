import React, { useEffect, useRef, useState } from 'react';

interface HoneyBookWidgetProps {
  formId: string;
}

const HoneyBookWidget: React.FC<HoneyBookWidgetProps> = ({ formId }) => {
  const [isLocal, setIsLocal] = useState(false);
  const initialized = useRef(false);

  useEffect(() => {
    setIsLocal(window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

    // Prevent React Strict Mode from running this twice
    if (initialized.current) return;
    initialized.current = true;

    try {
      // 1. Initialize Global Object safely
      const w = window as any;
      w._HB_ = w._HB_ || {};
      w._HB_.pid = formId;

      // 2. Check if script already exists to avoid duplicates
      const scriptId = 'hb-placement-controller';
      if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = "https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js";
        script.async = true;
        
        // 3. Append safely to body
        document.body.appendChild(script);
      }
    } catch (err) {
      console.error("HoneyBook Widget Injection Error:", err);
    }
  }, [formId]);

  return (
    <div className="hb-widget-card" style={{
      backgroundColor: '#112240',
      border: '1px solid #233554',
      borderRadius: '12px',
      padding: '40px',
      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4)',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <div className="hb-widget-container" style={{ width: '100%', minHeight: '600px', position: 'relative' }}>
        {/* Target div for the HoneyBook script */}
        <div className={`hb-p-${formId}-1`} />
      
      {/* Tracking pixel */}
      <img 
        height="1" 
        width="1" 
        style={{ display: 'none' }} 
        src={`https://www.honeybook.com/p.png?pid=${formId}`} 
        alt=""
      />
      </div>
    </div>
  );
};

export default HoneyBookWidget;
