import React, { Component } from 'react';
import CoursesMenu from './CoursesMenu';
import CourseList from '../data/courses.json';
import CourseHandler from './Forum'
import Footer from './footer'

class Sidebar extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="coursesList">
                <h4>Courses</h4>
                {
                   CourseList.map(courseList =>{
                       return(
                            <div className="course" key={courseList.name}>
                            
                                <button className="btn btn-light" onClick={(val) => this.props.onClick(courseList.name)} >{courseList.name}</button>
                        
                        
                                {/* <Link to='/profile'  >{courseList.name}</Link>  */}
                            </div>
                            
                       )
                   })
                }

            </div>
        );
    }
}

export default Sidebar;