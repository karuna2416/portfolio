import React from "react";
import { Form } from "react-bootstrap";
import {Link} from "react-router-dom";
function Footer(){
    return(
<footer>
            <div className="container-fluid text-center " style={{backgroundColor: "black"}}>

                <div className="my-4 py-2">
                    <h2 className="text-light">intrested is working with me</h2>
                    <Link to ="/contact">

                    <button className="btn btn-outline-light btn-lg">let's talk</button>
                    </Link>
                </div>
                <div className="row">
                    <div className="col-12 col-md-4 py-3">
                        
                        <h5 className="text-info">more links</h5>
                        <a href="a" className="text-light d-block">blog</a>
                        <Link to="/" className="text-light  d-block">home</Link>
                        <a href="a" className="text-light  d-block">Project</a>
                        <Link to="/contact" className="text-light  d-block">contact us</Link>
                        <Link to="/write-a-recommendation" className="text-light"> write a recommndation <i
                                className="fas fa-heart text-light"></i></Link>
                    </div>
                    <div className="col-12 col-md-4 text-light text-justify py-3">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat odit quidem ratione
                            quibusdam?
                            Aspernatur doloremque nostrum, enim deleniti quis alias expedita inventore laboriosam
                            eligendi
                            accusamus eos voluptas adipisci vel aperiam fugiat asperiores ad nisi aliquam.</p>
                    </div>
                    <div className="col-12 col-md-4 py-3">
                        <h5 className="text-info">social</h5>
                        <a href="#"><i className="fab fa-linkedin  d-block  text-light py-2 "></i></a>
                    
                        <a href="#"><i className="fab fa-github d-block  text-light  py-2 "></i> </a>
                        <a href="#"> <i className="fas fa-code-branch d-block  text-light  py-2 "></i> </a>
                    </div>
                </div>

                <div className=" text-muted py-3 ">
                    copywrite@ karuna sarawat 2020
                </div>
            </div>
        </footer>
            );
            }
export default Footer;
// 1st we have to devlop fun. components nd this is the syntax of fun.components
// then we have to export this fun. component
// then we have to add this component into over app.js file we can import this
// then we add 1 by 1 into div 
// then this app.js file return all this components
// then index.js file where rendering this app component into a dom here,so this root is basically add index.html file
// so that's how we unable to creat components nd then group the components using app js file
// then render all of this components using react dom render to html div here..















