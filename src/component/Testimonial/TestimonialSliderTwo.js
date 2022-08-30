import React, {Component} from 'react';
import Slider from 'react-slick';
import { Reveal } from "react-reveal/";
import { Link } from "react-scroll";



 class TestimonialSliderTwo extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        arrows: false,
        autoplay: true,
        pauseOnHover:true,
        autoplaySpeed: 11000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div>
          <Slider {...settings} className="testimonial_slider_Two">
                <div className="item">
                    <p>
                        Solving problems with technology is what I do. I like to build dynamic front-ends, 
                        work about a database and do the plumbing in between. Python and JavaScript are my 
                        languages of choice and I use these tools to build elegant, modern web applications 
                        to streamline you and your team. 
                    </p>
                </div>
                
                <div className="item">
                    <p>
                        People know me for my great instincts, entrepreneurial mindset and my ability to balance 
                        best practices with productivity while staying within budgets.
                    </p>

                    <Reveal effect="fadeInUp" duration={900}>
                        <Link to="contacts" className="theme_btn active mt-2" spy={true} smooth={true} offset={0} duration={500}>
                            Send me a Message
                        </Link>
                    </Reveal>
                </div>

                <div className="item">
                    <p>
                        Clear proposals, regular updates and expectations to be met is what I strive to minimally deliver. 
                        If you would like to see more of what I am up to, you can check me out on twitter...
                    </p>

                    {/* twitter component */}
                    <div className='d-flex flex-direction-row justify-content-center align-items-center pr-5'>
                        <div className="media">
                            <a href="https://twitter.com/_ryanpilar_/" target="_blank">
                                <div className="author_img">
                                    
                                        <img src={require('../../image/ryan-twitter.png')} alt="Ryan Twitter Profile Pic"/>
                                    
                                </div>
                                <div className="media-body">
                                    <h6>Ryan Pilar</h6>
                                    <span>
                                        @_ryanpilar_
                                    </span>
                                </div>
                            </a>

                        </div>
                        <a href="https://twitter.com/_ryanpilar_/" target="_blank">
                        <div className="d-flex align-items-center theme_btn ml-4 p-0 pl-4 pr-4">
                            
                                Follow Me
                                <a className="social_twitter pl-2" />
                        </div>
                        </a>
                    </div>


                    
                </div>
          </Slider>
        </div>
      );
    }
  }
  export default TestimonialSliderTwo;