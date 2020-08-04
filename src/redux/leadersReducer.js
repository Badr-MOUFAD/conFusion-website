import { LEADERS } from "../shared/leader";

export const LeadersReducer = (state = LEADERS, action) => {
    switch(action.type) {
        default:
            return state;
    }
}