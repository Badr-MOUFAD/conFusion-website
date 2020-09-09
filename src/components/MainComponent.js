import React, { useEffect } from 'react';
//redux
import { connect } from 'react-redux';
import { addComment, postFeedback } from "../redux/ActionCreators";
import { fetchDishes } from "../redux/ActionCreators";
import { fetchPromos } from "../redux/ActionCreators";
import { fetchLeaders } from "../redux/ActionCreators";
//navigaiton
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
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
    postFeedback: (feedback) => dispatch(postFeedback(feedback)),
    fetchDishes: () => dispatch(fetchDishes()),
    fetchPromos: () => dispatch(fetchPromos()),
    fetchLeaders: () => dispatch(fetchLeaders())
  }
};

function Main(props) {
  const dishes = props.dishes.dishes;
  const isLoading = props.dishes.isLoading;
  const errorMessage = props.dishes.errorMessage;

  const promotions = props.promotions.promotions;
  const isLoadingPromos = props.promotions.isLoading;
  const errorMessagePromos = props.promotions.errorMessage;

  const leaders = props.leaders.leaders;
  const isLoadingLeaders = props.leaders.isLoading;
  const errorMessageLeaders = props.leaders.errorMessage;

  const addComment = props.addComment;
  const postFeedback = props.postFeedback;

  const fetchDishes = props.fetchDishes;
  const fetchPromos = props.fetchPromos;
  const fetchLeaders = props.fetchLeaders;

  useEffect(() => {
    fetchLeaders();
  }, [])

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
            <Route path="/home" component={() => <HomeComponent promotion={promotions[0]} dish={dishes[0]} leader={leaders[0]} isLoading={isLoading} errorMessage={errorMessage} errorMessagePromos={errorMessagePromos} isLoadingPromos={isLoadingPromos} isLoadingLeaders={isLoadingLeaders} errorMessageLeaders={errorMessageLeaders}/>}/>
            <Route path="/about-us" component={({ location }) => <AboutUsComponent location={location} leaders={leaders} isLoadingLeaders={isLoadingLeaders} errorMessageLeaders={errorMessageLeaders}/>}/>
            <Route exact path="/menu" component={({ location }) => <MenuComponent location={location} dishes={dishes} isLoading={isLoading} errorMessage={errorMessage}/>}/>
            <Route path="/menu/:name" component={({ match, location }) => <DishDetailComponent location={location} dish={getFirstDishByName(match.params.name)} addComment={addComment} isLoading={isLoading} errorMessage={errorMessage}/>}/>
            <Route path="/contact-us" component={({ location }) => <ContactComponent postFeedback={postFeedback} location={location}/>}/>
            <Redirect to="/home"/>
          </Switch>
        </CSSTransition> 
      </TransitionGroup> 
      <Footer />
    </div>
  );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
