import React from 'react';
import './App.css';
import Navbar from '../src/components/Navbar'
import Footer from './components/Footer';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="home">
      <Navbar></Navbar>
      <header className="hero">
        <div className="hero-content">
          <h1>Verify Smart Contracts with Confidence</h1>
          <p>Ensure the security and integrity of your blockchain smart contracts.</p>
          <button className="cta-button"><Link to="/upload">Get Started</Link></button>
          
        </div>
      </header>

      <section className="features">
        <div className="feature">
          <h2>Transparent Analysis</h2>
          <p>Gain insights into the inner workings of your smart contracts through detailed analysis reports.</p>
        </div>
        <div className="feature">
          <h2>Security Audits</h2>
          <p>Identify vulnerabilities and potential risks in your smart contracts with thorough security audits.</p>
        </div>
        <div className="feature">
          <h2>User-Friendly Interface</h2>
          <p>Our platform offers an intuitive interface for easy interaction and understanding of your contract's code.</p>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default App;
