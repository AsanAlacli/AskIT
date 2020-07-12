import React, { Component } from 'react';
import PostData from '../data/postsData.json'
import './Stylesheets/Post.css'
import Like from '../assets/img/like.png'
import Dislike from '../assets/img/dislike.png'
import Footer from './footer'
import _ from 'lodash';
import CourseData from '../data/coursewisePosts.json'
import Forum from './Forum';

class Post extends Component {

    constructor(props){
        super(props);
        this.state={
            likes:4,
            dislikes:8,
            posts: PostData,
            coursePosts:CourseData
        }
    }

    onClickLike(val){
        this.setState(state => {
            const newPosts = this.state.posts;
            newPosts[val].postLikes++;
            return newPosts;
        });
        console.log('state update -> ', this.state.posts );
    }  
    onClickDislike(val){
        this.setState(state => {
            const newPosts = this.state.posts;
            newPosts[val].postDislikes++;
            return newPosts;
        });
        console.log('state update -> ', this.state.posts );
    }



    handleChange = e=>{
        this.setState({
            [e.target.value]:(e.target.value).toString()
        },
        console.log(e.target.value)
        )
    }
      
    render() {
        console.log("New DAta---",this.props.parent);
      //   console.log("coursename------>",this.props.courseName);
         
        return (
            <div>
                {
                   this.props.parent.coursewisePosts.map(post =>{
                    if(this.props.parent.courseName!=post.postCourse)
                    {
                         return (
                             <div>
                                 
                             </div>
                         );
                    }
                    //console.log("pposts",post);
                    else
                    return(
                        <div className="container">
                            <div className="row border border-warning m-5 pb-5">
                                <div className="col col-12 " key={post.postId}>
                                  <h6> {post.postContent}</h6>
                                </div>
                                <div className="col-12">
                                <p>Posted By:  {post.author}</p>
                                </div>
                                <div className="col-12">
                                <p>Posted on  {post.date}</p>
                                </div>
                                <div className="col-12">
                                <p><img src={Like} alt="Likes" name="likes" onClick={this.likeClicked}/>
                                    {post.postLikes} Fellows
                                </p>
                                </div>
                                <div className="col-12">
                                <p><img src={Dislike} name="dislikes" alt="Dislikes" onClick={() => this.onClickDislike(post.postId)}/>
                                    {post.dislikes} Fellows
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