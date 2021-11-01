import React, { Component } from "react";
import './App.css';
import axios from 'axios';
// to make a get  reqst to certain api


 class Project extends Component {
     state ={
         advice:''
     }
    //  componentdidmount is a react lifecycle mathode 
     componentDidMount(){
this.fetchAdvice();
     }
    //  it is a class mathode
     fetchAdvice=()=>{
axios.get('https://api.adviceslip.com/advice')
.then((response)=>{
    const {advice}=response.data.slip;
this.setState({advice});
}
)
.catch((error)=>{
    console.log(error);
    }
    )
     }
    render() {
        const {advice} =this.state;
        return (
        <div className="app">
            <div className="card">
                <h1 className="heading">{advice}</h1>
                <button className="button"onClick={this.fetchAdvice}>
                    <span>GIVE ME ADVICE!</span>
                </button>
            </div>
        </div>
        )
    }
}

export default Project;