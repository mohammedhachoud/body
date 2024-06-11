import React from 'react';

export default function ProductCard({ product }) {
    return (
        <div className="product-card">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/fdc993449dab8cbb4b442c83416b3c25e9a9ac4be4318eff653e6d18f8a160bb?apiKey=dab1d767c7fa4022a44c79fa035746a8&" alt="" className="close-icon" />
            <div className="product-details">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-info">
                    <div className="product-name">{product.name}</div>
                    <div className="product-price">{product.price} DA</div>
                </div>
                <div className="order-button">
                    <div className="order-text">Make an order</div>
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8626ab8659d8df18841dfb1249575dc79e4fef7aa930004d8bca3c334aab7cff?apiKey=dab1d767c7fa4022a44c79fa035746a8&" alt="" className="arrow-icon" />
                </div>
            </div>
        </div>
    );
}