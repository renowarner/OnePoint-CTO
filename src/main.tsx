import { StrictMode, Component, ErrorInfo, ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { Analytics } from "@vercel/analytics/react"

class ErrorBoundary extends Component<{children: ReactNode}, {hasError: boolean}> {
  constructor(props: {children: ReactNode}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("CRITICAL APP ERROR:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', color: 'white', background: '#1e293b', height: '100vh' }}>
          <h1>Something went wrong.</h1>
          <p>The OnePoint CTO site encountered a runtime error. Please refresh the page.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

console.log("Main.tsx Mounting...");

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <Router>
        <App />
        <Analytics />
      </Router>
    </ErrorBoundary>
  </StrictMode>,
)
