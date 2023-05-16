import React, { useEffect, useState } from "react";
import { useCart } from 'react-use-cart';
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

import ProductCardCarousel from "../components/common/productcardcarousel";
import Testimonials from "../components/testimonials";
import ProductDetailModal from "../components/common/productdetailmodal";
import { ProductDetail } from "../components/productdetail";
import { ProductDetailSkeleton } from "../components/common/skeletons";

function ProductDetailPage() {
    const [showModal, setShowModal] = useState(false);
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState([true]);
    const [ productId, setProductId] = useState(1);
    const { addItem} = useCart();
    const [product, setProduct] = useState(null);
    const [productDetail, setProductDetail] = useState(null);

    const handleViewDetails = (productId) => {
        setProductId(productId);
        setShowModal(true);
    };
    
      const handleCloseModal = () => {
        setShowModal(false);
    };

    

    const onAddToCart = (product) => {
    toast.success('Item Added to Cart');
    addItem(product, 1);
    };

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .catch((error) => console.log(error));
        setTimeout(() => setIsLoading(false), 1000);
    }, [id]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
        .then((res) => res.json())
        .then((data) => setProductDetail(data))
        .catch((error) => console.log(error));
    }, [productId]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="ProductsPage pt-5" >
            <ToastContainer autoClose={1000} />
            <Helmet>
                <title>ProductDetailPage</title>
                <meta name="description" content='Product Detail Page' />
                <link rel='canonical' href='/products/:id' /> 
            </Helmet>
            {isLoading ? <ProductDetailSkeleton /> : <ProductDetail product={product} onAddToCart={onAddToCart} /> }
            {showModal && <ProductDetailModal
                handleCloseModal={handleCloseModal}
                name={productDetail.title}
                price={productDetail.price}
                description={productDetail.description}
            />
            }
            <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto'}} >
                <ProductCardCarousel show={3} infiniteLoop={true} handleViewDetails={handleViewDetails} />
            </div>
            <Testimonials />
        </div>
    );
}

export default ProductDetailPage;
