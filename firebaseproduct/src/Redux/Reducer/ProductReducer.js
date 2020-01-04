export const FetchAuthReducer = (state = {}, action) => {
  switch (action.type) {
    case "FetchAuthData":
      return action.payload;

    default:
      return state;
  }
};
