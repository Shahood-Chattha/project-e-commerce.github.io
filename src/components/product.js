import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <button onClick={() => addToCart(product)}>Add to cart</button>
    </div>
  );
};

export default Product;