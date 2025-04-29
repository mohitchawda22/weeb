import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import HeroSection from "../components/Herosection/HeroSection"
import CompanySection from "../components/companySection/CompanySection"
import FeatureSection from "../components/featuresection/FeatureSection"
import CustomerSection from "../components/customerSection/CustomerSection"
import PowerfullSection from "../components/powerfulsection/PowerfullSection"
import TestimonialSection from "../components/testimonialsection/TestimonialSection"
import SliderSection from "../components/sliderSection/SliderSection"
import FooterSection from "../components/footersection/FooterSection"

function Home() {
  return (
    <>
        <Navbar></Navbar>
        <HeroSection></HeroSection>
        <CompanySection></CompanySection>
        <FeatureSection></FeatureSection>
        <PowerfullSection></PowerfullSection>
        <CustomerSection></CustomerSection>
        <PowerfullSection></PowerfullSection>
        <TestimonialSection></TestimonialSection>
        <SliderSection></SliderSection>
        <FooterSection></FooterSection>
    </>
  )
}

export default Home
