import Cookie from 'js-cookie';

// Get the user from the cookie if it exists, otherwise set it to null
const initialState = Cookie.get("user") ? JSON.parse(Cookie.get("user")) : null;

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case "LOGIN": 
            return action.payload;
        case "LOGOUT": 
            return null;
        default:
            return state; // Return the state by default
    }
};
