import React from 'react';
import PropTypes from 'prop-types';
import { useCart } from 'react-use-cart';


const CartItem = ({ item }) => {
  const { updateItemQuantity, removeItem } = useCart();

  const handleUpdateCartQty = (lineItemId, quantity) => {
    updateItemQuantity(lineItemId, quantity);
  };

  const handleRemoveFromCart = () => {
    removeItem(item.id);
  };

  return (
    <div className="cart-item">
      <img className="cart-item__image" src={item.image.url} alt={item.name} />
      <div className="cart-item__details">
        <h4 className="cart-item__details-name">{item.name}</h4>
        <div className="cart-item__details-qty">
          <button
            type="button"
            onClick={() =>
              item.quantity > 1
                ? handleUpdateCartQty(item.id, item.quantity - 1)
                : handleRemoveFromCart()
            }
          >
            -
          </button>
          <p>{item.quantity}</p>
          <button
            type="button"
            onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}
          >
            +
          </button>
        </div>
        <p className="cart-item__details-price">{item.price.formatted_with_symbol}</p>
      </div>
    </div>
  );
};

export default CartItem;

CartItem.propTypes = {
    item: PropTypes.object,
    handleUpdateCartQty: PropTypes.func,
    onUpdateCartQty: () => {},
    onRemoveFromCart: () => {}
 };