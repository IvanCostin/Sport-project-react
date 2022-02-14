import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
// CREATE USER
export const login = (email, password) =>  dispatch => {
  axios
    .post("/api/auth/login", {email, password})
    .then(res => {
      const jwt = res.data
        localStorage.setItem('token', jwt);
        setAuthToken(jwt);
        const decoded = jwt_decode(jwt);
        dispatch(setCurrentUser(decoded));
        window.location = "/"
      }
    )
    .catch(err =>
      console.log(err)
    );
};

export const register = (name, email, password) => dispatch => {
  axios
    .post("/api/auth/register", {name, email, password})
    .then(res => {
        window.location = "/login"
      }
    )
    .catch(err =>
      console.log(err)
    );
};

export const setCurrentUser = decoded => {
  return {
    type: "SET_CURRENT_USER",
    payload: decoded
  }
}

export const logout = () => dispatch => {
  localStorage.removeItem("token");
  setAuthToken(false);
  // console.log('User logged out');
  // logout user and turn isAuthenticated to false
  dispatch(setCurrentUser({}));
  // window.location = "/";
};
// export const setTokens = (data) => dispatch => {
// 	dispatch({
// 		type: "SET_TOKENS",
// 		payload: data
// 	});
// };

// export const setTokenId = (data) => dispatch => {
// 	dispatch({
// 		type: "SET_TOKEN_ID",
// 		payload: data
// 	});
// };
