import React from 'react';

import { Navbar, NavbarBrand } from 'reactstrap';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar color="primary" dark={true}>
        <div className="container">
          <NavbarBrand href="#">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
