import { useEffect, useMemo, useState } from "react";

import BottomNavigation from "../components/BottomNavigation";
import ProductCard from "../components/ProductCard";
import ShopTabs from "../components/ShopTabs";
import { getProducts } from "../services/productService";
import { getEmiPlans } from "../services/emiService";

function Marketplace() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    try {
        setLoading(true);
        setError("");

        const data = await getProducts();

        const productsWithEmi = await Promise.all(
        data.map(async (product) => {
            const emiPlans = await getEmiPlans(product.id);

            const lowestEmiPlan = emiPlans.reduce(
            (lowest, plan) =>
                plan.monthlyAmount < lowest.monthlyAmount
                ? plan
                : lowest,
            emiPlans[0]
            );

            return {
                ...product,
                lowestEmiPlan,
                };
            })
        );

        setProducts(productsWithEmi);
        } catch (err) {
            console.error(err);
            setError("Unable to load products. Please try again.");
        } finally {
            setLoading(false);
        }
    }

  const categories = useMemo(() => {
    const uniqueCategories = [
      ...new Set(products.map((product) => product.category)),
    ];

    return ["All", ...uniqueCategories];
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerm, selectedCategory]);

  return (
    <div className="app-container">

      {/* Marketplace Hero */}
      <section className="marketplace-header">
        <div>
          <p className="marketplace-eyebrow">
            1Fi Marketplace
          </p>

          <h1>
            Shop now.
            <br />
            <span>Pay later with 1Fi.</span>
          </h1>

          <p className="marketplace-subtitle">
            Choose your product and select a no-cost EMI plan.
          </p>
        </div>
      </section>

      {/* Shop Navigation */}
      <ShopTabs />

      <main className="marketplace-content">

        {/* Search */}
        <div className="marketplace-search">
          <span className="search-icon">⌕</span>

          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(event) =>
              setSearchTerm(event.target.value)
            }
          />

          {searchTerm && (
            <button
              className="clear-search"
              onClick={() => setSearchTerm("")}
            >
              ×
            </button>
          )}
        </div>

        {/* Categories */}
        {!loading && !error && (
          <div className="category-list">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-button ${
                  selectedCategory === category
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setSelectedCategory(category)
                }
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Heading */}
        <div className="marketplace-title-row">
          <div>
            <h2>
              {selectedCategory === "All"
                ? "Featured Products"
                : selectedCategory}
            </h2>

            {!loading && !error && (
              <p>
                {filteredProducts.length}{" "}
                {filteredProducts.length === 1
                  ? "product"
                  : "products"}{" "}
                available
              </p>
            )}
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="state-message">
            <div className="loader"></div>
            <p>Loading products...</p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="state-message">
            <p>{error}</p>

            <button
              onClick={loadProducts}
              className="retry-button"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Empty */}
        {!loading &&
          !error &&
          filteredProducts.length === 0 && (
            <div className="state-message">
              <div className="empty-icon">⌕</div>

              <h3>No products found</h3>

              <p>
                Try a different search or category.
              </p>

              <button
                className="retry-button"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
              >
                Clear Filters
              </button>
            </div>
          )}

        {/* Products */}
        {!loading &&
          !error &&
          filteredProducts.length > 0 && (
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          )}
      </main>

      <BottomNavigation />

    </div>
  );
}

export default Marketplace;