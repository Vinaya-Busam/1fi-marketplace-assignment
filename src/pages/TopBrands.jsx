import { NavLink } from "react-router-dom";

import BottomNavigation from "../components/BottomNavigation";
import ShopTabs from "../components/ShopTabs";

function TopBrands() {
  return (
    <div className="app-container">

      <header className="simple-header">
        <NavLink to="/shop" className="back-button">
          ←
        </NavLink>

        <h1>Top Brands</h1>
      </header>

      <ShopTabs />

      <main className="empty-state">
        <h2>Top Brands</h2>

        <p>
          Explore products from leading brands with
          1Fi's flexible EMI options.
        </p>

      </main>

      <BottomNavigation />

    </div>
  );
}

export default TopBrands;