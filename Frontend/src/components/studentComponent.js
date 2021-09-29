import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap'
import axios from 'axios';




class studentComponent extends Component {
  constructor(props){
    super(props)

    this.state={
      admin: {}
    }

    this.changeVar_1 = this.changeVar_1.bind(this);
  }

  async componentDidMount(){
    
}

  async changeVar_1 () {
    const res = await axios.get('http://localhost:4000/api/admin/getAdmins');
    this.setState({admin:res.data[0]});
  };

    render() {
     return (
      <div>
         <div className="containe-fluid">
             <div className="row col-08">
                <img src= "estudiantes.jpg"/>
                <Form>
  <Form.Group className="mb-3" controlId="formBasicusuario">
    <Form.Label>Nombre de usuario</Form.Label>
    <Form.Control type="Usuario" placeholder="Enter usuario" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

              
          
    </div>
      </div>
        </div>
       

    )
  }
}


export default studentComponent
    