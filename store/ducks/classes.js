const COMPLETE_CLASS = "classes/COMPLETE_CLASS";
const COMPLETE_COURSE = "classes/COMPLETE_COURSE";
const RESET_COURSE = "classes/RESET_COURSE";

const initialState = [
  {
    id: 1,
    name: "Design",
    isCompleted: true,
  },
  {
    id: 2,
    name: "HTML",
    isCompleted: false,
  },
  {
    id: 3,
    name: "CSS",
    isCompleted: false,
  },
  {
    id: 4,
    name: "JavaScript",
    isCompleted: false,
  },
];

export const completeClass = (id) => ({
  type: COMPLETE_CLASS,
  payload: id,
});
export const completeCourse = () => ({ type: COMPLETE_COURSE });
export const resetCourse = () => ({ type: RESET_COURSE });

const classReducer = immer.produce((state, action) => {
  switch (action.type) {
    case COMPLETE_CLASS:
      const index = state.findIndex((s) => s.id.toString() === action.payload);
      state[index].isCompleted = true;
      break;

    case COMPLETE_COURSE:
      state.map((s) => (s.isCompleted = true));
      break;

    case RESET_COURSE:
      state.map((s) => (s.isCompleted = false));
      break;
  }
}, initialState);

export default classReducer;
