import React from 'react'
import "../Herosection/Herosection.scss"
import Desktop from "../../assets/images/Desktop.png"

function HeroSection() {
    return (
        <>
            <section className="hero-section">
                <div className="container">
                    <div className="text-center hero-desc">
                        <h1>Design <span className="first-span">Faster</span> <span className="second"> & </span>Better</h1>
                        <p className="">Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem
                            mauris.<br />Pharetra, eu imperdiet ipsum ultrices amet, dui sit suspendisse.</p>
                        <div className="d-flex justify-content-center align-items-center hero-btn">
                            <li><a href="" className="join-btn">Join Now</a></li>
                            <li><a href="" className="view-btn">View Demo</a></li>
                        </div>
                        <div className="hero-img">
                            <img src={Desktop} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection
