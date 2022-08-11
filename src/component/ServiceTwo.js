import React, {Component} from 'react';
import SectionTitleTwo from '../component/Banner/SectionTitleTwo';
import { Reveal } from "react-reveal/";
import { Link } from "react-scroll";


class ServiceTwo extends Component{
    render(){
        let {rowFlex} = this.props;
        return(
            <div className="service_area_two bg_color" id="service">
                <div className="container">
                    <div className={`row align-items-center ${rowFlex}`}>
                        <div className="col-lg-5">
                            
                            <div className="service_content">
                                <SectionTitleTwo stitle="What I do ?" btitle="Solving problems is what i do"/>
                                <p>
                                    We live in such a modern era where all business’s now need tech. Do you need a website or a mobile app? Something custom or a dev? 
                                </p>
                                <p>
                                    I offer modern solutions for growing your team and business. Tell me about your tech project, lets connect.
                                </p>

                                <Reveal effect="fadeInUp mt-3" duration={900}>
                                    <Link 
                                        to="contacts" 
                                        className="theme_btn active" 
                                        spy={true} 
                                        smooth={true} 
                                        offset={0} 
                                        duration={500}
                                        >
                                            Contact me
                                    </Link>
                                </Reveal>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="service_img">
                                        <img src={require ('../image/service.svg')} alt="An animated person solving problems in many different ways"/>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="service_img">
                                        <img src={require ('../image/service.svg')} alt="An animated person solving problems in many different ways"/>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                    <div className="service_img">
                                        <img src={require ('../image/service.svg')} alt="An animated person solving problems in many different ways"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ServiceTwo;
