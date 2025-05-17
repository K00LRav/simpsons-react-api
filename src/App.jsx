import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import { initAnalytics, trackPageView } from './utils/analytics';

function App() {
  
  useEffect(() => {
    // Initialize Vercel Analytics
    initAnalytics();
    
    // Track page visit
    trackPageView('homepage');
  }, []);

  return (
    <div className="App">
      {/* Springfield Clouds Background */}
      <img src="/cloud.svg" alt="" className="cloud cloud1" aria-hidden="true" />
      <img src="/cloud.svg" alt="" className="cloud cloud2" aria-hidden="true" />
      <img src="/cloud.svg" alt="" className="cloud cloud3" aria-hidden="true" />
      
      <Header />
      <HomePage />
      <Footer />
    </div>
  )
}

export default App
