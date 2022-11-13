import React from 'react';
import {Button} from 'react-bootstrap';
import {Component} from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';



class Signup extends Component {
    constructor(props){
        super(props);
        this.onChangeName= this.onChangeName.bind(this);
        this.onChangeEmail= this.onChangeEmail.bind(this);
        this.onChangePhone= this.onChangePhone.bind(this);
        this.onChangePassword= this.onChangePassword.bind(this);
        this.onChangePasswordconform= this.onChangePasswordconform.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
       
        this.state ={
          name: '',
          email:'',
          phone:'',
          password:'',
          passwordConform:'',
       
        }
      }
       
      onChangeName(e){
        this.setState({
          name:e.target.value
        });
      }
       
      onChangeEmail(e){
        this.setState({
          email:e.target.value
        });
      }
       
      onChangePhone(e){
        this.setState({
          phone:e.target.value
        });
      }
       
      onChangePassword(e){
        this.setState({
          password:e.target.value
        });
      }
       
      onChangePasswordconform(e){
        this.setState({
          passwordConform:e.target.value
        });
      }
       
      onSubmit(e){
        e.preventDefault();
 
  if(this.state.password===this.state.passwordConform){
    const obj ={
      name:this.state.name,
      email:this.state.email,
      phone:this.state.phone,
      password:this.state.password,
      passwordConform:this.state.passwordConform,
    };
   
    axios.post('http://localhost/reactProject/insert.php',obj)
    .then(res=> console.log(res.data))
    .catch(error => {
      console.log(error.response)
  });
 
//To clear text box values 
  this.setState({
    name: '',
    email:'',
    phone:'',
    password:'',
    passwordConform:'',
 
  })
  }
 
  else{
    alert("Password mismatch")
  }
      }


 render(){
  return (
   
    <div>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" 
        value={this.state.email} 
               onChange={this.onChangeEmail} />
        <Form.Text className="text">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>



      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="text" placeholder="Password" 
        value={this.state.password} 
               onChange={this.onChangePassword}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formRepeatBasicPassword">
        <Form.Label>Repeat Password</Form.Label>
        <Form.Control type="text" placeholder="Repeat Password" 
        value={this.state.passwordConform} 
        onChange={this.onChangePasswordconform}/>
      </Form.Group>



      <Button variant="primary" type="submit" 
      onClick={this.onSubmit}>
        Register
      </Button>
    </Form>

    </div>
 
  );
 }
}
 
 
export default Signup;