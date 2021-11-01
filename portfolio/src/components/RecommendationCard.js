import React,{Component} from 'react';
import {  Modal } from 'react-bootstrap';
class RecommendationCard extends Component {
  constructor(){
    super()
    this.state={
      show:false
    }
  }
  handleModal(){
    this.setState({show: !this.state.show})
  }
  render() {
    const {message,name,designation,company} = this.props.recommendation;
    return (
        <div className="col-12 col-md-4">
           <a onClick={()=>{this.handleModal()}}>
            <div className="card shadow h-100">
              <div className="card-body">
                <h4 className="card-text">
          {message.length>35?message.slice(0,35)+"...":message.slice(0,35)}
                </h4>
                <p className="card-text text-secondary mb-0">{name}</p>
                <p className="card-text text-secondary">
                  {designation} at {company}
                </p>
              </div>
            </div>
            </a>
      <Modal show ={this.state.show} onHide={()=>{this.handleModal()}}>
      <div className="card shadow h-100 text-center">
              <div className="card-body text-center">
        <Modal.Header closeButton >
        </Modal.Header >
        <Modal.Body>
<h5 className="card-text align-item-center"> {message} </h5>
        <p className="card-text text-secondary mb-0">{name}</p>
                <p className="card-text text-secondary">
                  {designation} at {company}
                </p>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
</div>
</div>
      </Modal>
          </div>
          );
        }
      }
      
      export default RecommendationCard;
    
         
            



 

  

    

               
        
              
              

  
               
      
             
      
      
                
     
           



    





