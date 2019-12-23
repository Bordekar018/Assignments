import axios from "axios";
export const FETCH_POST_REQUEST = "FETCH_POST_REQUEST";
export const FETCH_POST_REQUEST_SUCCESS = "FETCH_POST_REQUEST_SUCCESS";
export const FETCH_POST_ERROR = "FETCH_POST_ERROR";

export const FETCH_POST_REQUESTAC = () => {
  return {
    type: FETCH_POST_REQUEST
  };
};

export const FETCH_POST_REQUEST_SUCCESSAC = UsersList => {
  return {
    type: FETCH_POST_REQUEST_SUCCESS,
    payload: UsersList
  };
};

export const FETCH_POST_ERRORAC = error => {
  return {
    type: FETCH_POST_ERROR,
    payload: error
  };
};

export const FetchPostData = () => {
  return function(dispatch) {
    dispatch(FETCH_POST_REQUESTAC());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        const users = response.data.map(data => data);
        dispatch(FETCH_POST_REQUEST_SUCCESSAC(users));
      })
      .catch(error => dispatch(FETCH_POST_ERRORAC(error.message)));
  };
};
