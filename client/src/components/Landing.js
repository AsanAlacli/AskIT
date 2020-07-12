import React, { Component } from 'react'
import image from '../assets/img/3.png'
import Footer from './footer'
class Landing extends Component {
    render () {
        return (
<div class="container px-lg-5">
  <div class="row mx-lg-n5">
    <h1 class="col py-4 px-lg-5 font-weight-bolder text-justify-center"> Welcome To Ask It App</h1>
    <div class="col py-3 px-lg-5 w-50">    
     <img src={image} alt="Logo" class="rounded float-right" title="Home" style={{height: "345px",with: "520px"}}/>
    </div>
  </div>

 <Footer />           
</div>
        )
    }
}

export default Landing