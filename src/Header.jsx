import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/savedsources/saved_resource.jpeg';
const Header = () => {
    return (
        <>
            <section className="menu menu2 cid-uTAqkzEoyp" id="menu-5-uTAqkzEoyp">
                <nav className="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg navbar-short">
                    <div className="container">
                    <div className="navbar-brand">
                        <span className="navbar-logo">
                                    <a href="https://mobiri.se/">
                                        <img src={logo} style={{ height: '4.3rem' }} alt="TechWave Logo" />
                                    </a>
                                </span>
                                <span className="navbar-caption-wrap">
                        <a className="navbar-caption text-black display-4" href="https://mobiri.se/">TechPulse</a>
                        </span>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-bs-toggle="collapse" data-target="#navbarSupportedContent" data-bs-target="#navbarSupportedContent" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <div className="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        </div>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav nav-dropdown" data-app-modern-menu="true">
                        <li className="nav-item">
                            <Link className="nav-link link text-black display-4" to="/" aria-expanded="false">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link link text-black display-4" to="/shop" aria-expanded="false">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link link text-black display-4" to="/blog" aria-expanded="false">Blog</Link>
                        </li>
                        </ul>
                        <div className="navbar-buttons mbr-section-btn">
                        <a className="btn btn-primary display-4" href="https://mobiri.se/">About</a>
                        </div>
                    </div>
                    </div>
                </nav>
            </section>
        </>
    );
}
export default Header;