import React from 'react'
import { HomePageSlider, BestsellersList, FeaturedList } from './Components';

export default function HomePage() {
    return (
        <section className="home-page">
            <HomePageSlider />
            <FeaturedList />
            <BestsellersList />
        </section>
    )
}
