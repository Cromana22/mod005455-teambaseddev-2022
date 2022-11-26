import Button from "react-bootstrap/button"
import NavBar from "./NavBar";
import Footer from "./Footer";
import Form from 'react-bootstrap/Form';
import { React, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import axios from "axios";

function Course() {
    const [subState, setSubState] = useState(false);
    const [reviewInputText, setReviewInputText] = useState("");
    const params = useParams();
    const [reviewWriteWordCount, setReviewWriteWordCount] = useState("0");
    const currentURL = window.location.href;

    //get subscriptions to check
    axios.get('http://localhost/getSubscriptions.php', {withCredentials: true}).then(res => {
        const subscriptions = res.data;

        //if there are subscriptions
        if (subscriptions.length > 0) {

            //if there is an all access subscription, set to subscribed
            let count = subscriptions.filter((obj) => obj.subscriptionType == "AllAccess").length;
            if (count > 0){
                setSubState(true);
            }
    
            //else check if the course is individually subscribed to
            else {
                count = subscriptions.filter((obj) => obj.courseId == params.courseID).length;

                if (count > 0){
                    setSubState(true);
                }
            }
        };
    });

    return (
        <div className="">
            <NavBar></NavBar>
            <hr />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-1"></div>

                    <div className="col-10">

                        <div className="fs-5 pt-2">
                            Course Title
                        </div>


                        <hr />
                        <div className="row">
                            <div className="col-8">
                                <div className="sizing" name="videoAndCode">
                                    {
                                        subState == false
                                        && <div className="overlay"><p className="undoRotate">Subscribe to Access!</p></div>
                                    }

                                    <div className="ratio ratio-16x9">
                                        <iframe src="https://www.youtube.com/embed/OR0e-1UBEOU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>

                                    <div className="d-flex justify-content-between margin-top">
                                        <Link to="/files/guides.txt" target="_blank" download style={{ textDecoration: "none" }}>
                                            <Button className="btn btn-primary" variant="primary" id="downloadCodeButton">
                                                <i className="bi bi-cloud-arrow-down"></i>
                                                Download Code
                                            </Button>
                                        </Link>
                                        <Link to="/files/guides.txt" target="_blank" download style={{ textDecoration: "none" }}>
                                            <Button className="btn btn-primary" variant="primary" id="downloadGuideButton">
                                                <i className="bi bi-file-earmark-pdf"></i>
                                                Download Guide
                                            </Button>
                                        </Link>
                                    </div>
                                </div>

                                <div className="border rounded margin-top" name="description">
                                    <div className="fs-3 px-3 pt-3">Description</div>
                                    <hr />
                                    <div className="fs-5 px-3 pb-3">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fermentum dapibus
                                        eleifend. Donec tincidunt feugiat nunc. Quisque nec dolor pretium, sodales lacus ut,
                                        posuere nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                        Curabitur aliquam massa in est imperdiet tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                        Maecenas neque orci, pretium at aliquet eu, vestibulum id tortor. Fusce tincidunt dui at ligula congue imperdiet. Sed
                                        tellus ante, fermentum ut ultricies sed, porttitor eu risus.
                                    </div>
                                </div>

                                <div className="py-2"></div>

                                <div className="border rounded" name="reviews">
                                    <div className="fs-3 px-3 pt-3">
                                        Reviews
                                    </div>
                                    <hr />

                                    <div className="row py-2"> {/* This is a singular reviews template */}
                                        <div className="col-3 text-center">
                                            <img src="https://i.imgur.com/8UdKNS4.jpeg" className="img-thumbnail" alt="profile"></img>
                                        </div>
                                        <div className="col-9">
                                            <div className="fs-3">Username</div>
                                            <div className="fs-5">
                                                <div className="d-flex">
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                </div>
                                            </div>
                                            <div className="fs-5">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fermentum dapibus eleifend.
                                                 Donec tincidunt feugiat nunc. Quisque nec dolor pretium, sodales lacus ut, posuere nunc. Orci varius natoque p
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="py-3"></div>

                                <div className="border rounded" name="writeReview">
                                    <div className="sizing">
                                        {
                                            subState == false
                                            && <div className="overlay"><p className="undoRotate">Subscribe to Access!</p></div>
                                        }

                                        <div className="container-fluid"> {/* Write a review section - does not need to be present */}
                                            <div className="container-fluid">
                                                <div className="py-2">
                                                    <div className="d-flex justify-content-around">
                                                        <div className="fs-4">
                                                            Write a review
                                                        </div>
                                                        <div className="fs-4">
                                                            Word count:{reviewWriteWordCount}/200
                                                        </div>
                                                    </div>
                                                    <Form>
                                                        <Form.Group className=" fs-3">

                                                            <Form.Control name="reviewInputText" id="reviewInputText"
                                                                maxLength="200" as="textarea" rows={3} onChange={(e) => { setReviewInputText(e.target.value); setReviewWriteWordCount(e.target.value.length) }} value={reviewInputText} />
                                                        </Form.Group>
                                                    </Form>
                                                    <div className="center">
                                                        <Button variant="primary" className="margin-top" type="submit">
                                                            Submit Review
                                                        </Button>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-4" name="courseNameAndUnlock"> {/* Moving component */}
                                <div className="row pt-3" style={{ position: 'sticky', top: '0' }}>
                                    <div className="border rounded">
                                        <div className="fs-3 py-3 text-center">
                                            Course title
                                        </div>
                                        <hr />
                                        <div className="fs-4 text-start">
                                            Heading 1
                                        </div>
                                        <div className="fs-4 text-start">
                                            Heading 2
                                        </div>
                                        <hr />
                                        <div className="fs-5 text-center">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Cras fermentum dapibus eleifend. Donec tincidunt feugiat nunc.
                                            Quisque nec dolor pretium, sodales lacus ut, posuere nunc. Orci varius
                                            natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur
                                            aliquam massa in est imperdiet tempus. Interdum et malesuada fames ac ante ipsum primis in
                                            faucibus. Maecenas neque orci, pretium at aliquet eu, vestibulum id tortor. Fusce tincidunt dui at
                                            ligula congue imperdiet. Sed tellus ante, fermentum ut ultricies sed, porttitor eu risus.
                                        </div>
                                        <hr />
                                        <div className="center">
                                            {
                                                subState == false
                                                && <Button variant="primary" className="margin-bottom" style={{color: 'white'}} href={currentURL+'/subscribe'}>Unlock Course</Button>
                                            }
                                            {
                                                subState == true
                                                && <p className="success margin-bottom">Course Unlocked!</p>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="py-4"></div>

                    <div className="col-1"></div>
                </div>
            </div>
            
            <Footer></Footer>
        </div>
    );
}


export default Course