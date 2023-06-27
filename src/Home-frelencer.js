import React from 'react';
import NavbarTwo from './component/Navbar/NavbarTwo';
import FBanner from './component/Banner/frelencerBanner';
import PortfolioSlider from './component/Portfolio/PortfolioSlider';
import ServiceTwo from './component/ServiceTwo';
import TestimonialTwo from './component/Testimonial/TestimonialTwo';
import ContactTwo from './component/ContactTwo';
import SkillTwo from './component/Skill/SkillTwo';
import FooterTwo from './component/FooterTwo';
import ryanData from './component/jhonData';

export const Homefrelencer = () => (
  <div className="body_wrapper">
    {/* <NavbarTwo mClass="menu_two" mainlogo="logo-blue-large.png" stickylogo="logo-blue-large.png"/>   */}
    <NavbarTwo mClass="menu_two" mainlogo="logo-blue-large-plain.png" stickylogo="logo-blue-large-plain.png"/>  

    <FBanner jhonData={ryanData}/>
    <ServiceTwo rowFlex="flex-row-reverse"/>
    <SkillTwo/>
    <PortfolioSlider/>
    
    <TestimonialTwo/>
    <ContactTwo jhonData={ryanData}/>
    <FooterTwo jhonData={ryanData}/>
    
  </div>
)
