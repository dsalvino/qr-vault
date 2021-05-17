import axios from 'axios';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Login = () => {
    let history = useHistory();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const userInput = {
            username: username,
            password: password
        }
        if (username && password) {
            try {
                const submit = await axios.post('/api/login', userInput);
                history.push('/dashboard');
                console.log(submit);
            } catch (err) {
                console.error(err);
            }
        }
    }

    return (
        <>
            <div class="h-75 d-flex justify-content-center align-items-center">
                <form class="col-md-5 form-background needs-validation" id="customer-form" onSubmit={handleSubmit}>
                    <div class="mx-auto my-auto">
                        <h3>Welcome</h3>
                    </div>
                    <div class="row mb-3">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Username:</label>
                        <div class="col-sm-10">
                            <input type="username" class="form-control" id="inputUsername3" onChange={e => setUsername(e.target.value)} required />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Password:</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="inputPassword3" onChange={e => setPassword(e.target.value)} required />
                            <Link to='signup'>Don't have an account? Sign up here!</Link>
                        </div>
                        <div class="d-grid gap-1 mx-auto col-4 mt-3">
                            <button class="btn btn-primary" type="submit">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login;