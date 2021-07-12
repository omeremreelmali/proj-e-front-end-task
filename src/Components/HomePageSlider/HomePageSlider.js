import React from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import SlideItemBox from './SlideItemBox';
import SlideItem from './SlideItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../swiper-bundle.css';
import $ from 'jquery';
window.jQuery = $;

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
export default function HomePageSlider() {

    $(document).ready(function () {
        $('.swiper-button-next').html('<span><i class="fas fa-caret-right fa-2x"></i></span>');
        $('.swiper-button-prev').html('<span><i class="fas fa-caret-left fa-2x"></i></span>');
    });

    return (
        <section className="home-page-slider pt-4 pb-4 bg-dark-blue">
            <Swiper
                spaceBetween={10}
                slidesPerView={5.8}
                navigation
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <SlideItemBox />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideItemBox />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideItem />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideItem />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideItemBox />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideItemBox />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideItemBox />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideItem />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideItem />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideItemBox />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideItemBox />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideItemBox />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideItem />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideItem />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideItemBox />
                </SwiperSlide>
            </Swiper>
        </section>
    )
}
