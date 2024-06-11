import * as React from "react";
import { useNavigate } from 'react-router-dom';

const products = [
  { name: "WHEY", price: "7000 DA", image: "path/to/whey-image.png" },
  { name: "Creatine", price: "8000 DA", image: "path/to/creatine-image.png" },
  { name: "Nestlé Pure Life Water PM", price: "30 DA", image: "path/to/water-pm-image.png" },
  { name: "Nestlé Pure Life Water GM", price: "50 DA", image: "path/to/water-gm-image.png" }
];

const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src={product.image} alt={product.name} className="product-image" />
    <div className="product-info">
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button className="order-button">Make an order</button>
    </div>
    <style jsx>{`
      .product-card {
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 16px;
        text-align: center;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        margin: 16px;
      }
      .product-image {
        max-width: 100%;
        height: auto;
        margin-bottom: 8px;
      }
      .product-info {
        margin-top: 8px;
      }
      .order-button {
        background-color: #f1c40f;
        border: none;
        border-radius: 4px;
        color: white;
        padding: 8px 16px;
        cursor: pointer;
        font-size: 16px;
      }
      .order-button:hover {
        background-color: #d4ac0d;
      }
    `}</style>
  </div>
);

const ProductList = () => (
  <div className="product-list">
    {products.map((product, index) => (
      <ProductCard key={index} product={product} />
    ))}
    <style jsx>{`
      .product-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
    `}</style>
  </div>
);

function Inventory() { 
  <div className="app">
    <h1>Add Equipment</h1>
    <ProductList />
    <style jsx>{`
      .app {
        font-family: Arial, sans-serif;
        padding: 20px;
        text-align: center;
      }
    `}</style>
  </div>
    };


export default function MyComponent() {
  return <Inventory />;
}