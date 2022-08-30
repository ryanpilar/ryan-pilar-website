import React, { Component } from "react";
import { Reveal } from "react-reveal/";
import Fade from "react-reveal/Fade";

import { Link } from "react-scroll";

class frelencerBanner extends Component {

  render() {
    let jhonData = this.props.jhonData;
    let { className } = this.props;
    return (
      <section className="frelencer_banner_area" id="home">
        <div className="home_bubble">
          <div className="bubble b_one"></div>
          <div className="bubble b_three"></div>
          <div className="bubble b_four"></div>
          <div className="bubble b_five"></div>
          <div className="bubble b_six"></div>
        </div>

        <Reveal effect="fadeInRight" duration={500}>
          <img
            className="s_shap"
            src={require("../../image/banner_img.svg")}
            alt=""
          />
        </Reveal>

        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="frelencer_content mr-2">
                <Reveal effect="fadeInUp" duration={500}>
                  <h2 className="t_color">
                    <br />I'm Ryan Pilar
                    <br />Your Local
                    <br /><span>FULLSTACK</span>
                    <br />Developer
                  </h2>
                </Reveal>
                <Reveal effect="fadeInUp" duration={1200}>
                  <h4>
                    <span>

                      I am a freelance software developer that specializes in building helpful, 
                      modern websites and applications for small to medium sized businesses. 

                      <Fade top cascade>
                        <ul className="list-inline pt-2 pl-0 mb-0">
                          
                          <li class="list-inline-item p-1">
                            <Link
                              className="icon_mail_alt"
                              activeClass="active"
                              to="contacts"
                              spy={true}
                              smooth={true}
                              offset={-86}
                              duration={500}
                            >
                            </Link>
                          </li>

                          {jhonData.socialLinks.map((item) => {
                            return (
                              <li class="list-inline-item p-1" key={item.name}>
                                <a href={item.url} target="_blank">
                                  <i className={item.className}></i>
                                </a>
                              </li>
                            );
                          })}

                          <li class="list-inline-item p-1">
                            <a href='https://github.com/ryanpilar/' target="_blank" >
                              GIT
                            </a>
                          </li>

                        </ul>
                      </Fade>
                    </span>
                  </h4>
                </Reveal>

                <Reveal effect="fadeInUp" duration={900}>
                  <Link to="contacts" className="theme_btn active" spy={true} smooth={true} offset={0} duration={500}>
                    Hire me
                  </Link>
                </Reveal>
                
              </div>
            </div>

            <div className="col-lg-6">
              <div className="frelencer_img">

                <Reveal effect="fadeInLeft" duration={1400}>
                  <img
                    className="f_img_one"
                    src={require("../../image/f_man.png")}
                    alt="animated man sitting in an office chair"
                  />
                </Reveal>
                <Reveal effect="fadeInRight" duration={1200}>
                  <img
                    className="f_img_two"
                    src={require("../../image/table.png")}
                    alt="computer desk and table"
                  />
                </Reveal>
                <Reveal effect="fadeInDown" duration={1600}>
                  <img
                    className="f_img_three"
                    src={require("../../image/cup.png")}
                    alt="computer mouse, misc paper docments and a cup of coffee a"
                  />
                </Reveal>
                <Reveal effect="fadeInDown" duration={1600}>
                  <img
                    className="f_img_four"
                    src={require("../../image/shadow.png")}
                    alt=""
                  />
                </Reveal>
                <Reveal effect="fadeInDown" duration={2000}>
                  <div className="f_img_five">
                    <img
                      className=""
                      src={require("../../image/js.png")}
                      alt="javascript icon"
                    />
                  </div>
                </Reveal>
                <div className="f_img_six">
                  <img
                    className=""
                    src={require("../../image/py.png")}
                    alt="python icon"
                  />
                </div>
                <div className="f_img_seven">
                  <img
                    className=""
                    src={require("../../image/search.png")}
                    alt="search icon"
                  />
                </div>
                <div className="f_img_eight">
                  <img
                    className=""
                    src={require("../../image/arrow.png")}
                    alt="arrow icon"
                  />
                </div>
                <div className="f_img_nine">
                  <img
                    className=""
                    src={require("../../image/brakets.png")}
                    alt="curly brackets icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default frelencerBanner;
