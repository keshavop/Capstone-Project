import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

function Navbar() {
    return (
        <BrowserRouter>
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Art Store</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <Link to='#gallery' smooth className='nav-link'>Gallery</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='#gallery' smooth className='nav-link'>Our Store</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='#aboutus' smooth className='nav-link'>About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='#contactus' smooth className='nav-link'>Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </BrowserRouter>
    )
}

export default Navbar
