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
          />
        </div>
      </div>
    </div>
  );
};

export default ConsultationPage;
