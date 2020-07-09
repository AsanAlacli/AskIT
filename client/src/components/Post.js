import React, { Component } from 'react';
import PostData from '../data/postsData.json'
import './Stylesheets/Post.css'
import Like from '../assets/img/like.png'
import Dislike from '../assets/img/dislike.png'
import Footer from './footer'

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
                        <div className="container">
                            <div className="row border border-warning m-5 pb-5">
                                <div className="col col-12">
                                  <h4> {post.postTitle}</h4>
                                  <h6> {post.postContent}</h6>
                                </div>
                                <div className="col-12">
                                <p>Posted By:  {post.postAuthor}</p>
                                </div>
                                <div className="col-12">
                                <p>Posted on  {post.postDate}</p>
                                </div>
                                <div className="col-12">
                                <p><img src={Like} alt="Likes" name="likes" onClick={this.likeClicked}/>
                                    {post.postLikes} Fellows
                                </p>
                                </div>
                                <div className="col-12">
                                <p><img src={Dislike} name="dislikes" alt="Dislikes" onClick={this.dislikeClicked}/>
                                    {post.postDislikes} Fellows
                                </p>
                                </div>

                            </div>
                        </div>  
                       )
                   })
                }   
                <Footer/>
            </div>
        );
    }
}

export default Post;