import React from 'react'
import ProductCard from './ProductCard';

export default function FeaturedList() {
    return (
        <section className="product-list-padding featured-list my-5">
            <div className="title-area d-flex justify-content-between pb-4">
                <span className="h2">Öne Çıkan Ürünler</span>
            </div>
            <div className="list">
                <div className="product">
                    <ProductCard />
                </div>
                <div className="product">
                    <ProductCard />
                </div>
                <div className="product">
                    <ProductCard />
                </div>
                <div className="product">
                    <ProductCard />
                </div>
                <div className="product">
                    <ProductCard />
                </div>
                <div className="product">
                    <ProductCard />
                </div>
                <div className="product">
                    <ProductCard />
                </div>
                <div className="product">
                    <ProductCard />
                </div>
                <div className="product">
                    <ProductCard />
                </div>
                <div className="product">
                    <ProductCard />
                </div>
            </div>
        </section>
    )
}
