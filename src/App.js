import React from 'react';

//layout
import { Container, Row, Col } from 'reactstrap';
import { Navbar, NavbarBrand } from 'reactstrap';

//component
import Menu, { MenuItem } from './components/MenuComponent';


function App() {
  return (
    <div className="App">
      <Navbar color="primary" dark={true}>
        <Container fluid>
          <NavbarBrand href="#">Ristorante Con Fusion</NavbarBrand>
        </Container>     
      </Navbar>

      <Menu />
    </div>
  );
}

export default App;
