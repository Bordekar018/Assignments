const reducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_VIDEO_REQUEST_SUCCESS":
      return [action.payload];

    default:
      return state;
  }
};
export default reducer;
