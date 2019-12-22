export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_REQUEST_SUCCESS = "FETCH_USERS_REQUEST_SUCCESS";
export const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";
import axios from "axios";

export const FETCH_USERS_REQUESTAC = () => {
  return {
    type: FETCH_USERS_REQUEST
  };
};

export const FETCH_USERS_REQUEST_SUCCESSAC = UsersList => {
  return {
    type: FETCH_USERS_REQUEST_SUCCESS,
    payload: UsersList
  };
};

export const FETCH_USERS_ERRORAC = error => {
  return {
    type: FETCH_USERS_ERROR,
    payload: error
  };
};

export const FetchUserData = () => {
  return function(dispatch) {
    dispatch(FETCH_USERS_REQUESTAC());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        const users = response.data.map(data => data.id);
        dispatch(FETCH_USERS_REQUEST_SUCCESSAC(users));
      })
      .catch(error => dispatch(FETCH_USERS_ERRORAC(error.message)));
  };
};
