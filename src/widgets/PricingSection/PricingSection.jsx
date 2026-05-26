import './PricingSection.scss';

const plans = [
  {
    name: "Starter",
    price: 360,
    delivery: "Ready in 2 days",
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
    price: 600,
    delivery: "Ready in 3 days",
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
    price: 1000,
    delivery: "Ready in 5 days",
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

const CheckIcon = () => (
  <span className="plan-card__check">
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

const Card = ({ plan }) => {
  const { name, price, delivery, featured, features } = plan;

  return (
    <div className={`plan-card${featured ? " plan-card--featured" : ""}`}>
      {featured ? (
        <span className="plan-card__badge">Most popular</span>
      ) : (
        <div className="plan-card__badge-placeholder" />
      )}

      <p className="plan-card__tier">{name}</p>

      <div className="plan-card__price-row">
        <span className="plan-card__currency">$</span>
        <span className="plan-card__price">{price}</span>
      </div>

      <p className="plan-card__note">One-time · {delivery}</p>

      <div className="plan-card__divider" />

      <ul className="plan-card__features">
        {features.map((f, i) => (
          <li key={i} className="plan-card__feature">
            <CheckIcon />
            {f}
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="plan-card__cta"
        aria-label={`Get started with ${name} package`}
      >
        Let's talk
      </a>
    </div>
  );
};

export default function PricingSection() {
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
            <Card key={plan.name} plan={plan} />
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
}
