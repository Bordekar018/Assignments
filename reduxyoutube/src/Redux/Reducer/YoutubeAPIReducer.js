const reducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_VIDEO_REQUEST_SUCCESS":
      return action.payload; //Removed []

    default:
      return state;
  }
};
export default reducer;
