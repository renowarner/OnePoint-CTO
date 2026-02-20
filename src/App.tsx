import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ConsultationPage from './components/ConsultationPage';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import SystemIntegration from './components/SystemIntegration';
import SystemAdministration from './components/SystemAdministration';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';
import ManagedAiChatbotsPage from './components/ManagedAiChatbotsPage';
import WebPresenceGrowth from './components/WebPresenceGrowth';
import BlogPage from './components/BlogPage';
import BlogPost from './components/BlogPost';
import AIChatbot from './components/AIChatbot';
import ThankYouPage from './components/ThankYouPage';
import ConsultationThankYouPage from './components/ConsultationThankYouPage';
import LinkedInPage from './components/LinkedInPage';
import CraigslistPage from './components/CraigslistPage';
import HubTemplate from './components/HubTemplate';
import HubProductPage from './components/HubProductPage';
import FoundationPackagePage from './components/FoundationPackagePage';
import AuditPage from './components/AuditPage';
import VirtualCTOPage from './components/VirtualCTOPage';

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

  const isHubPage = location.pathname.startsWith('/hub/');

  return (
    <>
      {!isHubPage && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/schedule-consultation" element={<ConsultationPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/system-integration" element={<SystemIntegration />} />
        <Route path="/system-administration" element={<VirtualCTOPage />} />
        <Route path="/virtual-cto" element={<VirtualCTOPage />} />
        <Route path="/audit" element={<AuditPage />} />
        <Route path="/managed-ai-chatbots" element={<ManagedAiChatbotsPage />} />
        <Route path="/web-presence-growth" element={<WebPresenceGrowth />} />
        <Route path="/foundation-package" element={<FoundationPackagePage />} />
        <Route path="/onepoint-hub" element={<HubProductPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/consultation-thank-you" element={<ConsultationThankYouPage />} />
        <Route path="/linkedin" element={<LinkedInPage />} />
        <Route path="/craigslist" element={<CraigslistPage />} />
        <Route path="/hub/template" element={<HubTemplate />} />
      </Routes>
      {!isHubPage && <Footer />}
      <AIChatbot />
    </>
  );
}

export default App;
