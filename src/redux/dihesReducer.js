import { DISHES } from "../shared/dishes";
import * as ActionTypes from "./ActionTypes";

export const DishesReducer = (state = DISHES, action) => {
    switch(action.type) {
        case ActionTypes.ADD_COMMENT:
            const payload = action.payload;
            const dish = state.filter((dish) => dish.id === payload.dishId)[0];
 
            const commentId = dish.comments.length;
            const date = new Date().toISOString();

            const comment = {
                id: commentId,
                rating: payload.rate,
                comment: payload.comment,
                author: payload.author,
                date: date
            }

            return state.map((dish) => {
                if(dish.id === payload.dishId)
                    return {...dish, comments: dish.comments.concat(comment)};

                return dish;
            });
        default:
            return state;
    }
}