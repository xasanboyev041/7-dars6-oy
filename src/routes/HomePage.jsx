import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="container">
      <div className="home-page">
      <h2>Mahsulotlar</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <Link className="prodect-link" to={`/product/${product.id}`}>
              <img src={product.image} alt={product.title} />
              <h3 className="home-h3">{product.title}</h3>
              <p className="product-price">{product.price} $</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default HomePage;
