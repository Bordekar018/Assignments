export const SurveyReducer = (state = [], action) => {
  switch (action.type) {
    case "Fetch_Data":
      return action.payload;

    default:
      return state;
  }
};
