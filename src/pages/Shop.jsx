import { NavLink } from "react-router-dom";

import BottomNavigation from "../components/BottomNavigation";
import ShopTabs from "../components/ShopTabs";

function Shop() {
  return (
    <div className="app-container">

      {/* Hero */}
      <section className="shop-hero">
        <div className="hero-content">

          <div className="emi-badge">
            ✦ NO-COST EMIs
          </div>

          <h1>
            Shop today.
            <br />
            <span>Pay later using</span>
            <br />
            Mutual funds.
          </h1>

          <p>
            No credit score required. No interest.
            <br />
            Backed by your investments.
          </p>

        </div>

        <div className="hero-illustration">
          🛍️
        </div>
      </section>

      {/* Shop tabs */}
      <ShopTabs />

      {/* Shop content */}
      <main className="shop-content">

        <h2>Shop with 1Fi</h2>

        <p className="shop-description">
          Discover brands, nearby stores and products you
          can purchase with flexible EMI options.
        </p>

        <NavLink
          to="/marketplace"
          className="marketplace-cta"
        >
          <span>Explore 1Fi Marketplace</span>
          <span>→</span>
        </NavLink>

      </main>

      {/* Bottom navigation */}
      <BottomNavigation />

    </div>
  );
}

export default Shop;