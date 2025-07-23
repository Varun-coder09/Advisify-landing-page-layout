'use client';
import React from "react";
import "./TravelLocal.css";
import UniqueServices from "./UniqueServices";

const TravelLocal = () => {
  const cards = [
    { src: "/assets/local4.webp", tag: "Traveler" },
    { src: "/assets/local5.webp", tag: "Local Advisor" },
    { src: "/assets/local6.webp", tag: "Local Advisor" },
  ];

  return (
    <>
      <div className="travel-wrapper">
        <div className="travel-local-section">
          <h2 className="travel-title">Travel Like a Local</h2>
          <p className="travel-subtitle">
            Connect with verified local advisors who know the hidden gems, authentic experiences, <br />
            and insider tips that make every trip unforgettable.
          </p>
          <div className="travel-buttons">
            <button className="explore-btn">Start Exploring</button>
            <button className="advisor-btn">Become an Advisor</button>
          </div>

          <div className="travel-cards-scroll">
            <div className="travel-cards-track">
              {[...cards, ...cards].map((card, index) => (
                <div className="travel-card" key={index}>
                  <img src={card.src} alt={card.tag} />
                  <span className="tag">{card.tag}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="travel-pagination">
            <span className="dot active"></span>
          </div>
        </div>
      </div>
      <UniqueServices />
    </>
  );
};

export default TravelLocal;
