import React, { useEffect, useRef, useState } from "react";
import "./Review.css";

const reviewData = [
  {
    stars: "★★★★☆",
    text: "““hI was completely lost my first day in NYC. My Local Advisor not only helped me find my hotel — she also told me where to eat like a local. Game-changer.” ”",
    avatar: "https://i.imgur.com/HpF4lYw.png",
    name: " Julia",
    position: "traveler from Spain",
  },
  {
    stars: "★★★★☆",
    text: "““I’ve lived here for years, but AdviSify helped me discover restaurants I never knew existed. Now I use it to book everything.” ”",
    avatar: "https://i.imgur.com/TS1tD8p.png",
    name: " Derrick",
    position: "Brooklyn resident",
  },
  {
    stars: "★★★★☆",
    text: "“Being a Local Advisor allows me to earn by helping others enjoy my city. It’s more than a job — it’s personal”",
    avatar: "https://i.imgur.com/TS1tD8p.png",
    name: " Ana",
    position: "Local Advisor in Manhattan",
  },
  {
    stars: "★★★★☆",
    text: "“My flight was delayed, my Airbnb canceled, and I was stressed. AdviSify found me a new place, got me a ride, and booked me dinner — all in 30 minutes.”",
    avatar: "https://i.imgur.com/TS1tD8p.png",
    name: "Samuel",
    position: "traveler from Brazil",
  },
  {
    stars: "★★★★☆",
    text: "“I’m a single mom. Thanks to AdviSify, I found a reliable babysitter and a Spanish-speaking dentist nearby. No stress, no wasted time.”",
    avatar: "https://i.imgur.com/TS1tD8p.png",
    name: " Camila",
    position: "NYC resident from Mexico",
  },
];

const Review = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const cardWidth = 430;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const totalCards = reviewData.length;

    const interval = setInterval(() => {
      if (!container) return;

      let nextIndex = (activeIndex + 1) % totalCards;
      setActiveIndex(nextIndex);

      container.scrollTo({
        left: nextIndex * cardWidth,
        behavior: "smooth",
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="review-section">
      <div className="review-heading">
        <h1>Unique Local Services</h1>
        <p>
          Access authentic experiences you won't find in guidebooks. Our local advisors offer personalized services tailored to your interests.
        </p>
      </div>
      <div className="review-main-container" ref={containerRef}>
        {reviewData.map((review, index) => (
          <div
            key={index}
            className={`review-card ${
              index === activeIndex
                ? "active review-blue-card"
                : "inactive review-white-card"
            }`}
          >
            <div className="review-stars">{review.stars}</div>
            <p className="review-text">{review.text}</p>
            <div className="review-footer">
              <img
                className="review-avatar"
                src={review.avatar}
                alt={review.name}
              />
              <div className="review-info">
                <div className="review-name">{review.name}</div>
                <div className="review-position">{review.position}</div>
              </div>
              <div className="review-arrow">
                <span>
                  <img src="/assets/arrow.svg" alt="icon" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
