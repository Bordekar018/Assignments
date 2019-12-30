export const calculateAge = date => {
  return async function(dispatch) {
    let dateObj = new Date();
    let convertedAgeToString = date.toString();
    let sliceConvertedString = convertedAgeToString.slice(0, 4);
    let year = dateObj.getFullYear() - sliceConvertedString;
    dispatch({ type: "getAge", payload: year });
  };
};
