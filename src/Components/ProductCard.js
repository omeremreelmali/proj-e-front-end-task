import React from 'react'

export default function ProductCard() {
    return (
        <div className="card text-center product-card">
            <img className="card-img-top" src="./assets/images/phone.jpg" alt="product" />
            <div className="card-body">
                <p className="card-text"><span className="star"><i className="fas fa-star"></i> 4,6 </span> (122 Yorum)</p>
                <p className="card-text mb-0">PA2N0006TR</p>
                <p className="card-text">IPHONE 6 16 GB AKILLI TELEFON UZAY GRİSİ</p>
                <h2 className="card-title  price"><i className="fas fa-lira-sign fa-xs"></i> 1.339</h2>
                <p className="card-text mt-3 alert">YALNIZCA 2 ÜRÜN KALDI!</p>
                <a href="#" className="btn text-secondary border-0 shipping">BUGÜN KARGODA</a>
            </div>
        </div>
    )
}
