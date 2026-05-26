import { useState, useRef, useEffect } from "react";
import "./ProcessSection.scss";

const steps = [
  {
    number: "01",
    title: "Discovery call",
    duration: "30–60 min",
    description:
      "We talk about your business, your goals, and who you're trying to reach. I ask questions — you just tell me what you need.",
    deliverable: "Brief + site structure",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Design & prototype",
    duration: "2–3 days",
    description:
      "You see exactly how the site will look before a single line of code is written. We review it together and refine until it's right.",
    deliverable: "Approved design mockup",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Development",
    duration: "3–5 days",
    description:
      "I build the site and keep you in the loop with progress updates. Nothing happens silently — you're always in the picture.",
    deliverable: "Live preview on staging",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Launch & handover",
    duration: "1 day",
    description:
      "Your site goes live on your domain. I hand over all access and walk you through how to make simple edits yourself.",
    deliverable: "Live site + full access",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    ),
  },
];

function StepCard({ step, index, isActive, onClick }) {
  return (
    <div
      className={`step-card ${isActive ? "step-card--active" : ""}`}
      onClick={() => onClick(index)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick(index)}
      aria-expanded={isActive}
    >
      <div className="step-card__header">
        <span className="step-card__number">{step.number}</span>
        <span className="step-card__duration">{step.duration}</span>
      </div>

      <div className="step-card__body">
        <div className="step-card__title-row">
          <span className="step-card__icon" aria-hidden="true">{step.icon}</span>
          <h3 className="step-card__title">{step.title}</h3>
        </div>

        <div className={`step-card__details ${isActive ? "step-card__details--visible" : ""}`}>
          <p className="step-card__desc">{step.description}</p>
          <div className="step-card__deliverable">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>{step.deliverable}</span>
          </div>
        </div>
      </div>

      <div className="step-card__indicator" aria-hidden="true" />
    </div>
  );
}

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleStepClick = (index) => {
    setActiveStep((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className={`process-section ${visible ? "process-section--visible" : ""}`} ref={sectionRef}>
      <div className="process-section__inner">

        <header className="process-section__header">
          <p className="process-section__eyebrow">How it works</p>
          <h2 className="process-section__heading">
            From idea to live site —<br />
            <span className="process-section__heading-accent">no guesswork.</span>
          </h2>
          <p className="process-section__subheading">
            A clear, four-step process so you always know what's happening and what comes next.
          </p>
        </header>

        <div className="process-section__track">
          <div className="process-section__line" aria-hidden="true">
            <div
              className="process-section__line-fill"
              style={{ height: `${((activeStep + 1) / steps.length) * 100}%` }}
            />
          </div>

          <div className="process-section__steps">
            {steps.map((step, i) => (
              <StepCard
                key={step.number}
                step={step}
                index={i}
                isActive={activeStep === i}
                onClick={handleStepClick}
              />
            ))}
          </div>
        </div>

        <div className="process-section__footer">
          <p className="process-section__footer-note">
            Most projects are live within a week.
          </p>
          <button className="process-section__cta">
            Book a free call
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
