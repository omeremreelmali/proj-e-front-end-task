import React from 'react'

export default function ProductCard({ product }) {
    console.log(product)
    return (
        <div className="card text-center product-card">
            {product.attr3 ? <span className="sell-now py-2 w-100 position-absolute text-white text-center">
                AZ ÖNCE BİR ADET SATILDI!
            </span> : ''}
            <div className="image-area">
                <img className="card-img-top py-4 py-5 mx-auto" src={product.img} alt="product" />
            </div>
            <div className="card-body position-relative">
                <div className="body-top">
                    <p className="card-text text-muted"><span className="star"><i className="fas fa-star"></i> {product.rating} </span> ({product.comment} Yorum)</p>
                    <p className="card-text text-muted mb-0 fs-6">{product.code} </p>
                    <p className="card-text">{product.title.substring(0, 40)}</p>
                </div>
                <div className="body-bottom position-absolute">
                    <h2 className="card-title mt-4 price"><i className="fas fa-lira-sign fa-xs"></i> {product.price}</h2>
                    <p className="card-text mt-4 p-0 alert">YALNIZCA 2 ÜRÜN KALDI!</p>
                    {product.samedayshipping ? <p className="btn text-secondary border-0 shipping">BUGÜN KARGODA</p> : ''}
                </div>
            </div>

            <div className="cart-buttons w-100 position-absoluteü d-none justify-content-center">
                <button type="button" class="btn btn-primary rounded-0 px-4 py-3"><i class="fas fa-exchange-alt my-auto"></i></button>  
                <button type="button" class="btn btn-primary rounded-0 w-100 add-cart">SEPETE EKLE</button>  
            </div>
        </div>
    )
}
