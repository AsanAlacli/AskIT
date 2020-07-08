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
            <div>
                <form >
                    <h3>Welcome to Discussion Forum</h3>
                    <input type="text" onChange={this.handleChange} placeholder="Post Title" value={this.state.postTitle} name="postTitle"></input>
                    <input type="text"  onChange={this.handleChange} placeholder="Question" value={this.state.postContent} name="postContent"></input><br/>
                    <input type="button" onClick={this.postSubmit} value="Post" ></input>
                </form>
                
            </div>
            
        );
    }
}
export default Question;