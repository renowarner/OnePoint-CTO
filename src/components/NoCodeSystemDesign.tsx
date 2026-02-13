import './NoCodeSystemDesign.css';
import { Link } from 'react-router-dom';

const NoCodeSystemDesign = () => {
  return (
    <div className="vcto-page-container">
      <section className="vcto-hero">
        <div className="container">
          <h2 className="section-title">AI & Automation Integration</h2>
          <p className="vcto-intro">
            Synchronize your business operations into a single, automated engine. 
            Connect your tools, eliminate manual data entry, and scale without increasing headcount.
          </p>
        </div>
      </section>

      <section className="vcto-content">
        <div className="container">
          <div className="vcto-grid">
            <div className="vcto-text">
              <h3>Eliminate Technical Friction</h3>
              <p>
                Most businesses suffer from "SaaS Sprawl"—using dozens of tools that don't 
                talk to each other. I build the <strong>connective tissue</strong> between 
                your CRM, marketing, and operations platforms to ensure data flows 
                seamlessly across your organization.
              </p>
              
              <div className="vcto-pillars">
                <div className="pillar">
                  <h4>Workflow Automation</h4>
                  <p>I design and implement custom automations using Zapier, Make.com, and Python to handle repetitive tasks like lead routing, invoicing, and reporting.</p>
                </div>
                <div className="pillar">
                  <h4>AI Content & Operations</h4>
                  <p>Integrate Large Language Models (LLMs) into your internal workflows to automate content generation, data summarization, and customer sentiment analysis.</p>
                </div>
                <div className="pillar">
                  <h4>Unified System Roadmap</h4>
                  <p>Instead of a collection of "hacks," you get a documented, professional system architecture that grows with your business.</p>
                </div>
              </div>
            </div>

            <div className="vcto-sidebar">
              <div className="sidebar-card">
                <h4>Integration Focus</h4>
                <p className="sidebar-subtitle">Custom System Design</p>
                <ul>
                  <li>API & Webhook Optimization</li>
                  <li>CRM Synchronization</li>
                  <li>Automated Lead Capture</li>
                  <li>Custom Reporting Dashboards</li>
                  <li>Legacy System Connectivity</li>
                </ul>
                <Link to="/contact" className="btn btn-full">Build Your Roadmap</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NoCodeSystemDesign;
