import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <div class="h-75 d-flex justify-content-center align-items-center">
                <form class="col-md-5 form-background needs-validation" id="customer-form">
                    <div class="mx-auto my-auto">
                        <h3>Welcome</h3>
                    </div>
                    <div class="row mb-3">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Username:</label>
                        <div class="col-sm-10">
                            <input type="username" class="form-control" id="inputUsername3" required />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Password:</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="inputPassword3" required />
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