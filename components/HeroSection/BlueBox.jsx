'use client';
import React from 'react';
import './BlueBox.css';
import WhyChoose from './WhyChoose';
import AnimatedCard from './AnimatedCard';

const BlueBox = () => {
  return (
    <>
    
      <div className="blue-box-wrapper">
        <h2 className="blue-box-heading">This is the Blue Box Area</h2>

        <div className="blue-box-cards-container">
          <AnimatedCard>
            <div>
              <h3>Ask your question</h3>
              <p className="blue-box-description">
                Post your travel questions about a specific destination. Be as specific as possible to get the most relevant advice.
              </p>
            </div>
          </AnimatedCard>

          <AnimatedCard>
            <div>
              <h3>Get personalized advice</h3>
              <p className="blue-box-description">
                Receive personalized recommendations and insider tips from your local advisor, tailored to your preferences.
              </p>
            </div>
          </AnimatedCard>

          <AnimatedCard>
            <div>
              <h3>Connect with a local advisor</h3>
              <p className="blue-box-description">
               Our system matches you with vetted local advisors who have expertise in your area of interest and destination.
              </p>
            </div>
          </AnimatedCard>
        </div>
      </div>

      <WhyChoose />
    </>
  );
};

export default BlueBox;
