import React from 'react';
const Checkout = ({ cartItems }) => {
  const handleCheckout = async () => {
    const response = await fetch('/api/checkout', {
      method: 'POST',
      body: JSON.stringify({ cartItems }),
      headers: { 'Content-Type': 'application/json' },
    });
    const { sessionId } = await response.json();
    window.location.href = `https://checkout.stripe.com/pay/${sessionId}`;
  };
  return (
    <div>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};
export default Checkout;
