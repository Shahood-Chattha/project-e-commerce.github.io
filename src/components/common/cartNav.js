import React, {useState} from 'react';
import Cart from '../cart';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingBag, faTimes } from '@fortawesome/free-solid-svg-icons'
import 'animate.css/animate.min.css';

library.add(faShoppingBag, faTimes);

const CartNav = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
    const [isCartVisible, setCartVisible] = useState(false);

    return (
        <div className="nav p-2">
            <div className="nav__cart" onClick={() => setCartVisible(!isCartVisible)}>
                <button className={`nav__cart-open animate__animated ${isCartVisible ? 'animate__bounce' : ''}`}>
                    <FontAwesomeIcon size="2x" icon="shopping-bag" color="#292B83"/>
                    {cart !== null ? <span>{cart}</span> : ''}
                </button>
            </div>
            {isCartVisible &&
                <Cart
                    cart={cart}
                    onUpdateCartQty={onUpdateCartQty}
                    onRemoveFromCart={onRemoveFromCart}
                    onEmptyCart={onEmptyCart}
                />
            }  
        </div>
    )
}

export default CartNav;

CartNav.propTypes = {
    cart: PropTypes.object,
    onUpdateCartQty: PropTypes.func,
    onRemoveFromCart: PropTypes.func,
    onEmptyCart: PropTypes.func,
};