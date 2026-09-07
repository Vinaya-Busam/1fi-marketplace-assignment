import { NavLink } from "react-router-dom";

import BottomNavigation from "../components/BottomNavigation";
import ShopTabs from "../components/ShopTabs";

function NearbyStores() {
  return (
    <div className="app-container">

      <header className="simple-header">
        <NavLink to="/shop" className="back-button">
          ←
        </NavLink>

        <h1>Nearby Stores</h1>
      </header>

      <ShopTabs />

      <main className="empty-state">
        <h2>Nearby Stores</h2>

        <p>
          Find stores near you and explore available
          shopping options.
        </p>

      </main>

      <BottomNavigation />

    </div>
  );
}

export default NearbyStores;