'use client';
import React, { memo } from 'react';
import './LocalCards.css';
import BlueBox from './BlueBox';

const Card = memo(({ icon, title, text, alt }) => (
  <div className="card">
    <div className="icon-container">
      <img src={icon} alt={alt} className="icon" loading="lazy" />
    </div>
    <h2 className="card-title">{title}</h2>
    <p className="card-text">{text}</p>
  </div>
));

const LocalCards = () => {
  const cardsData = [
    {
      icon: '/assets/ask.svg',
      title: 'Ask questions',
      text: 'Post your travel questions and get matched with the perfect local advisor.',
      alt: 'Ask Questions',
    },
    {
      icon: '/assets/connect.svg',
      title: 'Connect with locals',
      text: 'Chat with vetted local advisors who know their city inside and out.',
      alt: 'Connect with Locals',
    },
    {
      icon: '/assets/travel1.svg',
      title: 'Travel smarter',
      text: 'Discover hidden gems and experience destinations like a true local.',
      alt: 'Travel Smarter',
    },
  ];

  return (
    <>
      <div className="localcards-wrapper">
        <div className="localcards-box">
          <div className="content-container">
            <div className="hero-section">
              <h1 className="hero-title">
                Discover the world with local <br /> expertise
              </h1>
              <p className="hero-subtitle">
                AdviSify connects you with vetted local advisors who provide authentic
                insights and personalized recommendations for your travels.
              </p>
            </div>

            <div className="cards-grid">
              {cardsData.map((card, index) => (
                <Card
                  key={index}
                  icon={card.icon}
                  title={card.title}
                  text={card.text}
                  alt={card.alt}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <BlueBox />
    </>
  );
};

export default memo(LocalCards);
