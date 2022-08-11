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
    <NavbarTwo mClass="menu_two" mainlogo="logo-blue.png" stickylogo="logo-blue.png"/>  
    <FBanner jhonData={ryanData}/>
    <ServiceTwo rowFlex="flex-row-reverse"/>
    <SkillTwo/>
    <PortfolioSlider/>
    
    <TestimonialTwo/>
    <ContactTwo jhonData={ryanData}/>
    <FooterTwo jhonData={ryanData}/>
    
  </div>
)
