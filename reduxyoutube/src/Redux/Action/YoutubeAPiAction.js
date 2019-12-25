import axios from "axios";

export const Fetch_Videos_API = aim => {
  return async function(dispatch) {
    let response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBoDOoA-VMyTS7cnjzuyZgn-kzUl8yLckk`,
      {
        params: {
          part: "snippet",
          maxResults: 10,
          q: aim,
          pageToken: "AIzaSyBoDOoA-VMyTS7cnjzuyZgn-kzUl8yLckk"
        }
      }
    );
    dispatch({ type: "FETCH_VIDEO_REQUEST_SUCCESS", payload: response.data });
  };
};
