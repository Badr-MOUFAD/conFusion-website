import * as ActionTypes from "./ActionTypes";
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

export const postFeedback = (feedback) => (dispatch) => {
    fetch(baseUrl + "feedback", {
        method: "POST",
        body: JSON.stringify(feedback),
        headers: {
            "Content-Type": "application/json"
          },
          credentials: "same-origin"
    })
    .then(response => {
        if(response.ok) {
            return response.json();
        }
        else {
            throw new Error(response.status + " " + response.statusText);
        }
    }, err => {
        throw new Error(err.message)
    })
    .then(response => {alert(JSON.stringify(response))})
    .catch(err => alert("Feedback send successfully"))
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

export const leadersLoading = () => {
    return {
        type: ActionTypes.LEADERS_LOADING
    }
}

export const leadersFailed = () => {
    return {
        type: ActionTypes.LEADERS_FAILED
    }
}

export const addLeaders = (leaders) => {
    return {
        type: ActionTypes.ADD_LEADERS,
        payload: leaders
    }
}

export const fetchLeaders = () => (dispatch) => {
    dispatch(leadersLoading);

    fetch(baseUrl + "leaders")
    .then(response => {
        if(response.ok) {
            return response.json();
        }
        else {
            throw new Error(response.status + " " + response.statusText);
        }
    }, err => {
        throw new Error(err.message);
    })
    .then(leaders => dispatch(addLeaders(leaders)))
    .catch(err => dispatch(leadersFailed(err.message)));
}