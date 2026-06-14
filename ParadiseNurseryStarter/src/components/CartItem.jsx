import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";

function CartItem() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>

      {items.length === 0 && <p>Your cart is empty</p>}

      {items.map(item => (
        <div key={item.id} className="cart-item">
          <h4>{item.name}</h4>
          <p>Price: R{item.price}</p>

          <input
            type="number"
            value={item.quantity}
            min="1"
            onChange={(e) =>
              dispatch(
                updateQuantity({
                  id: item.id,
                  quantity: Number(e.target.value)
                })
              )
            }
          />

          <button onClick={() => dispatch(removeItem(item.id))}>
            Remove
          </button>
        </div>
      ))}

      <h3>Total: R{total}</h3>
    </div>
  );
}

export default CartItem;
