import React from "react";

function ProductDetailModal({ name, handleCloseModal, price, description }) {
    return(
        <div className="modal show" tabIndex="-1" role="dialog" style={{ display: "block" }}>
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content bg-dark text-white">
                <div className="modal-header">
                    <h5 className="modal-title">{name}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleCloseModal}>
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <p>{description}</p>
                    <p>${price}</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={handleCloseModal}>Close</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailModal ;