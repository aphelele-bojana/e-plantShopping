import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const products = [
  { id: 1, name: "Aloe Vera", price: 50 },
  { id: 2, name: "Snake Plant", price: 80 },
  { id: 3, name: "Peace Lily", price: 120 },
  { id: 4, name: "Spider Plant", price: 70 }
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Our Plants</h2>

      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>R{product.price}</p>

            <button onClick={() => dispatch(addItem(product))}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
