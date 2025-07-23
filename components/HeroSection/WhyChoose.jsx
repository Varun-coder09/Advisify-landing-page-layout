'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import './WhyChoose.css';
import LeaderShip from './LeaderShip';

const WhyChoose = () => {
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);

  useEffect(() => {
    const applyTilt = (imgWrapper) => {
      const image = imgWrapper.querySelector('img');

      const handleMove = (e) => {
        const bounds = imgWrapper.getBoundingClientRect();
        const x = e.clientX - bounds.left;
        const y = e.clientY - bounds.top;

        const centerX = bounds.width / 2;
        const centerY = bounds.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        image.style.transition = 'transform 0.1s ease';
      };

      const reset = () => {
        image.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
        image.style.transition = 'transform 0.3s ease';
      };

      imgWrapper.addEventListener('mousemove', handleMove);
      imgWrapper.addEventListener('mouseleave', reset);

      return () => {
        imgWrapper.removeEventListener('mousemove', handleMove);
        imgWrapper.removeEventListener('mouseleave', reset);
      };
    };

    const cleanupFns = [];
    if (img1Ref.current) cleanupFns.push(applyTilt(img1Ref.current));
    if (img2Ref.current) cleanupFns.push(applyTilt(img2Ref.current));

    return () => {
      cleanupFns.forEach((fn) => fn && fn());
    };
  }, []);

  return (
    <>
      <div className="why-background">
        <div className="why-container">
          <h2 className="why-heading">Why choose AdviSify</h2>
          <p className="why-subtext">
            AdviSify offers unique advantages that transform your travel experience.
          </p>

          <div className="why-row">
            <div className="why-col image-side">
              <div className="image-3d-wrapper" ref={img1Ref}>
                <Image src="/assets/choose.png" alt="Left Image" width={500} height={400} priority />
              </div>
            </div>
            <div className="why-col text-side">
              <h3>Authentic local expertise</h3>
              <p>
                Connect with trusted local advisors who live in your destination and
                share real-world advice that only locals can provide.
              </p>
              <ul>
                {[
                  ['Verified local advisors', 'Vetted locals with deep destination knowledge and no sales agendas.'],
                  ['Insider knowledge', 'Hidden spots, local events, and off-the-radar experiences.'],
                  ['Cultural insights', 'Gain deeper context in history, art, and cultural nuance.']
                ].map(([title, desc], i) => (
                  <li key={i}>
                    <img src="/assets/bluetick.svg" alt="icon" className="icon-left" />
                    <div className="text-wrapper">
                      <strong>{title}</strong>
                      <span>{desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="why-row reverse">
            <div className="why-col image-side">
              <div className="image-3d-wrapper" ref={img2Ref}>
                <Image src="/assets/choose1.png" alt="Right Image" width={500} height={400} />
              </div>
            </div>
            <div className="why-col text-side">
              <h3>Personalized recommendations</h3>
              <p>
                Get advice tailored to your specific interests, preferences, and
                travel style. Our system generates custom suggestions just for you.
              </p>
              <ul>
                {[
                  ['Tailored tour ideas', 'Discover experiences that match your passions.'],
                  ['Budget-conscious options', 'Get the most out of your budget, from luxury to economical.'],
                  ['Real-time updates', 'Access fresh local insights during your entire trip.']
                ].map(([title, desc], i) => (
                  <li key={i}>
                    <img src="/assets/bluetick.svg" alt="icon" className="icon-left" />
                    <div className="text-wrapper">
                      <strong>{title}</strong>
                      <span>{desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <LeaderShip />
    </>
  );
};

export default WhyChoose;
