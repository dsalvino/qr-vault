import axios from 'axios';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Jumbotron = () => {
    let history = useHistory();
    async function logout() {
        await axios.delete('/api/login')
        history.push('/');
    }

    return (
        <>
            <nav className="navbar bg-light header-vh">
                <div className="container-fluid justify-content-center">
                    <h1 className="text-center" id="name">The vault</h1>
                </div>
            </nav>
            <div className="container-fluid mb-5 heroContainer">
                <div id="hero" className="py-3 text-center block block-1 bg-light">
                    <nav className="nav flex-column flex-sm-row justify-content-around">
                        <button className=" text-sm-center nav-link active" aria-current="page">
                            <Link to='dashboard'>Dashboard</Link>
                        </button>
                        <button className=" text-sm-center nav-link">
                            <Link to='login'>Login</Link>
                        </button>
                        <button className=" text-sm-center nav-link" onClick={logout}>
                            <Link to='signup'>Logout </Link>
                        </button>
                    </nav>
                </div>
            </div>
        </>
    )
};

export default Jumbotron;