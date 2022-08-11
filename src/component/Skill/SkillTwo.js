import React, {Component} from 'react';
import anime from 'animejs/lib/anime.es.js';
import SectionTitleTwo from '../../component/Banner/SectionTitleTwo';
import { Reveal } from "react-reveal/";
import { Link } from "react-scroll";

class SkillTwo extends Component {
    componentDidMount(){
        function countup(el, target) {
            let data = { count: 0 };
            anime({
              targets: data,
              count: [0, target],
              duration: 2000,
              round: 1,
              delay: 200,
              easing: 'easeOutCubic',
              update() {
                el.innerText = data.count.toLocaleString();
              } });
          }
          
          function makeCountup(el) {
            const text = el.textContent;
            const target = parseInt(text, 10);
          
            const io = new IntersectionObserver(entries => {
              entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                  countup(el, target);
                  io.unobserve(entry.target);
                }
              });
            });
          
            io.observe(el);
          }
          
          const els = document.querySelectorAll('[data-countup]');
          
        els.forEach(makeCountup);
    }
    render(){
        return(
            <section className="skill_area_two bg_color" id="skill">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="skill_content_two">
                                
                                <SectionTitleTwo 
                                  stitle="My Featured Skills" 
                                  btitle="I make web products & software that people actually want to use"/>
                                
                                <p>
                                  My design process is transparent, I communicate well and I am easy to work with. 
                                  These are some of the areas I like creating:
                                </p>

                                <div class="list-group">
                                <i className="bi bi-shield-check"></i>
                                  <a class="d-flex align-items-center list-group-item list-group-item-action">
                                    
                                    <button className='btn btn-outline-info p-2 ml-3 mr-4' />
                                      New websites & web applications
                                  </a>
                                  <a class="d-flex align-items-center list-group-item list-group-item-action list-group-item-light">
                                    <button className='btn btn-outline-info p-2 ml-3 mr-4' />
                                      Modernizing outdated websites
                                  </a>

                                  <a class="d-flex align-items-center list-group-item list-group-item-action">
                                    <button className='btn btn-outline-info p-2 ml-3 mr-4' />
                                      Webhooks & web integrations
                                  </a>
                                  <a class="d-flex align-items-center list-group-item list-group-item-action list-group-item-light">
                                    <button className='btn btn-outline-info p-2 ml-3 mr-4' />
                                      Business automations
                                  </a>

                                  <a class="d-flex align-items-center list-group-item list-group-item-action">
                                    <button className='btn btn-outline-info p-2 ml-3 mr-4' />
                                      Accessibility best practices
                                  </a>
                                </div>

                                <Reveal effect="fadeInUp" duration={900}>
                                  <Link 
                                    to="portfolio" 
                                    className="theme_btn active mt-5" 
                                    spy={true} 
                                    smooth={true} 
                                    offset={0} 
                                    duration={500}
                                  >
                                      See My Work
                                  </Link>
                                </Reveal>   

                            </div>
                        </div>
                        <div className="col-lg-6">
                          <img className="fact_img" src={require('../../image/mobile.svg')} alt="Animated people networking on their devices"/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default SkillTwo;