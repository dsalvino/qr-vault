import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <>
            <div className="container-fluid mb-5 heroContainer">
                <div id="hero" className="py-3 text-center block block-1 bg-light">
                    <nav className="nav flex-column flex-sm-row justify-content-around">
                        <a className=" text-sm-center nav-link active" aria-current="page" href="#">
                            <Link to='dashboard'>Dashboard</Link>
                        </a>
                        <a className=" text-sm-center nav-link" href="#">
                        <Link to='login'>Login</Link>
                        </a>
                        <a className=" text-sm-center nav-link" href="#">
                        <Link to='signup'>TODO: CHANGE </Link>
                        </a>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Hero;
