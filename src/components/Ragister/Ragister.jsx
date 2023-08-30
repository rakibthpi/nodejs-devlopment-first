// import React from 'react';

import { useContext } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { UserContext } from "../../providers/AuthProvider";

const Ragister = () => {
    const { newUserCreate } = useContext(UserContext);
    const handleRagister = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const password = form.password.value;
        const email = form.email.value;
        console.log(name, password, email);
        newUserCreate(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div>
            <div className="container">
                <Row className="my-5">
                    <Col md={{ span: 4, offset: 4 }}>
                        <Form onSubmit={handleRagister} method="post">
                            <Form.Floating className="mb-3">
                                <Form.Control
                                    name="name"
                                    id="floatingNameCustom"
                                    type="text"
                                    placeholder="Name"
                                    required
                                />
                                <label htmlFor="floatingNameCustom">Name</label>
                            </Form.Floating>
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
                                    required
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

export default Ragister;