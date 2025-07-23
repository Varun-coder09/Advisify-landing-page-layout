'use client';
import React, { useEffect, useState } from "react";
import "../HeroSection/LeaderShip.css";
import TravelLocal from "./TravelLocal";

const LeaderShip = () => {
  const [showTravelLocal, setShowTravelLocal] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowTravelLocal(true);
    }, 400);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <section className="leadership-wrapper">
        <div className="leadership-container">
          <h2 className="leadership-title">What our leadership says</h2>
          <p className="leadership-subtitle">
            Hear directly from our passionate leaders who are excited to share their vision, values, and
            this incredible journey with you.
          </p>

          <div className="leadership-content">
            <div className="leadership-left">
              <img
                src="/assets/leader.png"
                alt="Dr. Mariano Rodriguez"
                className="leader-image"
                loading="lazy"
              />
              <div className="leader-name">Dr. Mariano Rodriguez</div>
              <div className="leader-role">CEO & Founder</div>
            </div>

            <div className="leadership-right">
              <p className="leader-quote">
                We’re building something the travel world desperately needs: real, trusted, human guidance
                in real time. we’re not just another app. we’re a support system for people moving through
                the world. We are stepping into a market dominated by giants worth $170 billion (Booking.com)
                and $85 billion (Airbnb). And yet, we are set to surpass them in our niche—Concierge Services.
                That says a lot about the caliber of what we are building here.
              </p>

              <div className="leader-metrics">
                <div>
                  <strong>7.9%</strong><br />
                  <span>ROI business growth</span>
                </div>
                <div>
                  <strong>10%</strong><br />
                  <span>Business expanded</span>
                </div>
                <div>
                  <strong>24+</strong><br />
                  <span>Team member added</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showTravelLocal && <TravelLocal />}
    </>
  );
};

export default LeaderShip;
