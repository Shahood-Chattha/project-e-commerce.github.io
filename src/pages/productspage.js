import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { useCart } from 'react-use-cart';
import { faShoppingBag, faTimes } from '@fortawesome/free-solid-svg-icons';

import ProductCarousel from "../components/common/productcarousel";
import CartNav from "../components/common/cartNav";
import FilterDropDown from "../components/common/filterdropdown";

library.add(faShoppingBag, faTimes)

function ProductsPage() {
  const { addItem, cart, emptyCart, removeItem } = useCart();
  const [isLoading, setIsLoading] = useState([true]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    addItem(product);
  };
  
  const handleEmptyCart = () => {
    emptyCart();
  }

  const handleRemoveFromCart = (itemId) => {
    removeItem(itemId);
  }

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      const sortedProducts = data.sort((a, b) => b.rating - a.rating);
      setProducts(sortedProducts);
      setIsLoading(false);
    })
    .catch((error) => console.log(error));
  }, []);
  

  useEffect(() => {
    if (!sessionStorage.getItem("Auth Token")) {
      navigate("/authentication/login");
    }
  }, [navigate]);

  return (
    <div className="container main-content">
      <Helmet>
        <title>Products Page</title>
        <meta name="description" content="Products Page" />
        <link rel="canonical" href="/products" />
      </Helmet>
      <ProductCarousel products={products} isLoading={isLoading} />
      <div className="d-none">
        <CartNav 
          cart={cart}
          onUpdateCartQty={handleAddToCart}
          onRemoveFromCart={handleRemoveFromCart}
          onEmptyCart={handleEmptyCart}
        />
      </div>
      <FilterDropDown />
    </div>
  );
}

export default ProductsPage;

ProductsPage.propTypes = {
  products: PropTypes.array,
  onAddToCart: PropTypes.func,
};
