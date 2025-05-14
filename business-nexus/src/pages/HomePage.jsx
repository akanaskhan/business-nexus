import React from 'react'
import Hero from '../components/Hero'
import Logo from '../components/Logo'
import AboutUs from '../components/AboutUs'
import HowItWorks from '../components/HowItWorks'
import ChooseUs from '../components/ChooseUs'
import Stats from '../components/Stats'
import Testimonials from '../components/Testimonial'

export default function HomePage() {
    return (
        <div>
            <Hero />
            <Logo />
            <AboutUs />
            <HowItWorks />
            <ChooseUs />
            <Stats />
            <Testimonials />
        </div>
    )
}
