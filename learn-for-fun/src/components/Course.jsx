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
    const [reviewWriteWordCount, setReviewWriteWordCount] = useState("0");
    const params = useParams();
    const currentURL = window.location.href;

    //courseTitle, youtube url, code filename, pdf filename
    const [courseTitle, setCourseTitle] = useState("Course Title");
    const [youTube, setYouTube] = useState("https://www.youtube.com/embed/nO3kTNIRqrA");
    const [codeFileName, setCodeFileName] = useState("Code File Name");
    const [pdfFileName, setPdfFileName] = useState("pdf File Name");
    const [description, setDescription] = useState("Description");
    const [reviewName, setReviewName] = useState("Description");
    const [reviewContent, setReviewContent] = useState("Description");
    
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

    //get course details
    axios.get('http://localhost/getCourse.php?course='+params.courseID).then(res => {
        const course = res.data[0];
        setCourseTitle(course.courseName);
        setYouTube(course.youtubeURL);
        setCodeFileName(course.codeFilename);
        setPdfFileName(course.pdfFilename);
        setDescription(course.description);
        setReviewName(course.reviewName);
        setReviewContent(course.reviewContent);
    });

    return (
        <div className="">
            <NavBar></NavBar>
            <hr />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-1"></div>

                    <div className="col-10">

                        <div className="fs-2 pt-2 bold">
                            {courseTitle} 
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
                                        <iframe src={youTube} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>

                                    <div className="d-flex justify-content-between margin-top">
                                        <Link to={'../files/'+codeFileName} target="_blank" download style={{ textDecoration: "none" }}>
                                            <Button className="btn btn-primary" variant="primary" id="downloadCodeButton">
                                                <i className="bi bi-cloud-arrow-down"></i>
                                                Download Code
                                            </Button>
                                        </Link>
                                        <Link to={'../files/'+pdfFileName} target="_blank" download style={{ textDecoration: "none" }}>
                                            <Button className="btn btn-primary" variant="primary" id="downloadGuideButton">
                                                <i className="bi bi-file-earmark-pdf"></i>
                                                Download Guide
                                            </Button>
                                        </Link>
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
                                            <div className="fs-3">{reviewName}</div>
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
                                               {reviewContent}
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
                                            Description
                                        </div>
                                        <hr />
                                        <div className="fs-5">
                                            {description}
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