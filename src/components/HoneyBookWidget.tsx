import React, { useEffect } from 'react';

interface HoneyBookWidgetProps {
  formId: string;
}

const HoneyBookWidget: React.FC<HoneyBookWidgetProps> = ({ formId }) => {
  useEffect(() => {
    // 1. Set the global HoneyBook ID
    const w = window as any;
    w._HB_ = w._HB_ || {};
    w._HB_.pid = formId;

    // 2. Inject the modern placement controller script
    const scriptId = 'hb-placement-controller';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = "https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js";
      script.async = true;
      document.body.appendChild(script);
    }

    return () => {
      // Cleanup is usually not required for this specific script as it manages its own state,
      // but we leave the script tag to avoid re-downloading on every navigation.
    };
  }, [formId]);

  return (
    <div className="hb-widget-wrapper" style={{ width: '100%', minHeight: '600px' }}>
      {/* Target div for the HoneyBook script */}
      <div className={`hb-p-${formId}-1`} />
      
      {/* Tracking pixel (as included in your snippet) */}
      <img 
        height="1" 
        width="1" 
        style={{ display: 'none' }} 
        src={`https://www.honeybook.com/p.png?pid=${formId}`} 
        alt=""
      />
    </div>
  );
};

export default HoneyBookWidget;
