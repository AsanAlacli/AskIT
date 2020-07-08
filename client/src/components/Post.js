import React, { Component } from 'react';
import PostData from '../data/postsData.json'
import './Stylesheets/Post.css'
import Like from '../assets/img/like.png'
import Dislike from '../assets/img/dislike.png'

class Post extends Component {

    state={
        likes:4,
        dislikes:8
    }

    likeClicked = () => {
       // console.log("yayyyyyyyyyyyyy");
        this.setState({likes:this.state.likes + 1});
    }   

    dislikeClicked = () => {
    //console.log("nayyyyyyyyyyy");
    this.setState({likes:this.state.dislikes + 1});
    } 

    handleChange = e=>{
        this.setState({
            [e.target.value]:(e.target.value+1).toString()
        },
        console.log(e.target.value)
        )
    }
      
    render() {
        return (
            <div>
                {
                   PostData.map(post =>{
                       return(
                            <div className="post">
                                <h4> {post.postTitle}</h4>
                                <h6> {post.postContent}</h6>
                                <p>Posted By:  {post.postAuthor}</p>
                                <p>Posted on  {post.postDate}</p>
                                <p><img src={Like} alt="Likes" name="likes" onClick={this.likeClicked}/>
                                    {post.postLikes} Fellows
                                </p>
                                <p><img src={Dislike} name="dislikes" alt="Dislikes" onClick={this.dislikeClicked}/>
                                    {post.postDislikes} Fellows
                                </p>
                            </div>
                       )
                   })
                }   
            </div>
        );
    }
}

export default Post;