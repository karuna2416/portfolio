import React,{Component} from "react";
import { Consumer } from "../Context";
import { v4 as uuid } from "uuid";
class writeRecommendation extends Component{
    state = {
        name:"",
        email:"",
        company:"",
        designation:"",
        recommendationSection:"",
        submitMessage:"",
        submitMessageTextColor:"",

    };
    onChange = (event)=>{
        this.setState({
            [event.target.name]:event.target.value,
        })
    };
    onSubmit =(handler,event)=>{
        event.preventDefualt();

               let isSuccessful = false;
        const{name} = this.state;
        if (isSuccessful) {
            this.setState({
              submitMessage: `Thank you ${name} for the recommendation`,
              submitMessageTextColor: "text-info",
            });
          } else {
            this.setState({
              submitMessage: "Oops! Something went wrong. Please try again later :(",
              submitMessageTextColor: "text-danger",
            });
        }
        const newRecommendation = {
          id: uuid(),
          name: this.state.name,
          company: this.state.company,
          designation: this.state.designation,
          message: this.state.recommendationMessage,
        };
    
        handler("ADD_RECOMMENDATION", newRecommendation);
    };
    render(){
      return(
        <Consumer>
          {(value)=>{
            const { submitMessageTextColor, submitMessage } = this.state;
            const {handler} =value;
            return(
                <div className="container my-5 py-5">
                <h1 className="font-weight-light text-center py-5">
                  <span className="text-info">Thank you! </span>for your taking your time
                </h1>
                <div className="row justify-content-center">
                  <div className="col-11 col-lg-5">
                    <form onSubmit={this.onSubmit.bind(this, handler)}>
                      <div className="form-group">
                        <label htmlFor="name">Name *</label>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                       onChange={this.onChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email *</label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          onChange={this.onChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="company">company/institution *</label>
                        <input
                          type="text"
                          name="company"
                          className="form-control"
                          onChange={this.onChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="designation">designation *</label>
                        <input
                          type="text"
                          name="designation"
                          className="form-control"
                          onChange={this.onChange}
                        />
                      </div>
    
                      <div className="form-group">
                        <label htmlFor="Recommendation">
                       Recommendation*
                        </label>
                        <textarea
                          className="form-control"
                          name="Recommendation"
                          rows="5"
                          onChange={this.onChange}
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-dark float-right"
                        style={{ backgroundColor: "red" }}
                      >
       Lot's of love
                      </button>
                    </form>
                  </div>
                </div>
        
                <div className="py-5 mx-2 text-center">
               <h5 className={submitMessageTextColor}>{submitMessage}</h5>
                </div>
              </div>
            )

          }}
        </Consumer>
      )
    }
}
export default writeRecommendation;