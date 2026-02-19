import './ConsultationPage.css';
import HoneyBookWidget from './HoneyBookWidget';

const ConsultationPage = () => {
  return (
    <div className="consultation-page-container">
      <div className="container">
        <div className="consultation-content">
          <HoneyBookWidget 
            formId="69968c6b1304000028b011ef" 
            companyId="one_point_cto_297144"
            legacy={true}
          />
        </div>
      </div>
    </div>
  );
};

export default ConsultationPage;
