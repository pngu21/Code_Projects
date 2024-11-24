import React, { useState, useEffect } from "react";
import "./App.css";

const products = [
  { id: 1, name: "Smartphone", price: 299.99, image: "https://via.placeholder.com/200" },
  { id: 2, name: "Laptop", price: 899.99, image: "https://via.placeholder.com/200" },
  { id: 3, name: "Headphones", price: 49.99, image: "https://via.placeholder.com/200" },
  { id: 4, name: "Smartwatch", price: 199.99, image: "https://via.placeholder.com/200" },
  { id: 5, name: "Tablet", price: 399.99, image: "https://via.placeholder.com/200" },
];

function App() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Update local storage whenever the cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add a product to the cart
  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Remove a product from the cart
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  // Clear the entire cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <h1 className="store-title">My Store</h1>
        <button className="cart-icon" onClick={() => setIsCartOpen(!isCartOpen)}>
          🛒
        </button>
      </header>

      {/* Product List */}
      <main className="main-content">
        <div className="product-container">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </main>

      {/* Cart Panel */}
      {isCartOpen && (
        <aside className="cart-panel">
          <h2>Shopping Cart</h2>
          <ul className="cart-items">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <span>
                  {item.name} x{item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <div className="cart-actions">
            <button onClick={clearCart}>Clear Cart</button>
          </div>
        </aside>
      )}
    </div>
  );
}

export default App;
