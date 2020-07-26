import React from 'react';
//navigaiton
import { Switch, Route, Redirect } from 'react-router-dom'
//layout
import { Container, Row, Col } from 'reactstrap';
import { Navbar, NavbarBrand } from 'reactstrap';
//component
import Header from "./Header";
import Footer from './Footer';
//Route
import ContactComponent from './ContactComponent';
import HomeComponent from './HomeComponent';
import MenuComponent from './MenuComponent';
//data
import { DISHES } from '../shared/dishes';
import { LEADERS } from '../shared/leader';
import { PROMOTIONS } from '../shared/promotions';



function Main() {
  const dishes = DISHES;
  const leaders = LEADERS;
  const promotions = PROMOTIONS;

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component={() => <HomeComponent promotion={promotions[0]} dish={dishes[0]} leader={leaders[0]}/>}/>
        <Route path="/aboutus" component={() => <h1>About us view</h1>}/>
        <Route path="/menu" component={() => <MenuComponent dishes={dishes}/>}/>
        <Route path="/contactus" component={() => <ContactComponent />}/>
        <Redirect to="/home"/>
      </Switch>
      <Footer />
    </div>
  );
}

export default Main;
