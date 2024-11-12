import React from 'react';
import './App.css';
import baseimage from './pexels-creative-vix-7283.jpg'

import TopSection from './components/TopSection';

function App() {
  return (
    <div className="Home-Page">
      <TopSection />
      <img src={baseimage} className="baseimage" alt="logo" />
    </div>
  );
}

export default App;
