import React from 'react';
import Slider from "react-slick";
import "../sliderSection/sliderSection.scss";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import rightSm from "../../assets/images/arrow-right-sm.svg";
import leftSm from "../../assets/images/arrow-left-sm.svg";
import arrowRight from "../../assets/images/arrow-right.svg";
import Picture from "../../assets/images/Picture.png";
import Picture2 from "../../assets/images/Picture2.png";
import Picture3 from "../../assets/images/Picture3.png";

function SliderSection() {
    const eventCardImage = [
        { img: Picture, title: "Design Thinking", desc: "Wild Horse Event", badge: "Design Thinking" },
        { img: Picture2, title: "Festival", desc: "Music & Colors", badge: "Festival" },
        { img: Picture3, title: "Bootcamp", desc: "Happy Father’s Day", badge: "Bootcamp" },
        { img: Picture2, title: "Design Thinking", desc: "Wild Horse Event", badge: "Festival" },
        { img: Picture, title: "Design Thinking", desc: "Happy Father’s Day", badge: "Design Thinking" },
    ];

    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <div className="custom-arrow next" onClick={onClick}>
                <img src={leftSm} alt="Next" />
            </div>
        );
    };

    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div className="custom-arrow prev" onClick={onClick}>
                <img src={rightSm} alt="Prev" />
            </div>
        );
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 998,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    arrows: false,
                    dots: true
                }
            }
        ]
    };

    return (
        <section className="slider-section">
            <div className="container">
                <div className="d-flex align-content-center justify-content-between align-items-center slider-heading">
                    <h2>Design events near your</h2>
                    <a href="#" className="my-auto">
                        Explore Events 
                        <img src={arrowRight} className="ps-3" alt="arrow" />
                    </a>
                </div>

                <div className="wrapper">
                    <Slider {...settings}>
                        {eventCardImage.map((img, index) => (
                            <div className="event-card" key={index}>
                                <div className="position-relative">
                                    <img src={img.img} className="card-img-top" alt={img.title} />
                                    <span className="badge position-absolute top-0 m-3 px-2 py-1 z-1">{img.badge}</span>
                                </div>
                                <div className="card-desc">
                                    <h5 className="card-title">{img.title}</h5>
                                    <p className="card-text">{img.desc}</p>
                                    <a href="#" className="d-flex">
                                        Buy Tickets
                                        <img src={arrowRight} alt="arrow" className="ps-3" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default SliderSection;
