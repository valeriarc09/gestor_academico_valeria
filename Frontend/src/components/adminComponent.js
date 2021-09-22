import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'

export default class adminComponent extends Component {
  render() {
    return (

<div>

  <Form.Label htmlFor="exampleColorInput">Color picker</Form.Label>
  <Form.Control
    type="color"
    id="exampleColorInput"
    defaultValue="#563d7c"
    title="Choose your color"
  />
</div>
    )
  }
}
