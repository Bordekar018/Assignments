export const yearReducer = (state = {}, action) => {
  switch (action.payload) {
    case "getAge":
      return action.payload;

    default:
      return state;
  }
};
