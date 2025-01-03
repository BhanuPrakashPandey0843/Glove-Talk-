import React from 'react'

import AboutHero from '../Components/AboutHero/AboutHero';
import HowItWorks from '../Components/HowItWorks/HowItWorks';
import ContactForm from '../Components/ContactForm/ContactForm';
import Newsletter from '../Components/Newsletter/Newsletter' ;

const ContactPage = () => {
  return (
    <div>
     
       <AboutHero />
       <HowItWorks/>
       <ContactForm/>
       <Newsletter/>
      
    </div>
  )
}

export default ContactPage
