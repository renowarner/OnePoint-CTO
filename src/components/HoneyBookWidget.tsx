import React, { useEffect, useRef } from 'react';

interface HoneyBookWidgetProps {
  companyId: string;
  formId: string;
}

const HoneyBookWidget: React.FC<HoneyBookWidgetProps> = ({ companyId, formId }) => {
  useEffect(() => {
    console.log(`HoneyBookWidget (Legacy) mounting for form: ${formId}`);

    // Legacy HoneyBook Embed Logic
    (window as any)._hb_params = (window as any)._hb_params || [];
    (window as any)._hb_params.push({
      ad_id: formId,
      // company_id: companyId, // Commenting out as it might be causing issues if format is wrong
      type: 'contact_form'
    });

    const scriptId = 'honeybook-legacy-widget-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    if (!script) {
      console.log('Injecting Legacy HoneyBook script...');
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://www.honeybook.com/assets/js/widget_embed.js';
      script.async = true;
      document.body.appendChild(script);
    }

    return () => {
      // Cleanup: Remove params to prevent duplicates
      const params = (window as any)._hb_params;
      if (params) {
        const index = params.findIndex((p: any) => p.ad_id === formId);
        if (index > -1) {
          params.splice(index, 1);
        }
      }
    };
  }, [companyId, formId]);

  return (
    <div style={{ width: '100%', minHeight: '300px' }}>
      {/* 
        We provide multiple containers with different class suffixes.
        HoneyBook's legacy script typically looks for 'hb-p-{formId}-1' or just 'hb-p-{formId}'.
      */}
      <div className={`hb-p-${formId}-1`} />
      <div className={`hb-p-${formId}`} />
      
      {/* Fallback Button - Prominent for users where script is blocked */}
      <div className="hb-fallback" style={{ textAlign: 'center', marginTop: '2rem' }}>
        <p style={{ marginBottom: '1rem', color: '#8892B0' }}>
          Form taking a while? You can also:
        </p>
        <a 
          href={`https://www.honeybook.com/widget/${companyId}/cf_id/${formId}`} 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{
            display: 'inline-block',
            padding: '12px 30px',
            backgroundColor: 'transparent',
            border: '1px solid #00D2FF',
            color: '#00D2FF',
            borderRadius: '4px',
            textDecoration: 'none',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}
        >
          Open Form in New Tab
        </a>
      </div>
    </div>
  );
};

export default HoneyBookWidget;
