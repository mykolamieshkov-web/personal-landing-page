import { useEffect, useState } from 'react';
import './PricingSection.scss';

const plans = [
  {
    name: "Starter",
    price: 360,
    delivery: "Ready in 5 days",
    featured: false,
    features: [
      "Your existing design, built and live online",
      "Looks great on phone and desktop",
      "Fast loading — visitors don't wait",
      "1 round of changes after delivery",
    ],
  },
  {
    name: "Growth",
    price: 599,
    delivery: "Ready in 7 days",
    featured: true,
    features: [
      "A page designed to turn visitors into customers",
      "Works perfectly on any device",
      "Shows up when people search for your business",
      "Online and ready — domain included",
      "2 rounds of changes after delivery",
    ],
  },
  {
    name: "Full package",
    price: 999,
    delivery: "Ready in 10 days",
    featured: false,
    features: [
      "Everything in Growth",
      "Words written to sell — not just describe",
      "You see exactly how many people visit and why",
      "Customers can contact you directly from the page",
      "3 rounds of changes after delivery",
    ],
  },
];

const trustItems = [
  "One flat price, no surprises",
  "You own the page forever",
  "Delivery on time, guaranteed",
  "Invoice sent before work starts",
];

const DESKTOP_QUERY = '(min-width: 769px)';

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(DESKTOP_QUERY).matches
  );

  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_QUERY);
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return isDesktop;
}

const CheckIcon = () => (
  <span className="plan-card__check" aria-hidden="true">
    <svg width="8" height="8" viewBox="0 0 10 10">
      <polyline
        className="plan-card__check-icon"
        points="2,5 4,7 8,3"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

const FeatureList = ({ features }) => (
  <ul className="plan-card__features">
    {features.map((f, i) => (
      <li key={i} className="plan-card__feature">
        <CheckIcon />
        {f}
      </li>
    ))}
  </ul>
);

const Card = ({ plan, isDesktop }) => {
  const { name, price, delivery, featured, features } = plan;
  const [detailsOpen, setDetailsOpen] = useState(false);
  const showFeatures = isDesktop || detailsOpen;

  return (
    <article className={`plan-card${featured ? ' plan-card--featured' : ''}`}>
      <header className="plan-card__head">
        <div className="plan-card__badge-row">
          {featured ? (
            <span className="plan-card__badge">Most popular</span>
          ) : (
            <span className="plan-card__badge plan-card__badge--placeholder" aria-hidden="true" />
          )}
        </div>

        <div className="plan-card__head-row">
          <div className="plan-card__identity">
            <p className="plan-card__tier">{name}</p>
            <p className="plan-card__note">One-time · {delivery}</p>
          </div>

          <div className="plan-card__price-row">
            <span className="plan-card__currency">$</span>
            <span className="plan-card__price">{price}</span>
          </div>
        </div>
      </header>

      {isDesktop ? (
        <div className="plan-card__body">
          <FeatureList features={features} />
        </div>
      ) : (
        <details
          className="plan-card__details"
          open={showFeatures}
          onToggle={(e) => setDetailsOpen(e.currentTarget.open)}
        >
          <summary className="plan-card__summary">
            <span>What&apos;s included</span>
            <span className="plan-card__summary-count">{features.length} items</span>
          </summary>
          <div className="plan-card__body">
            <div className="plan-card__expand">
              <FeatureList features={features} />
            </div>
          </div>
        </details>
      )}

      <a
        href="#contact"
        className="plan-card__cta"
        aria-label={`Get started with ${name} package`}
      >
        Let&apos;s proceed
      </a>
    </article>
  );
};

export default function PricingSection() {
  const isDesktop = useIsDesktop();

  return (
    <section className="pricing">
      <div className="pricing__inner">

        <p className="pricing__eyebrow">Pricing</p>
        <h2 className="pricing__title">
          Pick what your<br />business needs.
        </h2>
        <p className="pricing__subtitle">
          One flat price. You get a page that works. No monthly bills,
          no hidden costs, no technical headaches.
        </p>

        <div className="pricing__grid">
          {plans.map((plan) => (
            <Card key={plan.name} plan={plan} isDesktop={isDesktop} />
          ))}
        </div>

        <div className="pricing__trust">
          {trustItems.map((item, i) => (
            <span key={i} className="pricing__trust-item">{item}</span>
          ))}
        </div>

      </div>
    </section>
  );
};
