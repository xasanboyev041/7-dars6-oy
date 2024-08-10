import React, { useState } from "react";
import "../styles/SavedItemsPage.css";

const SavedItemsPage = ({ initialSavedItems }) => {
  const [savedItems, setSavedItems] = useState(initialSavedItems);

  const handleRemoveItem = (id) => {
    setSavedItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <div className="saved-items-page">
      <h2 className="saved-h2">Saqlangan mahsulotlar</h2>
      <div className="products-grid">
        {savedItems.length === 0 ? (
          <p className="no-items">Saqlangan mahsulotlar yo'q</p>
        ) : (
          savedItems.map((item) => (
            <div key={item.id} className="product-card">
              <img
                src={item.image}
                alt={item.title}
                className="product-image"
              />
              <h3 className="product-title">{item.title}</h3>
              <p className="product-price">{item.price} $</p>
              <button
                className="remove-button"
                onClick={() => handleRemoveItem(item.id)}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
    </div>
  );
};

export default SavedItemsPage;
