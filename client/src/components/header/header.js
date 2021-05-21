import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './header.css';

const Jumbotron = () => {
    const [isLoggedIn, setLogin] = useState(false);
    let history = useHistory();
    async function logout() {
        await axios.delete('/api/login')
        history.push('/');
    }

    // useEffect(() => {
    //     try {
    //         const authentication = await axios.get('/api/user')
    //     }
    // })

    // }

    return (
        <>
            <nav className="navbar bg-light">
                <div className="container-fluid justify-content-center">
                    <Link to='/' id="header-vault">
                        <h1 className="text-center">THE VAULT</h1>
                    </Link>
                </div>
            </nav>
            <div className="container-fluid mb-5 heroContainer">
                <div id="hero" className="py-3 text-center block block-1 bg-light">
                    <nav className="nav flex-column flex-sm-row justify-content-around">
                        <button className=" text-sm-center nav-link btn btn-link" aria-current="page">
                            <Link to='dashboard'>Dashboard</Link>
                        </button>
                        {isLoggedIn ?
                            <button className=" text-sm-center nav-link btn btn-link" onClick={logout}>
                                <Link to='logout'>Logout</Link>
                            </button> :
                            <button className=" text-sm-center nav-link btn btn-link" >
                                <Link to='login'>Login</Link>
                            </button>
                        }
                        <button className=" text-sm-center nav-link btn btn-link">
                            <Link to='signup'>Signup</Link>
                        </button>
                    </nav>
                </div>
            </div>
        </>
    )
};


export default Jumbotron;