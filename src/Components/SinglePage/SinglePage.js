import React from 'react';
import './SinglePage.css';
import Group5 from './Group5.png';
import FaceIcon from './image/FaceIcon.png';
import Cards from './image/Cards.png';
import mail from './image/mail.png';
import Logo from './image/Logo.png';
import ChristmasAngel from './image/ChristmasAngel.png';
const SinglePage = () => {
    return (
        <div>
            <div className="spa-section">
             <div className="left-card-photo-wrapper"><img src={Cards} alt="card img" /></div>
                <div className="right-photo-wrapper">
                    <a href=""><img src={FaceIcon} alt="right img" /></a>
                    <img src={Group5} alt="right img" />
                </div>
                <div className="container card-photo">
                    <nav className='navigation-bar d-flex justify-content-start ms-5'>
                        <div className="nav-item-box">
                            <div className="btn-group pt-4" role="group" aria-label="Basic example">
                                <button type="button" className="btn border rounded-pill border-3 animate-hover text-white px-5 py-0 me-4 fw-bold">HOROSCOPES</button>
                                <button type="button" className="btn border rounded-pill border-3 animate-hover text-white px-5 py-0 me-4 fw-bold">KNOWLEDGE</button>
                                <button type="button" className="btn border rounded-pill border-3 animate-hover text-white px-5 py-0 me-4 fw-bold">FORUM</button>
                                <a href=''  className="mail-icon-link text-decoration-none"><img src={mail} alt="" /></a>
                            </div>
                        </div>                       
                    </nav>
                    <main>
                        <div className="main-logo-image">
                            <img src={Logo} alt="logo" />
                        </div>
                        <div className="main-content-section">
                            <img src={ChristmasAngel} alt="Charismas angle" />
                            <div className="btn-group mt-4" role="group" aria-label="Basic example">
                                <button type="button" className="btn border rounded-pill border-3 animate-hover text-white px-5 py-3 me-4 fw-bold icon-bfr">HOW TO START?</button>
                                <button type="button" className="btn border rounded-pill border-3 animate-hover text-white px-5 py-3 me-4 fw-bold magic-bfr">MAGIC TRICK?</button>
                            </div>
                            <div className="live-container">
                                <div className="live-section d-inline-block">
                                    <div className="live-btn btn btn-dark rounded-pill px-4 py-2 fw-bold fs-5">Live</div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default SinglePage;