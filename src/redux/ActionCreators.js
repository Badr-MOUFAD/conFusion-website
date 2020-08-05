import * as ActionTypes from "./ActionTypes";
import { DISHES } from "../shared/dishes";


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

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading());

    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);
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