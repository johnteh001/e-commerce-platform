import React, { useState, useEffect } from 'react';

const ProductPage = ({ match }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`/api/products/${match.params.id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product:', error));
  }, [match.params.id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-page">
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
};

export default ProductPage;
