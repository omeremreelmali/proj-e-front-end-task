import React, { useState, useEffect } from 'react'
import ProductCard from './ProductCard'
import axios from 'axios'


export default function FeaturedList() {

    const [products, setProducts] = useState([])


    const getData = async () => {
        const res = await axios.get('./assets/Data/relatedProducts.json')
        await setProducts(res.data)
    }

    useEffect(() => {
        if (products.length == 0) {
            getData()
        }
    }, [products])

    return (
        <section className="product-list-padding featured-list my-5">
            <div className="title-area d-flex justify-content-between pb-4">
                <span className="h2" style={{ color: "#424242" }}>Öne Çıkan Ürünler</span>
                <a href className="h6 my-auto">TÜM ÖNE ÇIKANLAR <i className="fas fa-arrow-right"></i></a>
            </div>
            <div className="list">
                {products.map(product =>
                    <div className="product">
                        <ProductCard product={product} />
                    </div>
                )}
            </div>
        </section>
    )
}
