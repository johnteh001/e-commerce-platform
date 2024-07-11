import React, { useState, useEffect } from 'react';
const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);
  return (
    <div className="product-list">
      {products.map(product => (
        <div className="product-card" key={product._id}>
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
      ))}
    </div>
  );
};
export default ProductList;
