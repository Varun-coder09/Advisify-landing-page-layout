import React from 'react';
import Iridescence from './Iridescence';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <Iridescence
        color={[0.0, 0.501, 0.609]}
        mouseReact={false}
        amplitude={0.1}
        speed={1.0}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1
        }}
      />

      <div className="home-content">
        <h1 className="home-heading">
          <span className="heading-line1">
            See the <span className="highlight-word">world</span>
          </span>
          <span className="heading-line2">through local eyes</span>
        </h1>

        <p className="home-tagline">
          Real people. Real cities. Right when you need them.
        </p>

        <div className="home-buttons">
          <button className="home-btn-traveler">For Travelers</button>
          <button className="home-btn-advisor">Become an advisor</button>
        </div>
      </div>
    </div>
  );
}
