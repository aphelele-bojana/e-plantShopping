import React, { useState } from "react";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      {page === "home" && (
        <div className="landing">
          <h1>Paradise Nursery 🌿</h1>
          <p>Bring nature into your home</p>

          <button onClick={() => setPage("products")}>
            Get Started
          </button>
        </div>
      )}

      {page === "products" && (
        <>
          <AboutUs />
          <ProductList />
        </>
      )}
    </div>
  );
}

export default App;
