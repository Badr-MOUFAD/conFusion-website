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
import DishDetailComponent, { DividerComponent } from './DishDetailComponent';
import AboutUsComponent from './AboutUsComponent';
//data
import { DISHES } from '../shared/dishes';
import { LEADERS } from '../shared/leader';
import { PROMOTIONS } from '../shared/promotions';



export default function Main() {
  const dishes = DISHES;
  const leaders = LEADERS;
  const promotions = PROMOTIONS;

  function getFirstDishByName(name) {
    return dishes.filter((dish) => dish.name == name)[0];
  }

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component={() => <HomeComponent promotion={promotions[0]} dish={dishes[0]} leader={leaders[0]}/>}/>
        <Route path="/about-us" component={({ location }) => <AboutUsComponent location={location} leaders={leaders}/>}/>
        <Route exact path="/menu" component={({ location }) => <MenuComponent location={location} dishes={dishes}/>}/>
        <Route path="/menu/:name" component={({ match, location }) => <DishDetailComponent location={location} dish={getFirstDishByName(match.params.name)}/>}/>
        <Route path="/contact-us" component={({ location }) => <ContactComponent location={location}/>}/>
        <Redirect to="/home"/>
      </Switch>
      <Footer />
    </div>
  );
}
