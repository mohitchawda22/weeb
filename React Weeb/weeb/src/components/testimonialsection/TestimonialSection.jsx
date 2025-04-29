import React from 'react'
import "../testimonialsection/testimonialsection.scss"
import arrow from '../../assets/images/arrow.svg'
import phone from "../../assets/images/Mobile-App-Placeholder-.png"
import user from "../../assets/images/User Thumb.png"

function TestimonialSection() {
  return (
    <>
        <section className="testimonial-section">
        <div className="container">
            <div className="row testimonial-desc">
                <div className="col-md-4 col-sm-12 align-content-center">
                    <h3>Testimonials</h3>
                    <h2><span>Bigapp</span> got to the next level</h2>
                    <a href="">View Case Study <img src={arrow} alt="" className="ps-3"/></a>
                </div>
                <div className="col-md-4 col-sm-12 testimonial-img">
                    <img src={phone} alt=""/>
                </div>
                <div className="col-md-4 col-sm-12 align-content-center user-desc">
                    <p>“Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis
                        scelerisque faucibus.”</p>
                    <div className="d-flex pt-3">
                        <img src={user} alt=""/>
                        <div className="my-auto ps-3">
                            <p>Rwanda Melflor</p>
                            <h6>Co-founder Bigapp</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default TestimonialSection
