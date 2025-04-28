import React from 'react'
import "../powerfulsection/powerfullSection.scss"
import Desktop1 from "../../assets/images/Desktop1.png"

function PowerfullSection() {
  return (
   <>
         <section className="powerful-section">
        <div className="container">
            <div className="row justify-content-between powerful-desc">
                <div className="col-md-5 col-sm-12 align-content-center p-4 ">
                    <h1>Powerful</h1>
                    <h2>All the tools you can imagine</h2>
                    <p>Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc. Ultrices nibh sapien elit
                        gravida ac, rutrum molestie adipiscing lacinia.</p>
                </div>
                <div className="col-md-7 col-sm-12">
                    <img src={Desktop1} alt=""/>
                </div>
            </div>
        </div>
    </section>
   </>
  )
}

export default PowerfullSection
