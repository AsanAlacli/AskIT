import React, { Component } from 'react';
import Question from './Question';
import SideBar from './Sidebar';
import Post from './Post';
import CourseWise from '../data/coursewisePosts.json';
import ReactDOM from 'react-dom';

class Forum extends Component {


    constructor(props){
        super(props);
        this.state = {
            stateUpdated: false,
            courseName:'All Courses',
            coursewisePosts:CourseWise
        }
    }
    
    render() {
        if(!this.state.stateUpdated){
            return (
                <div>
                <h3>Welcome to Discussion Forum</h3>
                <h4>{this.state.courseName}</h4>
                <SideBar onClick = {this.courseClick}/>
                <Post parent={this.state}/>
            </div>
            
            );
        }else{
            return(
                <div>
                <h3>Welcome to Discussion Forum</h3>
                <Question courseName = {this.state.courseName} onClick={this.postQuestion}  />
                <SideBar onClick = {this.courseClick}/>
                <Post id="postDiv"parent={this.state}/>

            </div>
            );
        }
    
    }
    
    postQuestion= (val) => {
        
        var temp = {
            "postId": 0,
            "postContent": "Does anyone know the Banking problem?",
            "postCourse": "Distributed Systems",
            "author": "Mohaymen",
            "date": "12-12-12",
            "time": "12:24",
            "likes": 3,
            "dislikes": 0,
            "replies": [
                {
                    "replyId": 0,
                    "replyContent": "Just google it and you can find it.",
                    "author": "Chris",
                    "date": "12-12-12",
                    "time": "12:26"
                }
            ]
        }
        temp.postContent = val.qContent;
        temp.postCourse = this.state.courseName;
        console.log("before adding",this.state.coursewisePosts);
        this.state.coursewisePosts.push(temp);
        console.log("after adding",this.state.coursewisePosts);
        this.forceUpdate();
        
    }
    courseClick = (val) => {
        this.setState({courseName: val, stateUpdated: true});
    }
}

export default Forum;