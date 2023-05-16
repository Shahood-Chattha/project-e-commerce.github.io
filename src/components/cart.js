import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { useCart } from 'react-use-cart';

import CartItem from './common/cartItem';

const Cart = () => {
  const location = useLocation();

  // Set padding top based on the path of the site
  const name = location.pathname === '/products/cart' ? 'pt-5' : 'pt-1';

  const {
    isEmpty,
    items,
    updateItemQuantity,
    removeItem,
    emptyCart,
    cartTotal,
  } = useCart();

  const handleEmptyCart = () => {
    emptyCart();
  };

  const renderEmptyMessage = () => {
    if (!isEmpty) {
      return;
    }

    return (
      <p className="cart__none">
        You have no items in your shopping cart, start adding some!
      </p>
    );
  };

  const renderItems = () => {
    if (isEmpty) {
      return;
    }

    return (
      <div className="cart__items">
        {items.map((item) => (
          <CartItem
            item={item}
            onUpdateCartQty={updateItemQuantity}
            onRemoveFromCart={removeItem}
            key={item.id}
          />
        ))}
      </div>
    );
  };

  const cartContainerStyle = {
    width: '80vh', // default value for small screens
    height: isEmpty ? 0 : '200px',
    overflow: 'auto',
  };

  if (window.matchMedia('(min-width: 768px)').matches) { // medium screens
    cartContainerStyle.width = '60vh';
  }
  
  if (window.matchMedia('(min-width: 992px)').matches) { // large screens
    cartContainerStyle.width = '40vh';
  }

  const renderTotal = () => (
    <div className="cart__total">
      <p className="cart__total-title">Subtotal:</p>
      <p className="cart__total-price">${cartTotal}</p>
    </div>
  );

  return (
    <div className={`cart-scrollable ${name} p-3 text-light z-index-10`}>
      <div className="m-2 card bg-dark p-3">
        <Helmet>
          <title>Cart</title>
          <meta name="description" content="Cart page" />
          <link rel="canonical" href="/" />
        </Helmet>
        <Button as={Link} to="/products/cart" variant="secondary">Your Shopping Cart</Button>
        {renderEmptyMessage()}
        <div className="cart-container" style={cartContainerStyle}>
          {renderItems()}
        </div>
        {renderTotal()}
        <div className="cart__footer">
          <button className="cart__btn-empty" onClick={handleEmptyCart}>
            Empty cart
          </button>
          <button className="cart__btn-checkout">Checkout</button>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  onRemoveFromCart: PropTypes.func,
  onUpdateCartQty: PropTypes.func,
  onEmptyCart: PropTypes.func,
};

export default Cart;
