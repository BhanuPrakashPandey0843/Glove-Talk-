import React from 'react'
import SupportSection  from '../Components/SupportSection/SupportSection'
import HeroSection from '../Components/HeroSection/HeroSection'
import ContactUs from '../Components/Contactus/Contactus'
import MyStorySection from '../Components/MyStorySection/MyStorySection'
// import BlankSpace from '../Components/BlankSpace/BlankSpace'
import Testimonial from '../Components/Testimonial/Testimonial'
import Newsletter from '../Components/Newsletter/Newsletter'
const LandingPage = () => {
  return (
    <div>
         <HeroSection />
         <MyStorySection />
         <SupportSection />
         <Testimonial />
         <ContactUs />
         {/* <BlankSpace /> */}
         <Newsletter />
    </div>
  )
}

export default LandingPage       



