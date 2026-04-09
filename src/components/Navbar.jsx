import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <div className="logo">
                    <img src="./public/logo.png" alt="" />
                    <h2>Equestria</h2>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="nav-item">
                        <li><a href="javascript:void(0)">Home</a></li>
                        <li><a href="javascript:void(0)">Pages</a></li>
                        <li><a href="javascript:void(0)">Services</a></li>
                        <li><a href="javascript:void(0)">Riding School</a></li>
                        <li><a href="javascript:void(0)">News</a></li>
                        <li><a href="javascript:void(0)">Contacts</a></li>
                        <li><a href="javascript:void(0)"><i class="fa-brands fa-sistrix"></i></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
