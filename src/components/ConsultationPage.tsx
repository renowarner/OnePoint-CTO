import './ConsultationPage.css';
import HoneyBookWidget from './HoneyBookWidget';

const ConsultationPage = () => {
  return (
    <div className="consultation-page-container">
      <div className="container">
        <div className="consultation-content">
          <HoneyBookWidget 
            formId="6993e75040496000079b463b" 
            suffix="2"
            legacy={false}
            directLink="https://companyname384300.hbportal.co/public/discovery-consult"
            fallbackText="Trouble loading the scheduler? Click here to book directly."
          />
        </div>
      </div>
    </div>
  );
};

export default ConsultationPage;
