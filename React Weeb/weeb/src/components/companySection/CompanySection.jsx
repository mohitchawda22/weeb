import React from 'react'
import "../companySection/companysection.scss"
import logo1 from "../../assets/images/logo1.svg"
import logo2 from "../../assets/images/logo2.svg"
import logo3 from "../../assets/images/logo3.svg"
import logo4 from "../../assets/images/logo4.svg"
import logo5 from "../../assets/images/logo5.svg"


function CompanySection() {
  return (
   <>
    <section className="companies-section">
        <div className="container">
            <div className="text-center companies-desc">
                <h2>Join Leading Companies</h2>
            </div>
            <div className="d-flex justify-content-evenly align-items-center companies-img flex-wrap" id="img-div">
                <img src={logo1} alt=""/>
                <img src={logo2} alt=""/>
                <img src={logo3} alt=""/>
                <img src={logo4} alt=""/>
                <img src={logo5} alt=""/>
            </div>
        </div>
    </section>
   </>
  )
}

export default CompanySection
