import React from 'react';
//redux
import { connect } from 'react-redux';
import { addComment } from "../redux/ActionCreators";
//navigaiton
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
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


const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    leaders: state.leaders,
    promotions: state.promotions
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (dishId, author, rate, comment) => dispatch(addComment(dishId, author, rate, comment))
  }
};


function Main(props) {
  const dishes = props.dishes;
  const leaders = props.leaders;
  const promotions = props.promotions;
  const addComment = props.addComment;

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
        <Route path="/menu/:name" component={({ match, location }) => <DishDetailComponent location={location} dish={getFirstDishByName(match.params.name)} addComment={addComment}/>}/>
        <Route path="/contact-us" component={({ location }) => <ContactComponent location={location}/>}/>
        <Redirect to="/home"/>
      </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
