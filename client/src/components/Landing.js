import React, { Component } from 'react'
import image from '../assets/img/mohaimn.jpg'
import Footer from './footer'
import {Link} from 'react-router-dom';
import{Jumbotron,Container,Row,Col,Image,Button} from 'react-bootstrap'
class Landing extends Component {
    render () {
        return (
              <Container>
                <Jumbotron>
                  <h2>Welcome to ASK-IT </h2>
                  <p>In ASK-IT website you can ask about courses and get answers from friends, sharing information about exams .</p>
                  <Link to ="/register">
                    <Button bsStyle="primary"> Register Now</Button>
                  </Link>
                </Jumbotron>  
                <Row className="show-grid text-center">
                  <Col xs={12} sm={3} className="person-wrapper">
                    <Image src={image} circle className="profile-pic"/>
                    <h3>Mohaimn Layth</h3>
                    <p>gdhjkldkjhgfghjklskjhgfdfghjklkjhgsffghj</p>
                  </Col> 
                  <Col xs={12} sm={3} className="person-wrapper">
                    <Image src={image} circle className="profile-pic"/>
                    <h3>Mohaimn Layth</h3>
                    <p>gdhjkldkjhgfghjklskjhgfdfghjklkjhgsffghj</p>
                  </Col> 
                  <Col xs={12} sm={3} className="person-wrapper">
                    <Image src={image} circle className="profile-pic"/>
                    <h3>Mohaimn Layth</h3>
                    <p>gdhjkldkjhgfghjklskjhgfdfghjklkjhgsffghj</p>
                  </Col>  
                  <Col xs={12} sm={3} className="person-wrapper">
                    <Image src={image} circle className="profile-pic"/>
                    <h3>Mohaimn Layth</h3>
                    <p>gdhjkldkjhgfghjklskjhgfdfghjklkjhgsffghj</p>
                  </Col> 
                </Row>
                <Footer/>           
              </Container>

        )
    }
}

export default Landing