import Cookie from "js-cookie";

// Get the user from the cookie if it exists, otherwise set it to null
const initialState = Cookie.get("event")
  ? JSON.parse(Cookie.get("event"))
  : null;

export const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH":
      return action.payload;
    case "UPDATEEVENT":
      return action.payload;
    default:
      return state; // Return the state by default
  }
};
