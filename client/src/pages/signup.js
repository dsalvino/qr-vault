import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import Container from '../components/Container/container';
import { Form, Input } from '../components/form/form';

const Signup = () => {
    let history = useHistory();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const userInput = {
            username: username,
            email: email,
            password: password
        }
        try {
            const submit = await axios.post('/api/signup', userInput);
            history.push('/dashboard');
            console.log(submit);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <div className="full-page block-1">
                <Container>
                    <Form onSubmit={handleSubmit}>
                        <div className="mx-auto my-auto">
                            <h3>Welcome, please make an account below</h3>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label">Username:</label>
                            <div className="col-sm-10">
                                <Input type="username" className="form-control" id="inputEmail3" onChange={e => setUsername(e.target.value)} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label">email:</label>
                            <div className="col-sm-10">
                                <Input type="username" className="form-control" id="inputEmail3" onChange={e => setEmail(e.target.value)}  />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label">Password:</label>
                            <div className="col-sm-10">
                                <Input type="password" className="form-control" id="inputPassword3" onChange={e => setPassword(e.target.value)} />
                            </div>
                            <div className="d-grid gap-1 mx-auto col-4 mt-3">
                                <button className="btn btn-primary" type="submit">Sign up!</button>
                            </div>
                        </div>
                    </Form>
                </Container>
            </div>
        </>
    )
}

export default Signup;