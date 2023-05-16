import React from "react";


export const ProductDetail = ({ product, onAddToCart }) => {
    const handleAddToCart = () => {
        onAddToCart(product, 1);
    }; 

    return(
        <div className="container mt-4 pb-5">
            <div className="row">
                <div className="col-md-4">
                    <div className="m-auto" style={{width: "10rem"}}>
                        <img src={product.image} alt={product.title} className="img-fluid" />
                    </div>
                </div>
                <div className="col-md-8">
                    <h2>{product.title}</h2>
                    <p className="text-muted">{product.category}</p>
                    <p className="text-primary fw-bold">${product.price}</p>
                    <p>{product.description}</p>
                    <button className="btn btn-primary btn-sm me-2" onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}