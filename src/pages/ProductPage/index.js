import React from 'react';
import './index.css';
export default function ProductPage({ product }) {
    if (!product) return <div>Product not found</div>;
    
    return (
        <div className="product-detail">
          <div className="product-img">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="product-info">
            <h2>{product.title}</h2>
            <p>Rating: {product.rating && product.rating.rate}</p>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <p>Description: {product.description}</p>
            <div className="product-btn">
              <button className="btn">
                  장바구니에 담기
                </button>
                <button className="btn">
                  장바구니로 이동
                </button>
            </div>
          </div>
      </div>
    );
};
