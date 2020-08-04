import { createStore, combineReducers } from 'redux';

import { DishesReducer } from "./dihesReducer";
import { PromotionsReducer } from "./promotionsReducer";
import { LeadersReducer } from "./leadersReducer";

export const configurateStore = () => {
    const store = createStore(
        combineReducers({
            dishes: DishesReducer,
            leaders: LeadersReducer,
            promotions: PromotionsReducer
        })
    );

    return store
}