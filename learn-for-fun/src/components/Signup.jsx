import {React, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import NavBar from './NavBar';
import Footer from './Footer';

function Signup() {
  const [formEmail, setFormEmail] = useState("");
  const [formFirstName, setFormFirstName] = useState("");
  const [formLastName, setFormLastName] = useState("");
  const [formAddress1, setFormAddress1] = useState("");
  const [formAddress2, setFormAddress2] = useState("");
  const [formCity, setFormCity] = useState("");
  const [formCounty, setFormCounty] = useState("");
  const [formPostcode, setFormPostcode] = useState("");
  const [formPassword, setFormPassword] = useState("");
  const [formRepeatPassword, setFormRepeatPassword] = useState("");
  const [signupMessage, setSignupMessage] = useState("");
  const navigate = useNavigate();
  
  function onSubmitForm(event){
    event.preventDefault();
    onSubmit();
  }

  function onSubmit(){
 
    //if passwords match
    if (formPassword===formRepeatPassword && formPassword !== "") {

      //create data to send
      const data = [{
        email: formEmail, 
        password: formPassword,
        firstname: formFirstName,
        lastname: formLastName,
        address1: formAddress1,
        address2: formAddress2,
        city: formCity,
        county: formCounty,
        postcode: formPostcode
      }];
   
      //send and process php
      axios.post('http://localhost/register.php', data, {withCredentials: true})
      .then(res => {
        setSignupMessage(res.data);
        console.log(signupMessage);

        //if it works, redirect to home page, or throw error if fails
        if (signupMessage !== "failed") {
          navigate("../");
        }
        else {
          alert("Registration Failed. This email address is already registered.")
        }
      });
    }
 
    else{
      alert("Your password must not be blank, and the passwords must match.")
    }
  }

  return (
    <div>
      <NavBar />

      <div className='container margin-top'>
        <Form onSubmit={onSubmitForm}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" maxLength="255"
              onChange={(e) => setFormEmail(e.target.value)}
              required
            />
            <Form.Text className="text">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="First name" maxLength="100"
              onChange={(e) => setFormFirstName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last name" maxLength="100"
              onChange={(e) => setFormLastName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAddress1">
            <Form.Label>Address Line 1</Form.Label>
            <Form.Control type="text" placeholder="Address line 1" maxLength="255"
              onChange={(e) => setFormAddress1(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAddress2">
            <Form.Label>Address Line 2</Form.Label>
            <Form.Control type="text" placeholder="Address line 2" maxLength="255"
              onChange={(e) => setFormAddress2(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCity">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" maxLength="100"
              onChange={(e) => setFormCity(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCounty">
            <Form.Label>County</Form.Label>
            <Form.Control type="text" placeholder="County" maxLength="50"
              onChange={(e) => setFormCounty(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPostcode">
            <Form.Label>Postcode</Form.Label>
            <Form.Control type="text" placeholder="Postcode" maxLength="10"
              onChange={(e) => setFormPostcode(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="text" placeholder="Password" maxLength="30"
              onChange={(e) => setFormPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicRepeatPassword">
            <Form.Label>Repeat Password</Form.Label>
            <Form.Control type="text" placeholder="Repeat Password" maxLength="30"
              onChange={(e) => setFormRepeatPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </div>

      <Footer />
    </div>
  );
}
 
 
export default Signup;