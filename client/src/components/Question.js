import React, { Component } from 'react';

class Question extends Component{

    constructor(props){
        super(props);
        this.state ={
            postTitle:'',
            postContent:'',
            
        }
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
    /* courseNameHandler(name)
    {
        this.setState({courseName:name})
    } */
    render() {
        return (
            <div className="container">
                <form className="row justify-content-lg-center  ">
                   <h3 className="mt-4 justify-content-lg-center"> {this.props.courseName} </h3>
                   <div className="form-group offset-lg-10 col-sm-12">
                     <input type="text" onChange={this.handleChange} placeholder="Post Title" value={this.state.postTitle} name="postTitle"></input>
                   </div>  
                   <div className="form-group  offset-lg-10  col-sm-12">
                     <input type="text"  onChange={this.handleChange} placeholder="Question" value={this.state.postContent} name="postContent"></input><br/>
                   </div> 
                   <div className="form-group offset-lg-11 col-sm-12">
                     <button onClick={(val) => this.props.onClick({qTitle:this.state.postTitle, qContent:this.state.postContent})} >Post</button>
                    {/* <input type="button" onClick={(title,question) => this.props.postQuestion()} value="Post" ></input> */}
                   </div>    
                </form>
                
            </div>
            
        );
    }
}
export default Question;