'use client';
import React from 'react';
import './HeroSection.css';
import LocalCards from './LocalCards';

const HeroSection = () => {
  return (
    <div className="heroWrapper">
      <h1 className="heroText">
        <p>Travel smart</p>
        <div className="exploreLine">
          <span>Explore</span>
          <span className="videoText">
            <video
              src="/assets/travel2.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="none"
            />
          </span>
          <span>deeper</span>
        </div>
        <p>Connect with</p>
        <p>locals.</p>
      </h1>
      <LocalCards />
    </div>
  );
};

export default HeroSection;
