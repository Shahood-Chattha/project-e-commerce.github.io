import React from 'react';
import "./index.css";

import { ProductCarouselSkeleton } from './skeletons';

const ProductCarousel = ({ products, isLoading }) => {
    return (
        <div id="carouselExampleAutoplaying" className="carousel slide pt-5" data-bs-ride="carousel" data-bs-interval="1500">
        {isLoading && <ProductCarouselSkeleton  />}
          <div className="carousel-inner">
            {products.map((product, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={product.id}>
                <img src={product.image} className="d-block w-100 product-image" alt={product.title} style={{height: "50vh", width: "auto", margin: "auto"}} />
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
    );
}
  

export default ProductCarousel;
