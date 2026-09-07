import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Shop from "./pages/Shop";
import TopBrands from "./pages/TopBrands";
import NearbyStores from "./pages/NearbyStores";
import Marketplace from "./pages/Marketplace";
import ProductDetails from "./pages/ProductDetails";
import Confirmation from "./pages/Confirmation";
import BottomNavigation from "./components/BottomNavigation";

function PlaceholderPage({ title, description }) {
  return (
    <div className="app-container simple-page">
      <header className="simple-header">
        <button
          className="back-button"
          onClick={() => window.history.back()}
        >
          ←
        </button>

        <h1>{title}</h1>
      </header>

      <main className="empty-state">

        <h2>{title}</h2>

        <p>
          {description ||
            `This is the ${title} section of the 1Fi app.`}
        </p>

        
      </main>

      <BottomNavigation />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home */}
        <Route
          path="/home"
          element={<PlaceholderPage title="Home" />}
        />

        {/* Shop */}
        <Route path="/shop" element={<Shop />} />

        {/* Shop sections */}
        <Route
          path="/shop/top-brands"
          element={<TopBrands />}
        />

        <Route
          path="/shop/nearby-stores"
          element={<NearbyStores />}
        />

        {/* Marketplace */}
        <Route
          path="/marketplace"
          element={<Marketplace />}
        />

        <Route
          path="/marketplace/product/:productId"
          element={<ProductDetails />}
        />

        <Route
          path="/marketplace/confirmation"
          element={<Confirmation />}
        />

        {/* Other navigation sections */}
        <Route
          path="/emi-dues"
          element={<PlaceholderPage title="EMI Dues" />}
        />

        <Route
          path="/limit"
          element={<PlaceholderPage title="Limit" />}
        />

        <Route
          path="/profile"
          element={<PlaceholderPage title="Profile" />}
        />

        {/* Unknown URL */}
        <Route
          path="*"
          element={<Navigate to="/shop" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;