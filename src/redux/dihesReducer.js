import * as ActionTypes from "./ActionTypes";
import { DISHES } from "../shared/dishes";

const initialState = {
    isLoading: true,
    errorMessage: null,
    dishes: []
}

export const DishesReducer = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true};

        case ActionTypes.ADD_DISHES:
            return {isLoading: false, errorMessage: null, dishes: action.payload};

        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errorMessage: action.payload};

        case ActionTypes.ADD_COMMENT:
            const payload = action.payload;
            const dish = state.dishes.filter((dish) => dish.id === payload.dishId)[0];
 
            const commentId = dish.comments.length;
            const date = new Date().toISOString();

            const comment = {
                id: commentId,
                rating: payload.rate,
                comment: payload.comment,
                author: payload.author,
                date: date
            }
            
            const updatedDishes = state.dishes.map((dish) => {
                if(dish.id === payload.dishId)
                    return {...dish, comments: dish.comments.concat(comment)};

                return dish;
            });

            return {...state, dishes: updatedDishes}

        default:
            return state;
    }
}