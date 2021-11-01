import React  from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import './App.css';
import Navbar  from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ProjectSection from  "./components/ProjectSection";
import BlogSection from "./components/BlogSection";
import RecommendationSection from  "./components/RecommendationSection";
import SkillsSection from  "./components/SkillsSection";
import Title from "./components/Title";
import About from "./components/About ";
import projectpage from "./components/projectpage";
import writeRecommendation from "./components/WriteRecommendation";

import Blogpage from "./components/Blogpage";

import NoteFound from "./components/NoteFound";
import AddProject from './components/AddProject';
import AddBlog from './components/AddBlog';
import { Provider } from "./Context";
import AllProjects from './components/AllProjects';
import ScrollToTop

 from './components/ScrollToTop';

function App() {
  return( 
    <Provider>
    <BrowserRouter>
    <ScrollToTop />
    <Navbar />
    <Switch>
      <Route exact path="/" >
      <Title name="karuna sarawat" 
      leadtext="i am a freelancer"/>
    <RecommendationSection />
    <About /> 
    <ProjectSection />
     <SkillsSection />
    <BlogSection /> 
        </Route>
        <Route exact path ="/allprojects"component={AllProjects}></Route>
      <Route exact path ="/contact"component={Contact} />
    <Route exact path ="/project/add" component={AddProject} />
    <Route exact path ="/blog/add" component={AddBlog} />
      <Route exact path= "/write-a-recommendation"component={writeRecommendation} />
      <Route exact path="/project/:id" component={projectpage} />
      <Route exact path="/blog/:id" component={Blogpage} />
      <Route component={NoteFound} />
    </Switch>
    <Footer />
    </BrowserRouter>
</Provider>

);
}
export default App;