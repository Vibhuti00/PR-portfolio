import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
function Hero() {
    return (
        <div className="carousel slid" id="carousel">
            <div className="carousel-inner">
                <div className="carousel-item">
                    <div>
                        <img src="./public/heroimg.jpg" alt="" />
                        <h1>Where Horse & Rider Become One <span>Unique and outstanding horse riding experience</span></h1>
                    </div>
                    <button className="btn btn-danger">Become a Club Member</button>
                </div>
                <div className="carousel-item">
                    <div>
                        <img src="./public/heroimg.jpg" alt="" />
                        <h1>Discover the Equestrian World <span>A variety of horse-related activities for every member</span></h1>
                    </div>
                    <button className="btn btn-warning">Become a Club Member</button>
                </div>
                <div className="carousel-item">
                    <div>
                        <img src="./public/heroimg.jpg" alt="" />
                        <h1>HeroRiding School for Everyone <span>Affordable training programs available to everyone</span></h1>
                    </div>
                    <button className="btn btn-primary">Become a Club Member</button>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}
export default Hero

