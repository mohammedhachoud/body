import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = ({ children, className , onclic}) => (
  <button onClick={onclic} className={`button ${className}`}>{children}</button>
);
export default function ProductCards() {
  const navigate = useNavigate();
  const products = [
    {
      name: "WHEY",
      price: "7000 DA",
      image: "path_to_whey_image",
      alt: "Whey Protein",
    },
    {
      name: "Creatine",
      price: "8000 DA",
      image: "path_to_creatine_image",
      alt: "Creatine",
    },
    {
      name: "Water PM",
      price: "30 DA",
      image: "path_to_water_pm_image",
      alt: "Water PM",
    },
    {
      name: "Water GM",
      price: "50 DA",
      image: "path_to_water_gm_image",
      alt: "Water GM",
    },
  ];

  const handleAddEquipment = () => {
    navigate('/inventory/add');
  };

  return (
    <div className="products-container">
      <div className="button-container">
        <Button onclic={handleAddEquipment} className="add-equipment-button">Add Equipment</Button>

      </div>
      <div className="products-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.alt} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <button className="order-button">Make an order</button>
          </div>
        ))}
      </div>
      <style jsx>{`
        .products-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
        }
        .button-container {
          width: 100%;
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
        }
        .add-equipment-button {
          font-family: Poppins, sans-serif;
          background-color: #fecc09;
          align-self: start;
          border-radius: 12px;
          padding: 10px 20px;
          color: #fff;
          
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        .add-equipment-button:hover {
          background-color: #e6b800;
        }
        .products-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          width: 100%;
        }
        .product-card {
          background-color: #1e1e1e;
          border-radius: 10px;
          padding: 20px;
          width: 200px;
          text-align: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          transition: transform 0.2s;
        }
        .product-card:hover {
          transform: scale(1.05);
        }
        .product-image {
          max-width: 100%;
          height: auto;
          border-radius: 5px;
        }
        .product-name {
          color: #fff;
          font-size: 18px;
          margin: 10px 0;
        }
        .product-price {
          color: #ffcc00;
          font-size: 16px;
          margin: 5px 0;
        }
        .order-button {
          background-color: #ffcc00;
          border: none;
          border-radius: 5px;
          padding: 10px 20px;
          color: #000;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        .order-button:hover {
          background-color: #e6b800;
        }
      `}</style>
    </div>
  );
}