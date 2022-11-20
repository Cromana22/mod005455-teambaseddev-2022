import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import "bootstrap-icons/font/bootstrap-icons.css";
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';
import NavBar from "./NavBar";
import Footer from "./Footer";

class Courses extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        //get data from database
        axios.get('http://localhost/getCourses.php').then(res => {

            this.setState({ data: res.data });
            console.log(this.state.data)
        });

    }

    render() {
        return (
            <div id="courses">

                <NavBar></NavBar>

                <div className="row">

                    <div className="col-1">
                    </div>

                    <div className="col-10">
                        <div className="row">
                            <div className="row border-bottom border-dark">
                                <div className="row p-2">
                                    <div className="col-3">
                                        <div className="fw-bold fs-2 text-center">
                                            Courses
                                        </div>
                                    </div>

                                    <div className="col-6">

                                    </div>

                                    <div className="col-3">
                                        <Dropdown className='text-center'>
                                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                                Filter
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Action Games</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Adventure Games</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Another Games</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>

                            <div className="py-3">

                            </div>

                            {this.state.data.map((result) => {
                                return (

                                    <div className="col-md-3 text-center">
                                        <Link to={'/Course/' + result.courseID} exact='true'>
                                            <Card className="text-dark text-center" style={{ maxWidth: '24rem', margin: 'auto', height: '24rem' }}>
                                                <Card.Img src="https://i.imgur.com/oAms2Zs.png" alt="Card image" style={{ height: "100%" }} />
                                                <Card.ImgOverlay className='p-0'>

                                                    <Card.Text className="position-absolute text-align-center" style={{ bottom: '0', width: '100%' }}>
                                                        <div className="text-dark" style={{ backgroundColor: "rgba(255,255,255,0.2)", width: "100%", height: '9rem' }}>
                                                            <div className="row">
                                                                <div className="col-1">
                                                                </div>
                                                                <div className="col-10">


                                                                    <div className="row">
                                                                        <div className="col-md-12">
                                                                            <div className="fs-4 fw-bolder">
                                                                                {result.courseName}
                                                                            </div>

                                                                        </div>
                                                                    </div>

                                                                    <div className="font-dark">
                                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                                    </div>

                                                                    <div className="text-align-center" style={{ bottom: '0', width: '100%', position: 'absolute', left: '0' }}>
                                                                        <div className="text-dark" style={{ backgroundColor: "rgba(255,255,255,1)", width: "100%" }}>
                                                                            <div className="row p-2">
                                                                                <div className="col-1">

                                                                                </div>
                                                                                <div className="col-3">
                                                                                    <div className="bg-secondary text-white p-1 rounded">
                                                                                        <i className="bi bi-star"></i> 4.5
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-3">
                                                                                    <div className="bg-secondary text-white p-1 rounded">
                                                                                        <span className="bi bi-eye"></span> 200k
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-4">
                                                                                    <div className="bg-dark text-white">

                                                                                    </div>
                                                                                </div>

                                                                                <div className="col-1">

                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>



                                                                </div>
                                                                <div className="col-1">

                                                                </div>
                                                            </div>
                                                        </div>

                                                    </Card.Text>
                                                </Card.ImgOverlay>
                                            </Card>
                                        </Link>
                                    </div>
                                )
                            })}
                            <div className="col-md-3 text-center">

                            </div>
                            <div className="col-md-3 text-center">

                            </div>
                            <div className="col-3 text-center">

                            </div>
                        </div>
                    </div>

                    <div className="col-1">

                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default Courses;