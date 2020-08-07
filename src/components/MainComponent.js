import React, { useEffect, useReducer } from 'react';
//redux
import { connect } from 'react-redux';
import { addComment, addDishes, dishesLoading, dishFailed, fetchDishes } from "../redux/ActionCreators";
import { addPromotions,  promosLoading, promosFailed, fetchPromos } from "../redux/ActionCreators";
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
//animation
import { CSSTransition, TransitionGroup } from "react-transition-group"


const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    leaders: state.leaders,
    promotions: state.promotions
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (dishId, author, rate, comment) => dispatch(addComment(dishId, author, rate, comment)),
    fetchDishes: () => dispatch(fetchDishes()),
    fetchPromos: () => dispatch(fetchPromos())
  }
};

function Main(props) {
  const dishes = props.dishes.dishes;
  const isLoading = props.dishes.isLoading;
  const errorMessage = props.dishes.errorMessage;

  const promotions = props.promotions.promotions;
  const isLoadingPromos = props.promotions.isLoading;
  const errorMessagePromos = props.promotions.errorMessage;

  const leaders = props.leaders;
  const addComment = props.addComment;

  const fetchDishes = props.fetchDishes;
  const fetchPromos = props.fetchPromos;

  useEffect(() => {
    fetchPromos();
  }, [])

  useEffect(() => {
    fetchDishes();
  }, []);

  function getFirstDishByName(name) { 
    return dishes.filter((dish) => dish.name == name)[0];
  }

  return (
    <div>
      <Header />
      <TransitionGroup>
        <CSSTransition key={props.location.key} timeout={300} classNames="page">
          <Switch location={props.location}>
            <Route path="/home" component={() => <HomeComponent promotion={promotions[0]} dish={dishes[0]} leader={leaders[0]} isLoading={isLoading} errorMessage={errorMessage} errorMessagePromos={errorMessagePromos} isLoadingPromos={isLoadingPromos}/>}/>
            <Route path="/about-us" component={({ location }) => <AboutUsComponent location={location} leaders={leaders}/>}/>
            <Route exact path="/menu" component={({ location }) => <MenuComponent location={location} dishes={dishes} isLoading={isLoading} errorMessage={errorMessage}/>}/>
            <Route path="/menu/:name" component={({ match, location }) => <DishDetailComponent location={location} dish={getFirstDishByName(match.params.name)} addComment={addComment} isLoading={isLoading} errorMessage={errorMessage}/>}/>
            <Route path="/contact-us" component={({ location }) => <ContactComponent location={location}/>}/>
            <Redirect to="/home"/>
          </Switch>
        </CSSTransition> 
      </TransitionGroup> 
      <Footer />
    </div>
  );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
