
import React, { Component } from 'react';
import Question from './Question';
import SideBar from './Sidebar';
import Post from './Post';

class Forum extends Component {
    render() {
        return (
            <div>
                <Question/>
                <SideBar/>
                <Post/>

            </div>
            
        );
    }
}

export default Forum;