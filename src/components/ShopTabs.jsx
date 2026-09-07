import { NavLink } from "react-router-dom";

function ShopTabs() {
  return (
    <nav className="shop-tabs">
      <NavLink
        to="/shop/top-brands"
        className={({ isActive }) =>
          `shop-tab ${isActive ? "active" : ""}`
        }
      >
        Top Brands
      </NavLink>

      <NavLink
        to="/shop/nearby-stores"
        className={({ isActive }) =>
          `shop-tab ${isActive ? "active" : ""}`
        }
      >
        Nearby Stores
      </NavLink>

      <NavLink
        to="/marketplace"
        className={({ isActive }) =>
          `shop-tab ${isActive ? "active" : ""}`
        }
      >
        1Fi Marketplace
      </NavLink>
    </nav>
  );
}

export default ShopTabs;