import React, { Component } from "react";
import Sticky from "react-stickynode";
import { Link } from "react-scroll";

class NavbarTwo extends Component {
  render() {
    var { mClass, mContainer, mainlogo, stickylogo } = this.props;
    return (
      
      <Sticky top={0} innerZ={1039} activeClass="navbar_fixed">
        <nav className={`navbar navbar-expand-lg navbar-light ${mClass}`}>
          <div className={`container ${mContainer}`}>
            
            <a className="navbar-brand logo_h" href="./Home-frelencer">
              <img src={require("../../image/" + mainlogo)} alt="" />
              <img src={require("../../image/" + stickylogo)} alt="" />
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            <div
              className="collapse navbar-collapse offset"
              id="navbarSupportedContent"
            >
              <ul className="nav navbar-nav m-auto">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="service"
                    spy={true}
                    smooth={true}
                    offset={-86}
                    duration={500}
                  >
                    What I Do
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={-86}
                    duration={500}
                  >
                    My Work
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="testimonial"
                    spy={true}
                    smooth={true}
                    offset={-86}
                    duration={500}
                  >
                    My Ethos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={-86}
                    duration={500}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Sticky>
    );
  }
}

export default NavbarTwo;
