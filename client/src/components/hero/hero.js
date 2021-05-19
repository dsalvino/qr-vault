import axios from 'axios';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';


const Hero = () => {
    let history = useHistory();
    async function logout() {
        await axios.delete('/api/login')
        history.push('/signup');
    }

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
                        <button className=" text-sm-center nav-link" onClick={logout}>
                            <Link to='signup'>Logout </Link>
                        </button>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Hero;
