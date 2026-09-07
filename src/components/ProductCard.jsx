import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const lowestEmiPlan = product.lowestEmiPlan;

  return (
    <Link
      to={`/marketplace/product/${product.id}`}
      className="product-card"
    >
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />

        <span className="emi-badge-small">
          NO-COST EMI
        </span>
      </div>

      <div className="product-info">
        <span className="product-category">
          {product.category}
        </span>

        <h3 className="product-name">
          {product.name}
        </h3>

        <div className="product-price-row">
          <p className="product-price">
            ₹{product.price.toLocaleString("en-IN")}
          </p>
        </div>

        <div className="product-emi-box">
          <span>Starting EMI</span>

          {lowestEmiPlan ? (
            <strong>
              ₹{lowestEmiPlan.monthlyAmount.toLocaleString("en-IN")}/mo
            </strong>
          ) : (
            <strong>EMI unavailable</strong>
          )}
        </div>

        <span className="view-product">
          View product →
        </span>
      </div>
    </Link>
  );
}

export default ProductCard;