import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { app } from "./firebase-config";

import AuthPages from './pages/authentication';
import NavBar from './components/navbar';
import Cart from './components/cart';
import Home from './pages/home';
import ProductsPage from './pages/productspage';
import Footer from './components/footer';
import CartNav from './components/common/cartNav';
import ProductDetailPage from './pages/productdetailpage';

function App() {
  let navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token');

    if (!authToken) {
      navigate('/authentication/login');
    }
  }, []);

  const isCartRoute = location.pathname === '/products/cart';

  return (
    <div className="App pt-4">
      <Helmet>
        <title>E-Commerce App</title>
        <meta name="description" content="A simple e-commerce app" />
      </Helmet>
      <NavBar />
      {!isCartRoute && (
        <div className="position-fixed top-2 start-0 mt-2 pt-5 p-2" style={{ zIndex: 1029 }}>
          <CartNav />
        </div>
      )}
      <Routes>
        <Route path="/authentication/*" element={<AuthPages />} />
        <Route path="/" element={<Home title="Home" />} />
        <Route path="/products" element={<ProductsPage title="Products" />} />
        <Route path="/products/:id" element={<ProductDetailPage title="ProductDetail" />} />
        <Route path="/products/cart" element={<Cart title="Cart" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
