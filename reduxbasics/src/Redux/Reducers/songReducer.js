import { Show_Songs } from "../Actions/actiontypes";
export const playlist = [
  {
    id: 1,
    name: "abc",
    duration: 11
  },
  {
    id: 2,
    name: "abc",
    duration: 11
  },
  {
    id: 2,
    name: "abc",
    duration: 11
  }
];
export const songReducer = (state = playlist, action) => {
  switch (action.type) {
    case Show_Songs:
      return {
        palylist: state.playlist
      };
    default:
      return state;
  }
};
