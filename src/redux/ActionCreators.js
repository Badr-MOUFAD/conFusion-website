import * as ActionTypes from "./ActionTypes";
import { DISHES } from "../shared/dishes";
import { baseUrl } from "../shared/baseUrl";


export const addComment = (dishId, author, rate, comment) => {
    return {
        type: ActionTypes.ADD_COMMENT,
        payload: {
            author: author,
            rate: rate,
            comment: comment,
            dishId: dishId
        }
    }
}

export const dishesLoading = () => {
    return {
        type: ActionTypes.DISHES_LOADING
    }
}

export const addDishes = (dishes) => {
    return {
        type: ActionTypes.ADD_DISHES,
        payload: dishes
    }
}
export const dishFailed = (errorMessage) => {
    return {
        type: ActionTypes.DISHES_FAILED,
        payload: errorMessage
    }
}

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading());

    fetch(baseUrl + "dishes")
    .then(response => {
        if(response.ok) {
            return response;
        }
        else {
            throw new Error(response.status + " " + response.statusText);
        }
    }, err => {
        throw new Error(err.message)
    })
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(err => dispatch(dishFailed(err.message)))
}

export const promosLoading = (promos) => {
    return {
        type: ActionTypes.PROMOS_LOADING,
        payload: promos
    }
}

export const promosFailed = (errorMessage) => {
    return{
        type: ActionTypes.PROMOS_FAILED,
        payload: errorMessage
    }
}

export const addPromotions = (promos) => {
    return{
        type:ActionTypes.ADD_PROMOS,
        payload: promos
    }
}

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading());

    fetch(baseUrl + "promotions")
    .then(response => {
        if(response.ok) {
            return response;
        }
        else {
            throw new Error(response.status + " " + response.statusText);
        }
    }, err => {
        throw new Error(err.message);
    })
    .then(response => response.json())
    .then(promotions => dispatch(addPromotions(promotions)))
    .catch(err => dispatch(promosFailed(err.message)))
}