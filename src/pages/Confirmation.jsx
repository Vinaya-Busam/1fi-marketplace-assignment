import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

function Confirmation() {
  const location = useLocation();
  const [confirmed, setConfirmed] = useState(false);

  const {
    product,
    variant,
    plan,
  } = location.state || {};

  if (!product || !plan) {
    return (
      <div className="simple-page">
        <header className="simple-header">
          <NavLink to="/marketplace" className="back-button">
            ←
          </NavLink>

          <h1>Order Summary</h1>
        </header>

        <div className="empty-state">
          <h2>Nothing to confirm</h2>

          <p>
            Please select a product and EMI plan first.
          </p>

          <NavLink
            to="/marketplace"
            className="retry-button"
          >
            Go to Marketplace
          </NavLink>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container confirmation-page">

      <header className="simple-header">
        <NavLink
          to={`/marketplace/product/${product.id}`}
          className="back-button"
        >
          ←
        </NavLink>

        <h1>Order Summary</h1>
      </header>

      <main className="confirmation-content">

        <div className="confirmation-success">
          <div className="success-icon">✓</div>

          <h2>Ready to proceed!</h2>

          <p>
            Review your product and EMI selection
            before continuing.
          </p>
        </div>

        {/* Product */}
        <section className="summary-card">

          <h3>Product</h3>

          <div className="summary-product">

            <div className="summary-image">
              <img
                src={product.image}
                alt={product.name}
              />
            </div>

            <div className="summary-product-info">

              <span>{product.category}</span>

              <h2>{product.name}</h2>

              <strong>
                ₹{product.price.toLocaleString("en-IN")}
              </strong>

            </div>

          </div>

        </section>

        {/* Variant */}
        <section className="summary-card">

          <h3>Selected Variant</h3>

          <div className="summary-row">

            <span>Color</span>

            <strong>
              {variant?.color || "Standard"}
            </strong>

          </div>

          {variant?.storage && (
            <div className="summary-row">

              <span>Storage</span>

              <strong>
                {variant.storage}
              </strong>

            </div>
          )}

          {variant?.price && (
            <div className="summary-row">

              <span>Variant Price</span>

              <strong>
                ₹{variant.price.toLocaleString("en-IN")}
              </strong>

            </div>
          )}

        </section>

        {/* EMI */}
        <section className="summary-card">

          <h3>Selected EMI Plan</h3>

          <div className="emi-summary">

            <div>
              <span>Tenure</span>

              <strong>
                {plan.duration} months
              </strong>
            </div>

            <div>
              <span>Monthly EMI</span>

              <strong>
                ₹{plan.monthlyAmount.toLocaleString("en-IN")}
              </strong>
            </div>

            <div>
              <span>Total Amount</span>

              <strong>
                ₹{plan.totalAmount.toLocaleString("en-IN")}
              </strong>
            </div>

          </div>

          <div className="no-cost-badge">
            ✓ {plan.label}
          </div>

        </section>

        <div className="confirmation-note">
          <strong>No-cost EMI</strong>

          <p>
            This is a demo confirmation flow for the
            1Fi Marketplace assignment. No real payment
            will be processed.
          </p>
        </div>

        <button
            className="confirm-button"
            onClick={() => setConfirmed(true)}
            >
            Confirm & Continue
        </button>
        
        {confirmed && (
            <div className="order-success">
                <div className="success-icon">✓</div>

                <h3>Order confirmed successfully!</h3>

                <p>
                Your {plan.duration}-month no-cost EMI selection
                has been confirmed.
                </p>

                <NavLink
                to="/marketplace"
                className="back-to-marketplace"
                >
                Continue Shopping
                </NavLink>
            </div>
            )}

            {!confirmed && (
            <NavLink
                to={`/marketplace/product/${product.id}`}
                className="edit-selection"
            >
                ← Change selection
            </NavLink>
        )}


        {/* <NavLink
          to={`/marketplace/product/${product.id}`}
          className="edit-selection"
        >
          ← Change selection
        </NavLink> */}

      </main>

    </div>
  );
}

export default Confirmation;