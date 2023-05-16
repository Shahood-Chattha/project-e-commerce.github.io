import React,{ useEffect,useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import { useCart } from 'react-use-cart';

import ProductRow from "./productrow";
import { ProductRowSkeleton } from './skeletons';


function FilterDropDown () {
    const [filter, setFilter] = useState('price');
    const [isLoading, setIsLoading] = useState([true]);
    const [filterCategory, setFilterCategory] = useState('/');
    const { addItem} = useCart();
    const [products, setProducts] = useState([]);

    const handleAddToCart = (product) => {
        toast.success('Item Added to Cart');
        addItem(product, 1);
    }

    const handleFilter = (filterValue) => {
        setFilter(filterValue);
    };

    const handleFilterCategory = (filterValue) => {
        setFilterCategory(filterValue);
    };

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products${filterCategory}`)
        .then((res) => res.json())
        .then((data) => {
            const sortedProducts = data.sort((a, b) => {
            if (filter === 'rating') {
                return b.rating - a.rating;
            }
            if (filter === 'price') {
                return b.price - a.price;
            }
            if (filter === 'title') {
                return b.title.localeCompare(a.title);
            }
            });
            setProducts(sortedProducts);
            setIsLoading(false);
        })
        .catch((error) => console.log(error));
    }, [filter, filterCategory]);

    return(
        <div>
            <div className='pt-3'>
                <ToastContainer autoClose={1000} />
                <DropdownButton id="dropdown-filter" title={`Sort by ${filter}`}>
                    <Dropdown.Item onClick={() => handleFilter('rating')}>
                        Rating
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => handleFilter('price')}>
                        Price
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => handleFilter('title')}>
                        Title
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => handleFilterCategory('/category/electronics')}>
                        electronics
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => handleFilterCategory("/category/women's clothing")}>
                        women's clothing
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => handleFilterCategory("/category/men's clothing")}>
                        men's clothing
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => handleFilterCategory('/category/jewelery')}>
                        jewelery
                    </Dropdown.Item>
                </DropdownButton>
            </div>
            <div className="d-flex align-content-stretch justify-content-center flex-wrap pt-3">
                {isLoading && <ProductRowSkeleton cards={15} /> }
                {products.map((product) => {
                return (
                    <ProductRow
                        key={product.id}
                        image={product.image}
                        name={product.title}
                        description={product.description}
                        price={product.price}
                        product={product}
                        onAddToCart={handleAddToCart}
                    />
                );
                })}
            </div>
        </div>
    );
      
}

export default FilterDropDown;

FilterDropDown.propTypes = {
    products: PropTypes.array,
    onAddToCart: PropTypes.func,
    handleFilterCategory: PropTypes.func,
};
