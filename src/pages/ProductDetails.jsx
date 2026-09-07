import { useEffect, useState } from "react";
import {
  NavLink,
  useNavigate,
  useParams,
} from "react-router-dom";

import BottomNavigation from "../components/BottomNavigation";
import { getProductById } from "../services/productService";
import { getEmiPlans } from "../services/emiService";

function ProductDetails() {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [emiPlans, setEmiPlans] = useState([]);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadProductDetails();
  }, [productId]);

  async function loadProductDetails() {
    try {
      setLoading(true);
      setError("");

      const productData = await getProductById(productId);
      const plansData = await getEmiPlans(productId);

      setProduct(productData);
      setEmiPlans(plansData);

      if (productData.variants?.length > 0) {
        setSelectedVariant(productData.variants[0]);
      }

      if (plansData.length > 0) {
        setSelectedPlan(plansData[0]);
      }
    } catch (err) {
      console.error(err);
      setError("Unable to load product details.");
    } finally {
      setLoading(false);
    }
  }

  function handleProceed() {
    if (!selectedPlan) {
        return;
    }

    navigate("/marketplace/confirmation", {
        state: {
        product,
        variant: selectedVariant,
        plan: selectedPlan,
        },
    });
    }

  if (loading) {
    return (
      <div className="product-details-page">
        <div className="state-message">
          <div className="loader"></div>
          <p>Loading product...</p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="product-details-page">
        <header className="simple-header">
          <NavLink to="/marketplace" className="back-button">
            ←
          </NavLink>

          <h1>Product Details</h1>
        </header>

        <div className="state-message error-state">
          <p>{error || "Product not found."}</p>

          <button onClick={loadProductDetails} className="retry-button">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container product-details-page">

      {/* Header */}
      <header className="product-details-header">
        <NavLink to="/marketplace" className="back-button">
          ←
        </NavLink>

        <h1>Product Details</h1>
      </header>

      <main className="product-details-content">

        {/* Product Information */}
        <section className="product-main">

          <div className="product-details-image">
            <img
              src={product.image}
              alt={product.name}
            />
          </div>

          <div className="product-details-info">

            <span className="product-category">
              {product.category}
            </span>

            <h2>{product.name}</h2>

            <p className="product-details-price">
              ₹{product.price.toLocaleString("en-IN")}
            </p>

            <p className="product-description">
              {product.description}
            </p>

            {/* Variants */}
            {product.variants?.length > 0 && (
              <div className="variant-section">

                <h3>Choose Variant</h3>

                <div className="variant-options">

                  {product.variants.map((variant) => (
                    <button
                        key={variant.id}
                        className={`variant-button ${
                        selectedVariant?.id === variant.id
                            ? "selected"
                            : ""
                        }`}
                        onClick={() => setSelectedVariant(variant)}
                    >
                        <span>{variant.color}</span>

                        {variant.storage && (
                        <small>{variant.storage}</small>
                        )}

                        <strong>
                        ₹{variant.price.toLocaleString("en-IN")}
                        </strong>
                    </button>
                    ))}

                </div>
              </div>
            )}

          </div>
        </section>

        {/* EMI Plans */}
        <section className="emi-section">

          <div className="section-heading">
            <h2>Choose your EMI plan</h2>

            <p>
              Select a no-cost EMI option that works for you.
            </p>
          </div>

          <div className="emi-plan-list">

            {emiPlans.map((plan) => (
              <button
                key={plan.id}
                className={`emi-plan-card ${
                  selectedPlan?.id === plan.id
                    ? "selected"
                    : ""
                }`}
                onClick={() => setSelectedPlan(plan)}
              >

                <div className="emi-plan-left">

                  <strong>
                    {plan.duration} months
                  </strong>

                  <span>
                    ₹{plan.monthlyAmount.toLocaleString("en-IN")}
                    /month
                  </span>

                  <small>
                    {plan.label}
                  </small>

                </div>

                <div className="emi-plan-right">

                  <span>Total</span>

                  <strong>
                    ₹{plan.totalAmount.toLocaleString("en-IN")}
                  </strong>

                </div>

              </button>
            ))}

          </div>
        </section>

        {/* Proceed */}
        <button
          className="proceed-button"
          onClick={handleProceed}
          disabled={!selectedPlan}
        >
          {selectedPlan
            ? `Proceed with ${selectedPlan.duration} month EMI`
            : "Select an EMI plan"}
        </button>

      </main>

      <BottomNavigation />

    </div>
  );
}

export default ProductDetails;