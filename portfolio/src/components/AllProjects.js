
// so here we use cosumer com to access the data so we return consumer nd it will return value this value coming from  context file nd there we passing the value as a prop nd this contain the enire state.
// since this contain the project so we can use destructuring to get that project..
import React from 'react'
import {Consumer} from "../Context";
import ProjectCard from './ProjectCard';
function AllProjects() {
return (
   <Consumer>
       {(value)=>{
           const {projects} =value;
           return(
            <div className="container text-center my-5">
            <h1 className="font-weight-light pt-5">
              All my <span className="text-info ">Projects</span>
            </h1>
            <div className="row my-5 pt-3">
              {projects.map((project) => (
                <div key={project.id} className="col-12 col-md-6 my-3">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
            </div>
           )
       }}
   </Consumer>
    )
}
export default AllProjects;
