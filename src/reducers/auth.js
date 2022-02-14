const isEmpty = require("is-empty")
const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    // case "GET_PLAYERDATA":
    //   return {
    //     ...state,
    //     playerData: action.payload
    //   };
    default:
      return state;
  }
}