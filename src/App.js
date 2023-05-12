import React from 'react';
import './App.css';
import './assets/css/wrap.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import TermsOfCondition from './pages/terms-of-condition';
import PrivacyPolicy from './pages/privacy-policy';

import './i18n';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

function App() {
  return (
    <React.Suspense fallback={loading}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms-of-condition" element={<TermsOfCondition />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
}

export default App;
