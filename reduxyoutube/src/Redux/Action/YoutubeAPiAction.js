import axios from "axios";
export const FETCH_VIDEO_REQUEST = "FETCH_VIDEO_REQUEST";
export const FETCH_VIDEO_REQUEST_SUCCESS = "FETCH_VIDEO_REQUEST_SUCCESS";
export const FETCH_VIDEO_REQUEST_ERROR = "FETCH_VIDEO_REQUEST_ERROR";

export function FETCH_VIDEO_REQUESTAC() {
  return {
    type: FETCH_VIDEO_REQUEST
  };
}

export function FETCH_VIDEO_REQUEST_SUCCESSAC(videos) {
  return {
    type: FETCH_VIDEO_REQUEST_SUCCESS,
    payload: videos
  };
}

export function FETCH_VIDEO_REQUEST_ERRORAC(error) {
  return {
    type: FETCH_VIDEO_REQUEST_ERROR,
    payload: error
  };
}

export const Fetch_Videos_API = aim => {
  return function(dispatch) {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBoDOoA-VMyTS7cnjzuyZgn-kzUl8yLckk`,
        {
          params: {
            part: "snippet",
            maxResults: 10,
            q: aim,
            pageToken: "AIzaSyBoDOoA-VMyTS7cnjzuyZgn-kzUl8yLckk"
          }
        }
      )
      .then(response =>
        dispatch(FETCH_VIDEO_REQUEST_SUCCESSAC(response.data.items))
      );
  };
};
