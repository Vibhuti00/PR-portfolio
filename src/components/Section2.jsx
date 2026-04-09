import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
function Section2() {
    return (
        <section className="container-fluid py-5" style={{ background: '#2b1814 url("your-horse-image.jpg") no-repeat center center', backgroundSize: 'cover' }}>
            <div className="container py-5">
                <h2 className="text-white text-center fw-bold mb-5 display-5">Appointment</h2>
                <form>
                    <div className="row g-3 mb-4">
                        <div className="col-lg-3 col-md-6">
                            <div className="input-group">
                                <span className="input-group-text bg-white border-end-0 py-3"><i className="bi bi-person text-warning" /></span>
                                <input type="text" className="form-control border-start-0 fst-italic text-uppercase shadow-none" placeholder="Full Name" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="input-group">
                                <span className="input-group-text bg-white border-end-0 py-3"><i className="bi bi-phone text-warning" /></span>
                                <input type="tel" className="form-control border-start-0 fst-italic text-uppercase shadow-none" placeholder="Phone Number" />
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="input-group">
                                <span className="input-group-text bg-white border-end-0 py-3"><i className="bi bi-calendar3 text-warning" /></span>
                                <input type="text" className="form-control border-start-0 fst-italic text-uppercase shadow-none" placeholder="Date" onfocus="(this.type='date')" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="input-group">
                                <span className="input-group-text bg-white border-end-0 py-3"><i className="bi bi-watch text-warning" /></span>
                                <input type="text" className="form-control border-start-0 fst-italic text-uppercase shadow-none" placeholder="Time" onfocus="(this.type='time')" />
                            </div>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-12">
                            <div className="input-group">
                                <span className="input-group-text bg-white border-end-0 align-items-start pt-3"><i className="bi bi-pencil-fill text-warning" /></span>
                                <textarea className="form-control border-start-0 fst-italic text-uppercase shadow-none" rows={4} placeholder="Message" defaultValue={""} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <button type="submit" className="btn btn-lg px-5 py-3 fw-bold text-uppercase" style={{ backgroundColor: '#e64a19', borderColor: '#e64a19', color: 'white' }}>
                                Book Now
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>

    )
}

export default Section2

