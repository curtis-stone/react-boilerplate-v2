const programsReducerDefaultState = [];

export default (state = programsReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_STRENGTH_PROGRAM":
      return state.concat(action.program);
    case "ADD_TONING_PROGRAM":
      return state.concat(action.program);
    default:
      return state;
  }
};
