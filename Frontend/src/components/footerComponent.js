import React from 'react';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form'


function Footer(props){
    return (
        <div className="footer">
        <div className="container">
               <h1 style={{ color: 'purple' }}>BIENVENIDOS A LA UNIVERSIDAD DE LA CALLE </h1>
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
               
                    <h2>Enlaces </h2>
                    <ul className="list-unstyled">
                
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/admin">Adminstrador</Link></li>
                        <li><Link to="/teacher">Profesor</Link></li>
                        <li><Link to="/student">Estudiantes</Link></li>
                        <li><Link to="/">Sobre nosotros</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h2>Nuestra dirección</h2>
                    <address>
		              Su dirección<br />
		              Barrio<br />
		              Ciudad<br />
		              <i className="fa fa-phone fa-lg"></i>: Teléfono 1<br />
		              <i className="fa fa-fax fa-lg"></i>: Teléfono 2<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:confusion@food.net">
                         correo@email.com</a>
                    </address>
                </div>
             <div className="text-center"
                className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                       
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2021 Universidad de la Calle</p>
                </div>
                <>
  <Form.Label htmlFor="exampleColorInput">Color picker</Form.Label>
  <Form.Control
    
    
  />
</>
            </div>
        </div>
    </div>
);
}


export default Footer;