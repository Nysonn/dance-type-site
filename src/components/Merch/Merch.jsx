// Merch.jsx
import React from "react";
import "./Merch.css";

const Merch = () => {
  return (
    <div className="merch-container">
      <div className="merch-background">
        <div className="merch-overlay">
          <div className="merch-content">
            <h1 className="merch-title">MERCH</h1>
            <div className="merch-items">
              <div className="merch-item">
                <img
                  src="product1.jpg" /* Replace with actual product image */
                  alt="Product 1"
                  className="merch-image"
                />
                <p className="merch-name">Product 1</p>
                <a
                  href="https://example.com/product1" /* Replace with product link */
                  className="merch-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Shop Now
                </a>
              </div>
              <div className="merch-item">
                <img
                  src="product2.jpg" /* Replace with actual product image */
                  alt="Product 2"
                  className="merch-image"
                />
                <p className="merch-name">Product 2</p>
                <a
                  href="https://example.com/product2" /* Replace with product link */
                  className="merch-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Shop Now
                </a>
              </div>
              {/* Add more products as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Merch;
