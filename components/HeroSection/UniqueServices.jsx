'use client';
import React, { useEffect, useRef, useState } from 'react';
import './UniqueServices.css';

const UniqueServices = () => {
  const cardData = [
    {
      icon: "/assets/travel.svg",
      title: "Travel Planning",
      desc: "Flying into NYC next week? We'll create your full itinerary and book it all — just ask",
    },
    {
      icon: "/assets/local.svg",
      title: "Local Shopping",
      desc: "Need to find a halal butcher, Latin grocery store, or vegan bakery near you? We'll point you in the right direction.",
    },
    {
      icon: "/assets/dining.svg",
      title: "Dining",
      desc: "Need a last-minute table at a hidden gem in Brooklyn? We've got you.",
    },
    {
      icon: "/assets/special.svg",
      title: "Special Events",
      desc: "Want to plan the perfect proposal in Central Park, helicopter and all? Let's make it unforgettable.",
    },
    {
      icon: "/assets/chef.svg",
      title: "Chef Recommendations",
      desc: "Where do NYC's top chefs eat? We know. Ask about our Chef's Table Off-Duty.",
    },
    {
      icon: "/assets/latenight.svg",
      title: "Late Night Eats",
      desc: "Craving street food at 2 AM? We'll tell you where to go and what to order.",
    },
    {
      icon: "/assets/accomo.svg",
      title: "Accommodation",
      desc: "Your Airbnb host ghosted you? We'll find a better place — fast.",
    },
    {
      icon: "/assets/personal.svg",
      title: "Personal Care",
      desc: "Looking for a haircut that won't ruin your trip pics? We know where to send you.",
    },
    {
      icon: "/assets/social.svg",
      title: "Social Connections",
      desc: "Trying to meet people through events or local groups? We'll open the right doors.",
    },
    {
      icon: "/assets/professional.svg",
      title: "Professional Services",
      desc: "Looking for a pediatrician, dentist, or plumber you can trust in your new neighborhood? We know someone.",
    },
    {
      icon: "/assets/fine.svg",
      title: "Fine Dining",
      desc: "Looking for the best restaurant nearby? We've got the full Michelin list — and we'll tell you which one's closest.",
    },
  ];

  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const animationRef = useRef(null);
  const lastScrollTimeRef = useRef(Date.now());

  useEffect(() => {
    let timeout;

    const scroll = () => {
      const now = Date.now();
      if (now - lastScrollTimeRef.current >= 2500) {
        if (sliderRef.current) {
          const nextIndex = (activeIndex + 1) % cardData.length;
          const cardWidth = sliderRef.current.children[0].offsetWidth + 32;

          sliderRef.current.scrollTo({
            left: nextIndex * cardWidth - sliderRef.current.offsetWidth / 2 + cardWidth / 2,
            behavior: 'smooth',
          });

          setActiveIndex(nextIndex);
          lastScrollTimeRef.current = now;
        }
      }
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationRef.current);
      clearTimeout(timeout);
    };
  }, [activeIndex]);

  return (
    <div className="unique-services-wrapper">
      <h2 className="unique-services-title">What Can You Ask a Local Advisor?</h2>
      <p className="unique-services-subtitle">Just About Anything!</p>

      <div className="unique-services-cards-slider" ref={sliderRef}>
        {cardData.map((card, index) => (
          <div
            className={`unique-services-card ${index === activeIndex ? 'active' : ''}`}
            key={index}
          >
            <div className="card-header">
              <div className="icon-circle">
                <img src={card.icon} alt={card.title} />
              </div>
              <h3 className="card-title">{card.title}</h3>
            </div>
            <p className="card-desc">{card.desc}</p>
            <button className="ask-now-btn">Ask Now</button>
          </div>
        ))}
      </div>

      <div className="unique-carousel-dots">
        {cardData.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? 'active-dot' : ''}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default UniqueServices;
