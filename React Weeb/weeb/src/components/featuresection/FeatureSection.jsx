import React from 'react'
import "../featuresection/featureSection.scss"
import shapes from "../../assets/images/shapes.png"
import arrow from "../../assets/images/arrow.svg"

function FeatureSection() {
    return (
        <>
            <section className="feature-section">
                <div className="container">
                    <div className="row feature-desc">
                        <div className="col-md-8 col-sm-12 align-content-center feature-desc1 ">
                            <h1>Discover</h1>
                            <h4 className=""><span className="span">Unlimited</span> <span className="rectangle-box">ideas</span> for your
                                next great projects</h4>
                            <p className="para">Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc.Ultrices nibh
                                sapien elit gravida ac, rutrum molestie adipiscing lacinia.</p>
                            <a href="">Discover Ideas <img src={arrow} alt="" className="ps-2" /></a>
                        </div>
                        <div className="col-md-4 col-sm-12 my-auto feature-img">
                            <img src={shapes} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FeatureSection
