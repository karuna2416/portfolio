import React from "react";
import img from "../asset/IMG_20210204_155919.jpg";
function Title(props){
    // editing this value from variable is more conviniant than editing the row
    // const name = "karuna sarwat";
    // const leadtext = "i am a freelancer in india";
    const{ name,leadtext} = props;
   return(
<div className="container pt-5 ">
        <div className="row text-center align-items-center justify content-center mb-5">
            <div className="col-12 col-md-6">
                <img className="img-fluid rounded-circle w=40px h=20px mt-5"
                 src={img}
                alt=""/>
            </div>
            <div className="col-12 col-md-6 pt-5">
                <h1 className="font-weight-light" Style={{ FontSize: "50px" }}>
                    Hi,i am <span className="text-info"> {name}</span>
                </h1>
                <h4 className="font-weight-light">{leadtext}</h4>
            </div>
        </div>
    </div>
   );
}
export default Title;

