'use client';
import React from 'react';
import './Price.css';
import checkIcon from '../../public/assets/tick.svg';
import oneIcon from '../../public/assets/shock1.svg';
import smartIcon from '../../public/assets/smart.svg';
import primeIcon from '../../public/assets/prime.svg';

const Price = () => {
  const cardData = [
    {
      icon: oneIcon,
      title: 'One-Time Pass',
      subtitle: 'Only pay for what you use',
      oldPrice: '',
      price: '$1.99',
      unit: 'per service',
      discount: '',
      features: ['Pay only when you use it', 'No commitment required', 'Instant access','Full advisor support'],
      buttonText: 'Pay Per Use',
      buttonStyle: 'light',
      isHighlighted: false,
      badge: null,
    },
    {
      icon: smartIcon,
      title: 'Smart Pass',
      subtitle: 'Best for casual users',
      oldPrice: '$2.49',
      price: '$1.49',
      unit: 'per service',
      discount: 'Save 40%',
      features: ['40% savings per service', 'Choose 5 or 10 services', 'Valid for 6 months','Priority support'],
      buttonText: 'Start with Smart Pass',
      buttonStyle: 'dark',
      isHighlighted: true,
      badge: 'Most Popular',
    },
    {
      icon: primeIcon,
      title: 'Prime Pass',
      subtitle: 'Perfect for power users',
      oldPrice: '$2.49',
      price: '$1.49',
      unit: 'per service',
      discount: 'Save 40%',
      features: ['60% savings per service', '10 services every month', 'Extra services discounted','VIP advisor access','Cancel anytime'],
      buttonText: 'Go Prime',
      buttonStyle: 'light',
      isHighlighted: false,
      badge: null,
    },
  ];

  return (
    <div className="price-wrapper">
      <div className="price-header">
         <div className="offer-badge">
          <img
    src="/assets/limit.svg"
    alt="Limited Time Offer Banner"
    className="offer-image"
  />
Limited Time Offer</div>
         
        <h1 className="price-title">
          Start Free. Then Choose What Works for You.
        </h1>
        <p className="price-subtitle">
          Everyone gets <span className="highlight-badge">5 free services</span> just for signing up. Ask anything, try it out, and upgrade when you're ready.
        </p>
      </div>

      <div className="free-offer-box">
       
        <div className="free-title">5 Free Services. Zero Risk.</div>
        <div className="free-subtitle">No credit card required. No hidden fees. Just sign up and start asking your local advisors anything you need to know.</div>
      </div>

      <div className="card-container">
        {cardData.map((card, index) => (
          <div
            className={`price-card ${card.isHighlighted ? 'highlighted' : ''}`}
            key={index}
          >
            {card.badge && (
              <div className="popular-badge">{card.badge}</div>
            )}
            <div className="card-content">
              <img src={card.icon.src} alt={`${card.title} icon`} />
              <div className="card-title">{card.title}</div>
              <div className="card-subtitle">{card.subtitle}</div>

              {/* Price Row */}
              <div className="card-price-row">
                {card.oldPrice && (
                  <div className="card-discount">{card.oldPrice}</div>
                )}
                <div className="card-price">
                  <span className="price-amount">{card.price}</span>
                  <span className="price-unit"> / {card.unit}</span>
                </div>
              </div>

              {/* Discount Text */}
              {card.discount && (
                <div className="price-note">
                  {card.discount}
                </div>
              )}
            </div>

            <ul className="card-features">
              {card.features.map((feature, i) => (
                <li key={i}>
                  <img src={checkIcon.src} alt="tick" />
                  {feature}
                </li>
              ))}
            </ul>

            <button className={`card-button ${card.buttonStyle}`}>
              {card.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Price;
