const INCREASE_TIME = "students/INCREASE_TIME";
const DECREASE_TIME = "students/DECREASE_TIME";
const MODIFY_EMAIL = "students/MODIFY_EMAIL";

const initialState = {
  name: "André Rafael",
  email: "andre@origamid.com",
  daysLeft: 120,
};

export const increaseTime = () => ({ type: INCREASE_TIME });
export const decreaseTime = () => ({ type: DECREASE_TIME });
export const modifyEmail = (email) => ({
  type: MODIFY_EMAIL,
  payload: email,
});

const studentReducer = immer.produce((state, action) => {
  switch (action.type) {
    case INCREASE_TIME:
      state.daysLeft += 1;
      break;

    case DECREASE_TIME:
      state.daysLeft -= 1;
      break;

    case MODIFY_EMAIL:
      state.email = action.payload;
      break;
  }
}, initialState);

export default studentReducer;
