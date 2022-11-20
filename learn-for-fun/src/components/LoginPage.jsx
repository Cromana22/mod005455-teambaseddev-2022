import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import axios from "axios";

function LoginPage() {
    const [formEmail, setFormEmail] = useState("");
    const [formPassword, setFormPassword] = useState("");
    const [showPasswordBoolean, setShowPasswordBoolean] = useState(false);
    const [formPasswordType, setFormPasswordType] = useState("password");
    const [loginMessage, setLoginMessage] = useState("");

    function handleShowPasswordClick() {
        if (showPasswordBoolean == false) {
            setShowPasswordBoolean(true)
            setFormPasswordType("text")
        }

        else {
            setShowPasswordBoolean(false)
            setFormPasswordType("password")
        }
    }

    function attemptLogin() {
        const data = [{email: formEmail, password: formPassword}];

        axios.post('http://localhost/verifyLogin.php', data).then(res => {
            setLoginMessage(res.data.Message);
            console.log(res.data.Message);
        });
    }

    return (
        <div id="loginPage">
            <NavBar />

            <div className="row">
                <div className="col-1"></div>

                <div className="col-10">

                    <hr></hr>

                    <div className="text-center">
                        <div className="fs-2">
                            Hello, login below
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-3"></div>

                        <div className="col-6">
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setFormEmail(e.target.value)} name="email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type={formPasswordType} placeholder="Password" onChange={(e) => setFormPassword(e.target.value)} name="password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check onClick={handleShowPasswordClick} type="checkbox" label="Show password" />
                                </Form.Group>
                                <Button variant="primary" onClick={attemptLogin}>
                                    Login
                                </Button>
                            </Form>

                            <br />
                            <p>Not Registered? Click <a href="./register">here</a> to sign up!</p>

                        </div>

                        <div className="col-3"></div>
                    </div>

                </div>

                <div className="col-1"></div>
            </div>

            <Footer />
        </div>
    );
}

export default LoginPage;