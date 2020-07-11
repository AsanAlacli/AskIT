import React, { Component } from 'react';

class Question extends Component{

    state ={
        postTitle:'',
        postContent:''
    }
    postSubmit = e =>{
       console.log(this.state.postTitle);
       console.log(this.state.postContent);
    }
    handleChange = e=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render() {
        return (
            <div className="container">
                <form className="row justify-content-lg-center  ">
                   <h3 className="mt-4 justify-content-lg-center"> Welcome to Discussion Forum</h3>
                   <div className="form-group offset-lg-10 col-sm-12">
                     <input type="text" onChange={this.handleChange} placeholder="Post Title" value={this.state.postTitle} name="postTitle"></input>
                   </div>  
                   <div className="form-group  offset-lg-10  col-sm-12">
                     <input type="text"  onChange={this.handleChange} placeholder="Question" value={this.state.postContent} name="postContent"></input><br/>
                   </div> 
                   <div className="form-group offset-lg-11 col-sm-12">
                     <input type="button" onClick={this.postSubmit} value="Post" ></input>
                   </div>    
                </form>
                
            </div>
            
        );
    }
}
export default Question;