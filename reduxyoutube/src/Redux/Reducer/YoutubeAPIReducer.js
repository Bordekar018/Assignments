import {
  FETCH_VIDEO_REQUEST,
  FETCH_VIDEO_REQUEST_ERROR,
  FETCH_VIDEO_REQUEST_SUCCESS
} from "../Action/YoutubeAPiAction";

const initialState = {
  loading: true,
  youtubeVideoList: [],
  error: ""
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VIDEO_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_VIDEO_REQUEST_SUCCESS:
      return {
        loading: false,
        youtubeVideoList: [action.payload],
        error: ""
      };
    case FETCH_VIDEO_REQUEST_ERROR:
      return {
        loading: false,
        youtubeVideoList: [],
        error: action.payload
      };
    default:
      return state;
  }
};
export default reducer;
