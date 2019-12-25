export const reducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_VIDEO_REQUEST_SUCCESS":
      return action.payload; //Removed []

    default:
      return state;
  }
};

export const playReducer = (state = [], action) => {
  switch (action.type) {
    case "play_That_Video":
      return action.payload;

    default:
      return state;
  }
};
