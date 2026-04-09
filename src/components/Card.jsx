import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
function Card() {
    return (
        <div className="continer">
            <div className="card text-center">
                <div className="row">
                    <div className="coll-4">
                        <div class="card-body">
                            <h2 class="card-title">Special title treatment</h2>
                            <h5 class="card-title">Beach Rides, Pony Rides</h5>
                            <p class="card-text">Lots of riding services from child or adult novices to advanced dressage & jumping.</p>
                        </div>
                    </div>
                    <div className="coll-4">
                        <div class="card-body">
                            <h2 class="card-title">Horse Breeding</h2>
                            <h5 class="card-title">Pet, Groom, Feed</h5>
                            <p class="card-text">We have a variety of services for horse breeders: affordable grooming & feeding.</p>
                        </div>
                    </div>
                    <div className="coll-4">
                        <div class="card-body">
                            <h2 class="card-title">Other Services</h2>
                            <h5 class="card-title">Gift Certificates, Photoshoots</h5>
                            <p class="card-text">If you are a real fan of horses, then you should take a look our additional services.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card

