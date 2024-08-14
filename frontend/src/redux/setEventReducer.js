import Cookie from "js-cookie";
const initialState = Cookie.get("currentEvent")
  ? JSON.parse(Cookie.get("currentEvent"))
  : null;

export const setEventReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CURRENTEVENT":
      return action.payload;
    default:
      return state;
  }
};
