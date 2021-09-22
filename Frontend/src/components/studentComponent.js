import React, { Component } from 'react'

import {InputGroup, Button, FormControl} from 'react-bootstrap';
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
      <div class="container">
        <div class="row">
          <InputGroup className="mb-3">
            <Button onClick={this.changeVar_1}variant="outline-secondary" id="button-addon1">
              Button
            </Button>
        <FormControl
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1" 
        placeholder="Escriba aquí"
        value={this.state.admin.genero}
        onChange={e => this.setState({var_1:e.target.value})}
        type="text"/>
      
        </InputGroup>
    </div> 
    <div class="row">
      <InputGroup className="mb-3">
          <Button  variant="outline-secondary" id="button-addon1">
            Button
          </Button>
        <FormControl
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1" 
        placeholder="Su texto se mostrará aquí"
        value={this.state.admin.fechaNac}
        //onChange={e => this.setState({var_2 :e.target.value})}
        type="text"/>
        </InputGroup>
        </div>        
      </div>
    )
  }
}


export default studentComponent;