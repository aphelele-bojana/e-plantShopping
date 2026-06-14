import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = {
  Flowering: [
    { id: 1, name: "Rose", price: 30, img: "https://via.placeholder.com/100" },
    { id: 2, name: "Tulip", price: 25, img: "https://via.placeholder.com/100" },
    { id: 3, name: "Lily", price: 40, img: "https://via.placeholder.com/100" },
    { id: 4, name: "Sunflower", price: 20, img: "https://via.placeholder.com/100" },
    { id: 5, name: "Daisy", price: 15, img: "https://via.placeholder.com/100" },
    { id: 6, name: "Orchid", price: 60, img: "https://via.placeholder.com/100" }
  ],

  Indoor: [
    { id: 7, name: "Aloe Vera", price: 50, img: "https://via.placeholder.com/100" },
    { id: 8, name: "Snake Plant", price: 80, img: "https://via.placeholder.com/100" },
    { id: 9, name: "Peace Lily", price: 70, img: "https://via.placeholder.com/100" },
    { id: 10, name: "Spider Plant", price: 60, img: "https://via.placeholder.com/100" },
    { id: 11, name: "Rubber Plant", price: 90, img: "https://via.placeholder.com/100" },
    { id: 12, name: "Pothos", price: 55, img: "https://via.placeholder.com/100" }
  ]
};

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Plants</h2>

      {Object.entries(plants).map(([category, items]) => (
        <div key={category}>
          <h3>{category} Plants</h3>

          <div className="product-grid">
            {items.map((plant) => (
              <div key={plant.id} className="product-card">
                <img src={plant.img} alt={plant.name} />
                <h4>{plant.name}</h4>
                <p>R{plant.price}</p>

                <button onClick={() => dispatch(addItem(plant))}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
