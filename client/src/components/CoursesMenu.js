import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import CourseList from '../data/courses.json';
import './Stylesheets/CoursesMenu.css';


class CoursesMenu extends Component {

    render() {
        return (
            <div className="coursesList">
                <h4>Courses</h4>
                {
                   CourseList.map(courseList =>{
                       return(
                            <div className="course">
                                <Link to='/profile'>{courseList.name}</Link> 
                            </div>
                       )
                   })
                }
            </div>
        );
    }
}

export default CoursesMenu;