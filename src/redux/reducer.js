import { DISHES } from '../shared/dishes';
import { LEADERS } from '../shared/leader';
import { PROMOTIONS } from '../shared/promotions';

export const initialState = {
    dishes: DISHES,
    leaders: LEADERS,
    promotions: PROMOTIONS
}

export const Reducer = (state = initialState, action) => {
    return state
}; 