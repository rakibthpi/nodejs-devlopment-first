// import React from 'react';

import { useContext } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { UserContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const location = useLocation();
    const from = location?.state?.from.pathname || '/';
    console.log(location)
    console.log(from)
    const { userLogin } = useContext(UserContext);
    const navigate = useNavigate();
    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log("rakib", email, password);
        userLogin(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from);
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div>
            <div className="container">
                <Row className="my-5">
                    <Col md={{ span: 4, offset: 4 }}>
                        <Form onSubmit={handleLogin} method="post">
                            <Form.Floating className="mb-3">
                                <Form.Control
                                    name="email"
                                    id="floatingInputCustom"
                                    type="email"
                                    placeholder="name@example.com"
                                    required
                                />
                                <label htmlFor="floatingInputCustom">Email address</label>
                            </Form.Floating>
                            <Form.Floating>
                                <Form.Control
                                    name="password"
                                    id="floatingPasswordCustom"
                                    type="password"
                                    placeholder="Password"
                                />
                                <label htmlFor="floatingPasswordCustom">Password</label>
                            </Form.Floating>

                            <Button variant="primary" type="submit" className="mt-3">
                                Submit
                            </Button>

                        </Form>
                    </Col>
                </Row>

            </div>
        </div>
    );
};

export default Login;