import React, { useState } from "react";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <div className="background-image">
      {!showProductList ? (
        <div className="app-container">
          <h1>Welcome to Paradise Nursery</h1>

          <button onClick={() => setShowProductList(true)}>
            Get Started
          </button>
        </div>
      ) : (
        <>
          <AboutUs />
          <ProductList />
        </>
      )}
    </div>
  );
}

export default App;
