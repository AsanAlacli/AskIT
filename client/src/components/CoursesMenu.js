import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import CourseList from '../data/courses.json';
import './Stylesheets/CoursesMenu.css';
import Question from './Question'

class CoursesMenu extends Component {

    render() {
        const {onClick} = this.props;
        console.log(onClick);
        return (
            <div className="coursesList">
                <h4>Courses</h4>
                {
                   CourseList.map(courseList =>{
                       return(
                            <div className="course">
                                <button onClick={ () => onClick(courseList.name)} >{courseList.name}</button>
                        
                        
                                {/* <Link to='/profile'  >{courseList.name}</Link>  */}
                                
                            </div>
                            
                       )
                   })
                }
            </div>
        );
    }
}

export default CoursesMenu;