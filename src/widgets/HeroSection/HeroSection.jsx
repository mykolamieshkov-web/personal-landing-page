import React, { useState } from 'react';
import './HeroSection.scss';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-section__container">
        <div className="hero-section__layout--row">
          <div className="hero-section__text">
            <div className="hero-section__layout">
              <div className="hero-section__title">
                <h1>Landing Pages for Local <br/> Businesses</h1>
              </div>
              <div className="hero-section__subtile">
                <p> Display your services, pricing, reviews, and contact details in one place, <br /> so visitors can become customers faster.</p>
              </div>
              <div className="hero-section__cta__layout--row">
                <a className="process-section__cta" href="#price">View Pricing</a>
                <a href="#portfolio" className="hero-section__button--decoration process-section__cta" >Explore Portfolio</a>
              </div>
            </div>
          </div>
          <div className="hero-section__decoration">
          <video
              width={356}
          height={418}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="hero__video"
          disablePictureInPicture
        >
          <source src="vid/hero_01.webm" type="video/webm" />

        </video>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;