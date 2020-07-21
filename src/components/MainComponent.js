import React from 'react';
//layout
import { Container, Row, Col } from 'reactstrap';
import { Navbar, NavbarBrand } from 'reactstrap';
//component
import Menu from './MenuComponent';

import { DISHES } from '../shared/dishes';


function Main() {
  const dishes = DISHES;

  return (
    <div>
      <Navbar className="mb-5" color="primary" dark={true}>
        <Container fluid>
          <NavbarBrand href="#">Ristorante Con Fusion</NavbarBrand>
        </Container>     
      </Navbar>

      <Menu dishes={dishes}/>
    </div>
  );
}

export default Main;
