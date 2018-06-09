import React  from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free-brands';
import '@fortawesome/fontawesome-free-regular';


const Footer = ()=> {
  return (
      <div className="footer" aria-label="Footer" role="contentinfo">
          <div className="container">
              <div className="row">


                  <div className="col-md-4">
                      <div className="info-section">
                          <h2>About us</h2>
                          <ul>


                              <li><a href="/about/about-us/contact-us/">
                                  Contact us</a>
                              </li>


                              <li><a href="/about/about-us/about-govt-nz/">
                                  About Govt.nz</a>
                              </li>


                              <li><a href="/organisations/">
                                  Find contacts for government</a>
                              </li>


                          </ul>
                      </div>
                  </div>


                  <div className="col-md-4">
                      <div className="info-section">
                          <h2>About this website</h2>
                          <ul>


                              <li><a href="/about/about-this-website/govt-nz-scope/">
                                  The scope of Govt.nz</a>
                              </li>


                              <li><a href="/about/about-this-website/style-and-design/">
                                  Govt.nz's style and design guide</a>
                              </li>


                              <li><a href="/about/about-this-website/analytics-for-govt-nz/">
                                  Govt.nz analytics</a>
                              </li>


                          </ul>
                      </div>
                  </div>


                  <div className="col-md-4">
                      <div className="info-section">
                          <h2>Using this website</h2>
                          <ul>


                              <li><a href="/about/using-this-website/terms-of-use/">
                                  Terms of use</a>
                              </li>


                              <li><a href="/about/using-this-website/privacy/">
                                  Privacy</a>
                              </li>


                              <li><a href="/about/using-this-website/copyright-and-attribution/">
                                  Copyright</a>
                              </li>


                          </ul>
                      </div>
                  </div>


                  <div className="col-md-4">
                      <div className="to-top-link">
                          <p><a href="/#toplink"><span className="glyphicon glyphicon-chevron-up"
                                                       aria-hidden="true"></span> Back
                              to top</a></p>
                      </div>
                  </div>
              </div>
              <div className="row footer-push">
                  <div className="col-md-3 footer-icons">
                      <a href="/" className="ga-track-logo-footer-aog">
                          <img src="themes/dia-theme/images/AoG_logo_footer.png" alt="New Zealand Government"
                               height="20"
                               width="201"/>
                          <img className="print hidden" src="themes/dia-theme/images/newzealand-government-banner.png"
                               alt="New Zealand Government" height="20"
                               width="201"/>
                      </a>

                      <p className="copyright">Crown Copyright 2018</p>
                  </div>
                  <div className="col-md-1 copyright-icons">
                      <a href="https://creativecommons.org/licenses/by/4.0/">
                          <img src="themes/dia-theme/images/cc_icons.png"
                               alt="Creative Commons 4.0 International Licence" height="40" width="85"/>
                      </a>
                  </div>
                  <div className="col-md-8 footer-licence">
                      <p className="licence">Unless indicated otherwise, all content on <span
                          property="http://purl.org/dc/terms/title">Govt.nz</span> is licensed for re-use under a <a
                          href="https://creativecommons.org/licenses/by/4.0/">Creative
                          Commons 4.0 International Licence</a></p>
                  </div>
              </div>
          </div>
      </div>

    );
};


export default Footer;
