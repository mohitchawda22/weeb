import React from 'react'
import "../customerSection/customerSection.scss"
import arrow from "../../assets/images/arrow.svg"
import shape2 from "../../assets/images/Shapes2.png"

function CustomerSection() {
    return (
        <>
            <section className="customer-section">
                <div className="container">
                    <div className="row justify-content-between customer-desc">
                        <div className="col-md-8 col-sm-12">
                            <h2>Customers</h2>
                            <h1><span className="span">Target</span> <span className="square-box">cu</span>stomers with our powerful AI
                                kit</h1>
                            <p className="para">Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc.Ultrices nibh
                                sapien elit gravida ac, rutrum molestie adipiscing lacinia.</p>
                            <a href="">How Targeting Customers Works <img src={arrow} className="ps-3"
                                alt="" /></a>
                        </div>
                        <div className="col-md-4 col-sm-12 align-content-center">
                            <img src={shape2} alt="" />
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default CustomerSection
