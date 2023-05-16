import React, { useState, useEffect } from "react";
import { useCart } from 'react-use-cart';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./ProductCardCarousel.css";

import ProductCard from "./productcard";
import { ProductCardSkeleton } from "./skeletons";

function ProductCardCarousel(props) {
  const { addItem } = useCart();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);

  const { show, infiniteLoop, handleViewDetails } = props;

  const [currentIndex, setCurrentIndex] = useState(infiniteLoop ? show : 0)
  const [length, setLength] = useState(products.length);

  const [isRepeating, setIsRepeating] = useState(infiniteLoop && products.length > show)
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const [touchPosition, setTouchPosition] = useState(null);


  useEffect(() => {
    setLength(products.length)
    setIsRepeating(infiniteLoop && products.length > show)
  }, [products, infiniteLoop, show])

  useEffect(() => {
    if (isRepeating) {
      if (currentIndex === show || currentIndex === length) {
        setTransitionEnabled(true);
      }
    }
  }, [currentIndex, isRepeating, show, length]);

  const handleAddToCart = (product) => {
    addItem(product);
    toast.success('Item added to cart successfully');
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=10`)
      .then((res) => res.json())
      .then((data) => {
        const sortedProducts = data.sort((a, b) => b.rating - a.rating);
        setProducts(sortedProducts);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const next = () => {
    if (isRepeating || currentIndex < (length - show)) {
      setCurrentIndex(prevState => prevState + 1);
    }
  };

  const prev = () => {
    if (isRepeating || currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1);
    }
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  const handleTransitionEnd = () => {
    if (isRepeating) {
      if (currentIndex >= length) {
        setTransitionEnabled(false);
        setCurrentIndex(0);
      }
      if (currentIndex === -1) {
        setTransitionEnabled(false);
        setCurrentIndex(length - show);
      }
    } else {
      if (currentIndex >= length - show) {
        setTransitionEnabled(false);
        setCurrentIndex(length - show);
      }
      if (currentIndex === -1) {
        setTransitionEnabled(false);
        setCurrentIndex(0);
      }
    }
  };
  
  
  

    return(
        <div className="bg-dark">
            <h1 className="text-light p-2">My Products</h1>
            <ToastContainer autoClose={1000} />
            <div className="carousel-container m-2">
                <div className="carousel-wrapper" >
                    {
                        (isRepeating || currentIndex > 0) &&
                        <button onClick={prev} className="left-arrow">
                            &lt;
                        </button>
                    }
                    <div className="carousel-content-wrapper" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} >
                        <div
                            className={`carousel-content show-${show}`}
                            style={{
                                transform: `translateX(-${currentIndex * (100 / show)}%)`,
                                transition: !transitionEnabled ? 'none' : undefined,
                            }}
                            onTransitionEnd={() => handleTransitionEnd()}
                        >
                          {isLoading && <ProductCardSkeleton cards={10} />}
                          {products.map((product) => {
                            return (
                              <ProductCard
                                  key={product.id}
                                  image={product.image}
                                  name={product.title}
                                  description={product.description}
                                  price={product.price}
                                  product={product}
                                  onAddToCart={handleAddToCart}
                                  handleViewDetails={handleViewDetails}
                              />
                            );
                          })}
                        </div>
                    </div>
                    {
                        (isRepeating || currentIndex < (length - show)) &&
                        <button onClick={next} className="right-arrow">
                            &gt;
                        </button>
                    }
                </div>
            </div>
            <div className="pt-3">
                
            </div>
        </div>
    )
}

ProductCardCarousel.propTypes = {
    products: PropTypes.array,
    onAddToCart: PropTypes.func,
};

export default ProductCardCarousel ;
