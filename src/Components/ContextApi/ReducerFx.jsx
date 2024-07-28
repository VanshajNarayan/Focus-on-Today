export function ReducerFunx(state, action) {
  switch (action.type) {
    case "Action_checkbox" : 
      const { inputArr, data } = action.payload;
      let countStep;
      if (inputArr.includes(data)) {
        countStep = state.progresStep + 1;
      };
      return {
        ...state,
        setCount: state.setCount - 1,
        progresStep: countStep,
      }
    default:
      return state;
  }
};