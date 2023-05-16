import React from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const ProductRow = ({ image, name, price, onAddToCart, product }) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    onAddToCart(product, 1);
  };

  const handleViewDetails = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div className="card bg-secondary mx-1" style={{ width: "12rem" }}>
        <Link to={`/products/${product.id}`} style={{ textDecoration: "none" }}>
          <img src={image} className="card mx-auto mt-2" alt={name} style={{ width: "11rem", height: "8rem" }} />
        </Link>
        <div className="card-body">
          <Link to={`/products/${product.id}`} style={{ textDecoration: "none" }}>
            <h5 className="card-title" style={{ fontSize: "0.9rem", height: "1.2rem", overflow: "hidden", color: "black", textDecoration: "none" }}>{name}</h5>
          </Link>
          <p className="card-text text-sm"><small className="text-body-secondary">${price}</small></p>
        <div className="d-flex justify-content-between align-items-center">
        <button className="btn btn-primary btn-sm me-2" onClick={handleAddToCart}>Add to Cart</button>
        <button className="btn btn-outline-primary btn-sm" onClick={handleViewDetails}>More Details</button>
      </div>
        </div>
      </div>
    </div>
  );
};

ProductRow.propTypes = {
  product: PropTypes.object,
  onAddToCart: PropTypes.func,
};

export default ProductRow;
