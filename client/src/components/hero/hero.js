import React from 'react';

const Hero = () => {
    return (
        <>
            <div className="container-fluid mb-5 heroContainer">
                <div id="hero" className="py-3 text-center block block-1 bg-light">
                    <nav className="nav flex-column flex-sm-row justify-content-around">
                        <a className=" text-sm-center nav-link active" aria-current="page" href="#">dashboard</a>
                        <a className=" text-sm-center nav-link" href="#">Login</a>
                        <a className=" text-sm-center nav-link" href="#">Logout</a>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Hero;
