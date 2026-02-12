import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ConsultationPage from './components/ConsultationPage';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import NoCodeSystemDesign from './components/NoCodeSystemDesign';
import SystemAdministration from './components/SystemAdministration';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';
import ManagedAiChatbotsPage from './components/ManagedAiChatbotsPage';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/schedule-consultation" element={<ConsultationPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/no-code-system-design" element={<NoCodeSystemDesign />} />
        <Route path="/system-administration" element={<SystemAdministration />} />
        <Route path="/managed-ai-chatbots" element={<ManagedAiChatbotsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
