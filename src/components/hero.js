import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="bg-gradient bg-secondary last:text-light pt-5 d-flex align-items-end" style={{height: "60vh"}}>
      <div className="p-3 ">
        <h1 className="display-4">Welcome to My Site</h1>
        <p className="lead" style={{maxWidth: "60vh"}}>"Welcome to our one-stop-shop for all your needs.
         Browse our high-quality products and shop with ease.
          Join us today and start shopping!"
        </p>
        <Link to="/products" className="btn btn-warning btn-lg">
        Shop Now
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;

