import React from 'react'
import "../../components/Navbar/Navbar.scss"
import JoinButton from '../ui/JoinButton'

function Navbar() {

    window.addEventListener("scroll",function(){
        const navbar=document.getElementById("navbar")
        if (window.scrollY > 50){
          navbar.classList.add("scrolled");
          console.log("scroll");
        }else{
          navbar.classList.remove("scrolled");
        }
    })

    return (
        <>
            <header className="container d-flex justify-content-center align-items-center sticky-top">
                <nav className="navbar navbar-expand-md" id="navbar">
                    <div className="container justify-content-between">
                        <a className="pe-5" href="#">
                            <h5 className="my-auto">weeb</h5>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-end my-auto" tabIndex="-1" id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Weeb</h5>
                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-start align-items-center flex-grow-1 pe-5 my-auto"
                                    id="nav-menu">
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Solutions</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Pricing</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Resources</a>
                                    </li>
                                </ul>
                                <ul className="d-flex justify-content-between align-items-center my-auto gap-4">
                                    <li className=""><a href="" className="text-decoration-none">Log In</a></li>
                                    <JoinButton/>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar
