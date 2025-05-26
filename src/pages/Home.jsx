import React from 'react'
import Hero from '../components/Hero'
import PopularCategories from '../components/PopularCategories'
import TopDishes from '../components/TopDishes'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'

const Home = () => {
    return (
        <div>
            <Hero />
            <PopularCategories />
            <TopDishes />
            <WhyChooseUs />
            <Testimonials />
            <CTA />
        </div>
    )
}

export default Home
