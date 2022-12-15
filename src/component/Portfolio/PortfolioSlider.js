import React, { Component } from "react";
import SectionTitleTwo from "../../component/Banner/SectionTitleTwo";
import Slider from "react-slick";
import { Link } from "react-router-dom";

class PortfolioSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: false,
      autoplay: true,
      pauseOnHover: true,
      autoplaySpeed: 5000,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <section className="portfolio_slider_area" id="portfolio">
          <div className="container">
            <SectionTitleTwo
              tCenter="text-center"
              stitle="My Portfolio"
              btitle="Check Out Some of my latest works."
            />
            {/* <p>
                            There are many, many, many different design elements to consider and I enjoy the challenge of finding something that fits well for you and your team. What are some of your favourite websites? What tools do you want to build?
                            What don’t you like about your current web presence?
                        </p>
                        <p>
                            Can’t find the style you are looking for? Lets talk about it. Send me a message and lets figure it out together.
                        </p> */}

            <Slider {...settings} className="portfolio_slider">
              {/* PORTFOLIO ITEM */}
              <div className="p_item">
                <div className="portfolio_content">
                  <a>
                    <img
                      src={require("../../image/acmg-cert-form.png")}
                      alt="a screenshot of the ACMG dashboard"
                    />
                  </a>
                  <div className="list-group">
                    <div className="d-flex flex-column justify-content-center">
                      <h4 className="pl-4">ACMG</h4>

                      <p className="m-0 pl-5">
                        <div className="btn btn-info p-1 mr-3" />
                        web app / business
                      </p>
                      <p className="m-0 pl-5">
                        <div className="btn btn-info p-1 mr-3" />
                        task automation
                      </p>
                      <p className="m-0 pl-5">
                        <div className="btn btn-info p-1 mr-3" />
                        business integration
                      </p>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button
                        type="button"
                        className="btn btn-outline-secondary m-1"
                        disabled
                      >
                        See Git
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-info m-1"
                        data-toggle="modal"
                        data-target="#acmgModelCenter"
                      >
                        See Info
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* PORTFOLIO ITEM */}
              <div className="p_item">
                <div className="portfolio_content">
                  <a>
                    <img
                      src={require("../../image/marilyn-logo.png")}
                      alt="a screenshot of Marilyn's website"
                    />
                  </a>
                  <div className="list-group">
                    <div className="d-flex flex-column justify-content-center">
                      <h4 className="pl-4">Marilyn's Windows</h4>

                      <p className="m-0 pl-5">
                        <div className="btn btn-info p-1 mr-3" />
                        website / interior design
                      </p>
                      <p className="m-0 pl-5">
                        <div className="btn btn-info p-1 mr-3" />
                        easy to use blog
                      </p>
                      <p className="m-0 pl-5">
                        <div className="btn btn-info p-1 mr-3" />
                        social media integration
                      </p>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button
                        type="button"
                        className="btn btn-outline-secondary m-1"
                        disabled
                      >
                        Live Site
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-info m-1"
                        data-toggle="modal"
                        data-target="#marilynModelCenter"
                      >
                        See Info
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* PORTFOLIO ITEM */}
              <div className="p_item">
                <div className="portfolio_content">
                  <a>
                    <img
                      src={require("../../image/mitch-twin.png")}
                      alt="a screenshot of the president's coach website"
                    />
                  </a>
                  <div className="list-group">
                    <div className="d-flex flex-column justify-content-center">
                      <h4 className="pl-4">The President's Coach</h4>

                      <p className="m-0 pl-5">
                        <div className="btn btn-info p-1 mr-3" />
                        new website / professional
                      </p>
                      <p className="m-0 pl-5">
                        <div className="btn btn-info p-1 mr-3" />
                        instagram integration
                      </p>
                      <p className="m-0 pl-5">
                        <div className="btn btn-info p-1 mr-3" />
                        forms / data collection
                      </p>
                    </div>

                    <div className="d-flex justify-content-center">
                    <Link
                      to={{ pathname: "https://the-presidents-coach.netlify.app/" }}
                      target={"_blank"}
                      rel="noopener noreferrer"
                    >
                      <button
                          type="button"
                          className="btn btn-outline-secondary m-1"
                          disabled
                        >
                          Live Site
                        </button>
                    </Link>

                      <button
                        type="button"
                        className="btn btn-outline-info m-1"
                        data-toggle="modal"
                        data-target="#presidentModelCenter"
                      >
                        See Info
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </section>

        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="acmgModelCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="acmgModelCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="acmgModelCenterTitle">
                  Association of Canadian Mountain Guides
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div className="card">
                <img
                  src={require("../../image/acmg-cert-heading.png")}
                  className="card-img-top p-3"
                  alt="ACMG Company Logo"
                />
                <div className="card-body">
                  <h5 className="card-title text-dark">Company Info</h5>
                  <p className="card-text">
                    The ACMG is a non-profit society that sets and maintains the
                    standards of admission and instructional practice of
                    professional mountain guiding, climbing and hiking in
                    Canada. They do this by coordinating internationally
                    recognized training/certification programs.
                  </p>
                  <div className="text-right small-small">
                    <Link
                      to={{ pathname: "https://www.acmg.ca" }}
                      target={"_blank"}
                      rel="noopener noreferrer"
                    >
                      ACMG's Official Website
                    </Link>
                  </div>

                  <h5 className="card-title text-dark">Task Automation</h5>
                  <p className="card-text">
                    This web app frees up precious time in the TAP team’s
                    workflow by automating repetitive administrative tasks.
                    Accessed via the web, users are first prompted by a secure
                    sign-in, which then gives access to an easy-to-use dashboard
                    that controls custom automation tools.
                  </p>
                  <p className="card-text">
                    This application offloads manual admin tasks that were once
                    time-consuming, by setting up data pipelines with TAP’s
                    pre-existing vendors and leveraging Google’s suite of APIs.
                  </p>

                  <h6 className="card-title text-info special">
                    Tech Stack Used
                  </h6>
                  <p className="card-text small-small">
                    Handlebars | Node | Express | MongoDB | Ouath2.0
                  </p>

                  <h6 className="card-title text-info special">
                    Other Tech Used
                  </h6>
                  <p className="card-text small-small">
                    <Link
                      to={{ pathname: "https://developers.google.com" }}
                      target={"_blank"}
                      rel="noopener noreferrer"
                    >
                      GoogleAPIs
                    </Link>
                    {" | "}
                    <Link
                      to={{ pathname: "https://www.ampeducator.com/api.php" }}
                      target={"_blank"}
                      rel="noopener noreferrer"
                    >
                      AmpEd
                    </Link>
                    {" | "}
                    <Link
                      to={{ pathname: "https://pdf-lib.js.org" }}
                      target={"_blank"}
                      rel="noopener noreferrer"
                    >
                      PDFLib
                    </Link>
                    {""}
                    {/* <Link to={{pathname: 'https://www.papaparse.com'}} target={"_blank"}>  
                                            PapaParse 
                                            </Link>{' | '} */}
                  </p>
                </div>
              </div>

              <div className="modal-footer">
                <Link
                  to={{ pathname: "https://github.com/ryanpilar/" }}
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <button type="button" className="btn btn-info" disabled>
                    See GIT
                  </button>
                </Link>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End of Modal --> */}

        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="marilynModelCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="marilynModelCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="marilynModelCenterTitle">
                  Marilyn's Windows & Interiors
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div className="card">
                <img
                  src={require("../../image/marilyn-face.png")}
                  className="card-img-top p-3"
                  alt="Marilyns Windows Company Logo"
                />
                <div className="card-body">
                  <h5 className="card-title text-dark">Company Info</h5>
                  <p className="card-text">
                    Together with her team of professional seamstresses and
                    installers, Marilyn is defining the exquisite art of custom
                    design and couture for window drapery and dressings. For
                    decades, she has been regarded as best in class and sought
                    out by the most exclusive clients.
                  </p>

                  <h5 className="card-title text-dark">A Brand New Website</h5>
                  <p className="card-text">
                    A lot has changed since Marilyn first launched her web
                    presence in 2010. Web technologies advanced and she wanted
                    to update her website to be more in line with current
                    designs and trends.
                  </p>
                  <p className="card-text">
                    A new modern website was built alongside web integrations to
                    help manage blogging content and a social media presence. An
                    easy-to-use Blog now enables content creators to post
                    without needing a technical background.
                  </p>

                  <h6 className="card-title text-info special">
                    Tech Stack Used
                  </h6>
                  <p className="card-text small-small">
                    Node | React | Contentful | Bootstrap
                  </p>

                  <h6 className="card-title text-info special">
                    Other Tech Used
                  </h6>
                  <p className="card-text small-small">
                    <Link
                      to={{ pathname: "https://www.contentful.com/developers/docs/references/content-delivery-api/" }}
                      target={"_blank"}
                      rel="noopener noreferrer"
                    >
                      Content Delivery API
                    </Link>
                    {" | "}
                    <Link
                      to={{
                        pathname: "https://getbootstrap.com/docs/5.2/getting-started/introduction/ ",
                      }}
                      target={"_blank"}
                      rel="noopener noreferrer"
                    >
                      Bootstrap Docs
                    </Link>
                  </p>
                </div>
              </div>
              <div className="modal-footer">
                <Link
                  to={{ pathname: "https://marilyns-windows.netlify.app/" }}
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <button type="button" className="btn btn-primary" disabled>
                    Live Site
                  </button>
                </Link>
                <Link
                  to={{
                    pathname: "https://github.com/ryanpilar/marilyns-windows-2",
                  }}
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <button type="button" className="btn btn-info">
                    See GIT
                  </button>
                </Link>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End of Modal --> */}
        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="presidentModelCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="presidentModelCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="presidentModelCenterTitle">
                  The President's Coach
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div className="card">
                <img
                  src={require("../../image/mitch-portrait.png")}
                  className="card-img-top p-3"
                  alt="Mitch having fun singing"
                />
                <div className="card-body">
                  <h5 className="card-title text-dark">Company Info</h5>
                  <p className="card-text">
                    Mitchell Creasey is a celebrity coach who specializes in
                    helping people pleasers, perfectionists, and self-doubters
                    to get calm, clear, and confident. You may recognize him
                    from one of his many TV appearances where he is regularly
                    invited as a keynote speaker.
                  </p>
                  <h5 className="card-title">A Full Feature Website</h5>
                  <p className="card-text">
                    The president’s coach online presence demands flexibility.
                    Many people arrive at Mitch’s website for many different
                    reasons and he needs to accommodate that.
                  </p>
                  <p className="card-text">
                    This is a fully-featured website that includes a Patreon
                    payment gateway, social media integration, a blog, form/data
                    collection and an area where you can book an appointment
                    with Mitch.
                  </p>
                  <h6 className="card-title text-info special">
                    Tech Stack Used
                  </h6>
                  <p className="card-text small-small">
                    Node | React | Cloudinary | Contentful
                  </p>

                  <h6 className="card-title text-info special">
                    Other Tech Used
                  </h6>
                  <p className="card-text small-small">
                    <Link
                      to={{ pathname: "https://www.contentful.com/developers/docs/references/content-delivery-api/" }}
                      target={"_blank"}
                      rel="noopener noreferrer"
                    >
                      Content Delivery API
                    </Link>
                    {" | "}
                    
                  
                    <Link
                      to={{ pathname: "https://www.patreon.com/ " }}
                      target={"_blank"}
                      rel="noopener noreferrer"
                    >
                      Patreon
                    </Link>
                    {" | "}
                    <Link
                      to={{ pathname: "https://www.honeybook.com/ " }}
                      target={"_blank"}
                      rel="noopener noreferrer"
                    >
                      Honeybook
                    </Link>
                  </p>
                </div>
              </div>

              <div className="modal-footer">
                <Link
                  to={{ pathname: "https://the-presidents-coach.netlify.app/" }}
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <button
                    type="button"
                    className="btn btn-primary"
                    disabled
                  >
                    Live Site
                  </button>
                </Link>
                <Link
                  to={{
                    pathname:
                      "https://github.com/ryanpilar/the-presidents-coach/",
                  }}
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <button
                    type="button"
                    className="btn btn-info"
                    // disabled
                  >
                    See GIT
                  </button>
                </Link>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End of Modal --> */}
      </div>
    );
  }
}

export default PortfolioSlider;
