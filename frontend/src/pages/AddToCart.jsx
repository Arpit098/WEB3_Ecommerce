import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./AddToCart.css";

const AddToCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity >= 0) {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <>
      <Navbar />
      <div className="cart-container">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p>${item.price}</p>
                    <div className="quantity-controls">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                    <button onClick={() => removeItem(item.id)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <h3>Total: ${calculateTotal().toFixed(2)}</h3>
              <button className="checkout-button">Proceed to Checkout</button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default AddToCart;
