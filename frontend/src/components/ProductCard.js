import React from 'react';
const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src={product.images[0]} alt={product.name} />
    <h2>{product.name}</h2>
    <p>{product.description}</p>
    <p>Price: ${product.price}</p>
    <div>
      <span>Sizes: </span>
      {product.sizes.map(size => (
        <span key={size} className="size">{size}</span>
      ))}
    </div>
  </div>
);
export default ProductCard;
