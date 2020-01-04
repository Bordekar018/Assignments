import { auth, googleProvider } from "../../Firebase/Firebase";
import { history } from "../../History/History";

//Authentication Action.

export const googleAuth = () => {
  return async () => {
    await auth.signInWithPopup(googleProvider);
    history.push("/home");
    window.location.reload();
  };
};

// To Save Google Authentication Data.

export const SaveGoogleAuthData = () => {
  return async dispatch => {
    await auth.onAuthStateChanged(response => {
      dispatch({ type: "FetchAuthData", payload: response });
    });
  };
};

export const signOut = () => {
  return async () => {
    await auth.signOut();
    history.push("/login");
    window.location.reload();
  };
};
