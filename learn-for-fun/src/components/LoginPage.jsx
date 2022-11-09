import React from "react";
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import axios from "axios";

function LoginPage() {
    const [formPassword, setFormPassword] = useState("");
    const [showPasswordBoolean, setShowPasswordBoolean] = useState(false);
    const [formPasswordType, setFormPasswordType] = useState("password");
    const [loginMessage, setLoginMessage] = useState("");

    function handleShowPasswordClick() {
        if (showPasswordBoolean == false) {
            setShowPasswordBoolean(true)
            setFormPasswordType("text")
        }
        else{
            setShowPasswordBoolean(false)
            setFormPasswordType("password")
        }

    }

    function attemptLogin(){
        axios.get('http://localhost/verifyLogin.php').then(res => {

            this.setState({ loginMessage: res.Message });
            console.log(this.state.Message)
          
        });
    }

    return (
        <div id="loginPage">
            <Navbar></Navbar>
            <div className="row">
                <div className="col-1">

                </div>
                <div className="col-10">


                    <div className="text-center">
                        <div className="fs-2">
                            Hello, login below
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">

                        </div>
                        <div className="col-6">
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type={formPasswordType} placeholder="Password" onChange={(e) => setFormPassword(e.target.value)}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check onClick={handleShowPasswordClick} type="checkbox" label="Show password" />
                                </Form.Group>
                                <Button variant="primary" type="submit" onClick={attemptLogin}>
                                    Login
                                </Button>
                            </Form>
                        </div>
                        <div className="col-3">

                        </div>
                    </div>




                </div>
                <div className="col-1">

                </div>
            </div>
        </div>
    );
}

export default LoginPage;