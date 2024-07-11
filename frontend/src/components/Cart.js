import React, { useState } from 'react';
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };
  return (
    <div className="cart">
      {cartItems.map(item => (
        <div key={item._id}>
          <h2>{item.name}</h2>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};
export default Cart;

