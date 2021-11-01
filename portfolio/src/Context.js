// context Api-context api solve the prblm between com to com by seprating the data com to com,its kind of creat central data  storing system.which is store all of data that data will be available to all the component..
// so in this way we dont need data 1 com to another com using prop,all the data store in a central storing system in are context nd the com need the data will redirect fetch the data from are context so this way we are solving the prop driling prblm.
// we creat the context boiler plate -
// so here we exporting two com 1st provider class its provide this data to com that wants to access its,so this provider com kinds of creat a group of com who can access data..
// this consumer what allows this com to consume the data,the consumer sits inside the each com nd then using which can access the data from are context..
// summary- 1st we have created context so to use context we use 1st line.then created provider inside the provider we have state this state store the varriable that we wnt to access in com,then we are returning this provider we are passing the state end export consumer.
// then we import provider as a route com for all the com so this com access the data inside are provider c lass.

//  we defined the handler4 mathode,which hndle this adding project logic.here we all doing this so,if we get a new project we set state of this com. nd add newp to exiting project array
// so we use line 18 spred oprator for that nd we can access exiting project line23 from this.state.project nd we creating a new array byadding new project nd they should be inclose in setstate bcz   we chng this state of data.
// nd once we have handler we are adding this handler to over state so we r doing this bcz we want this hndler mathod to be accessible by r consumer  class.
// since we r passing the entire state to the consumer,consumer should be able to access this nd once we define this we have to go the consumer com.
// read addp..
import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  handler = (action, newObject) => {
    switch (action) {
      case "ADD_PROJECT":
        this.setState({
          projects: [newObject, ...this.state.projects],
        });
        break;

      case "ADD_BLOG":
        this.setState({
          blogs: [newObject, ...this.state.blogs],
        });
        break;

      case "ADD_RECOMMENDATION":
        this.setState({
          recommendations: [newObject, ...this.state.recommendations],
        });
        break;

      default:
        break;
    }
  };

  state = {
    handler: this.handler,
    projects: [
      {
        id: 1,
        title: "Project 1",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-1.jpg",
        excerpt: "This is my project about...",
        body: "Body 1",
      },
      {
        id: 2,
        title: "Project 2",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-2.jpg",
        excerpt: "This is my project about...",
        body: "Body 2",
      },
      {
        id: 3,
        title: "Project 3",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-3.jpg",
        excerpt: "This is my project about...",
        body: "Body 3",
      },
      {
        id: 4,
        title: "Project 4",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-1.jpg",
        excerpt: "This is my project about...",
        body: "Body 4",
      },
    ],
    blogs: [
      {
        id: 1,
        title: "Blog 1",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-1.jpg",
        excerpt: "This is my blog about...",
        body: "Body 1",
      },
      {
        id: 2,
        title: "Blog 2",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-2.jpg",
        excerpt: "This is my blog about...",
        body: "Body 2",
      },
      {
        id: 3,
        title: "Blog 3",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-3.jpg",
        excerpt: "This is my blog about...",
        body: "Body 3",
      },
    ],
    recommendations: [
      {
        id: 1,
        name: "Random guy 1",
        company: "ABC company",
        designation: "CEO",
        message: "He is a good engineer",
      },
      {
        id: 2,
        name: "Random guy 2",
        company: "ABC company",
        designation: "Director",
        message: "He is a lazy person",
      },
      {
        id: 3,
        name: "Random guy 3",
        company: "ABC company",
        designation: "Manager",
        message: "He is an excellent developer",
      },
      {
        id: 4,
        name: "Random guy 4",
        company: "ABC company",
        designation: "SDE",
        message: "He gets things done so quickly",
      },
    ],
    skills: [
      {
        id: 1,
        name: "HTML5",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/html5.png",
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 2,
        name: "CSS3",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/css3.png",
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 3,
        name: "Javascript",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/javascript.png",
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 4,
        name: "Bootstrap 4",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/bootstrap4.png",
        starsTotal: 3,
        starsActive: 1,
      },
      {
        id: 5,
        name: "React",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/react.png",
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 6,
        name: "MySQL",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/mysql.png",
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 7,
        name: "Python",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/python.png",
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 8,
        name: "Flask",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/flask.png",
        starsTotal: 3,
        starsActive: 2,
      },
    ],
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
