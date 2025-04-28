import React from 'react'
import "../footersection/footersection.scss"
import youtube from "../../assets/images/youtube.svg"
import facebook from "../../assets/images/facebook.svg"
import instagram from "../../assets/images/insta.svg"
import x from "../../assets/images/x.svg"
import linkedin from "../../assets/images/linkdin.svg"

function FooterSection() {
  return (
    <>
          <footer className="footer-section">
        <div className="container">
            <div className="row footer-desc">
                <div className="col-md-2 col-sm-12 footer-logo">
                    <h4 className="fw-bold">weeb</h4>
                </div>
                <div className="col-md-10 footer-links">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 mb-3">
                            <h6 className="text-uppercase">Product</h6>
                            <ul className="product-links" id="product-links">
                                <li>Pricing</li>
                                <li>Overview</li>
                                <li>Browse</li>
                                <li>Accessibility</li>
                                <li>Five</li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6 mb-3">
                            <h6 className="text-muted text-uppercase">Solutions</h6>
                            <ul className="solution-links" id="solution-links">
                                <li>Brainstorming</li>
                                <li>Ideation</li>
                                <li>Wireframing</li>
                                <li>Research</li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6 mb-3">
                            <h6 className="text-muted text-uppercase">Resources</h6>
                            <ul className="resource-links" id="resource-links">
                                <li>Help Center</li>
                                <li>Blog</li>
                                <li>Tutorials</li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6 mb-3">
                            <h6 className="text-muted text-uppercase">Company</h6>
                            <ul className="company-links" id="company-links">
                                <li>About</li>
                                <li>Press</li>
                                <li>Events</li>
                                <li>Careers</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-between align-items-center flex-wrap footer-trademark">
                <p className="">© 2023 Weeb, Inc. All rights reserved.</p>
                <div className="d-flex gap-3 footer-icons" id="footer-icons">
                    <a href="https://www.youtube.com/" title="youtube" target="_blank"><img src={youtube} alt=""/></a>
                    <a href="https://www.facebook.com/" title="facebook" target="_blank"><img src={facebook} alt=""/></a>
                    <a href="https://x.com/" title="x" target="_blank"><img src={x} alt=""/></a>
                    <a href="https://www.instagram.com/" title="instagram" target="_blank"><img src={instagram} alt=""/></a>
                    <a href="https://www.linkedin.com/" title="linkdin" target="_blank"><img src={linkedin} alt=""/></a>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default FooterSection
