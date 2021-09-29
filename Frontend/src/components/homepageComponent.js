import React, { Component } from 'react'
import {Dropdown, Button, ButtonGroup, DropdownButton} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'



class homepageComponent extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div >
 
 <Carousel fade>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src="img.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="img 2.png"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="img 3.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
   
      </div>
    )
  }
}



export default homepageComponent 