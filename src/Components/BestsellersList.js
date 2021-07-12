import React, { useState, useEffect } from 'react'
import ProductCard from './ProductCard'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react';
import './swiper-bundle.css';
import $ from 'jquery';
window.jQuery = $;


export default function BestsellersList() {
    const [products, setProducts] = useState([])


    $(document).ready(function () {
        $('.swiper-button-next-best-seller').html('<span><i class="fas fa-caret-right fa-2x"></i></span>');
        $('.swiper-button-prev-best-seller').html('<span><i class="fas fa-caret-left fa-2x"></i></span>');
    });


    const getData = async () => {
        const res = await axios.get('./assets/Data/bestSeller.json')
        await setProducts(res.data)
    }

    useEffect(() => {
        if (products.length == 0) {
            getData()
        }
    }, [products])

    return (
        <section className="product-list-padding bestsellers-list my-5 position-relative">
            <div className="title-area d-flex justify-content-between pb-4">
                <span className="h2" style={{ color: "#424242" }} >Çok Satanlar</span>
                <a href className="h6 my-auto">TÜM ÇOK SATANLAR <i class="fas fa-arrow-right"></i></a>
            </div>

            <Swiper
                spaceBetween={10}
                slidesPerView={5}
                navigation= {
                    {nextEl: '.swiper-button-next-best-seller',
                    prevEl: '.swiper-button-prev-best-seller'}
                  }
            >
                {products.map(product =>
                    <div class='item'>
                        <SwiperSlide>
                            <ProductCard product={product} />
                        </SwiperSlide>
                    </div>
                )}
            </Swiper>
            <div class="swiper-button-prev-best-seller position-absolute"></div>
            <div class="swiper-button-next-best-seller position-absolute"></div>
        </section>
    )
}
