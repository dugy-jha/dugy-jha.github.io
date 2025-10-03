import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorBoundary from './components/ErrorBoundary';
import serviceWorkerManager from './utils/serviceWorker';
import performanceManager from './utils/performance';
import emailMarketingManager from './utils/emailMarketing';
import analyticsManager from './utils/analytics';
import seoManager from './utils/seo';
import { initializeAccessibility } from './utils/accessibility';
import './styles/App.css';
import './styles/HeroBackgrounds.css';
import './styles/Accessibility.css';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Mission = lazy(() => import('./pages/Mission'));
const Technology = lazy(() => import('./pages/Technology'));
const Roadmap = lazy(() => import('./pages/Roadmap'));
const Applications = lazy(() => import('./pages/Applications'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const Team = lazy(() => import('./pages/Team'));
const News = lazy(() => import('./pages/News'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Contact = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));
const Careers = lazy(() => import('./pages/Careers'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  useEffect(() => {
    console.log('App component mounted');
    
    // Initialize all managers safely
    try {
      serviceWorkerManager.register();
      performanceManager.initialize();
      analyticsManager.initialize();
      seoManager.initializeDefaultSEO();
      initializeAccessibility();
      
      // Track page visit
      emailMarketingManager.trackEngagement('page_visit');
      
      // Track performance metrics
      setTimeout(() => {
        const performanceSummary = performanceManager.getPerformanceSummary();
        analyticsManager.trackPerformance('page_load_time', performanceSummary.pageLoad);
      }, 2000);
    } catch (error) {
      console.error('Error initializing managers:', error);
    }
  }, []);

  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <Layout>
          <Suspense fallback={<LoadingSpinner text="Loading page..." />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/mission" element={<Mission />} />
              <Route path="/technology" element={<Technology />} />
              <Route path="/roadmap" element={<Roadmap />} />
              <Route path="/applications" element={<Applications />} />
              <Route path="/casestudies" element={<CaseStudies />} />
              <Route path="/team" element={<Team />} />
              <Route path="/news" element={<News />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </ErrorBoundary>
  );
}

export default App;