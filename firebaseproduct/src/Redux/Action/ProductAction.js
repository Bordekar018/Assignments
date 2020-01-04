import { database, auth, googleProvider } from "../../Firebase/Firebase";

export const googleAuth = () => {
  return async dispatch => {
    let response = await auth.signInWithPopup(googleProvider);
    dispatch({ type: "FetchAuthData", payload: response });
  };
};
