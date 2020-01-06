import axios from "axios";
export const SurveyAction = () => {
  return async dispatch => {
    let response = await axios.get(
      `https://www.mocky.io/v2/56fcf6871000000e13aed252`
    );
    dispatch({ type: "Fetch_Data", payload: response.data });
  };
};
