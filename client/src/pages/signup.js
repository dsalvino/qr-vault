import React from 'react';

const Signup = () => {
    return (
        <>
            <div className="full-page block-1">
                <div className="h-75 d-flex justify-content-center align-items-center">

                    <form className="col-md-5 form-background needs-validation" id="customer-form" >
                        <div className="mx-auto my-auto">
                            <h3>Welcome, please make an account below</h3>
                        </div>
                        <div className="row mb-3">
                            <label for="inputEmail3" className="col-sm-2 col-form-label">Username:</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" id="inputEmail3" required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="inputFirstname3" className="col-sm-2 col-form-label">First Name:</label>
                            <div className="col-sm-10">
                                <input type="Firstname" className="form-control" id="inputFirstname3" required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="inputLastname3" className="col-sm-2 col-form-label">Last Name:</label>
                            <div className="col-sm-10">
                                <input type="Lastname" className="form-control" id="inputLastname3" required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="inputPassword3" className="col-sm-2 col-form-label">Password:</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="inputPassword3" required />
                            </div>
                            <div className="d-grid gap-1 mx-auto col-4 mt-3">
                                <button className="btn btn-primary" type="submit">Sign up!</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup;