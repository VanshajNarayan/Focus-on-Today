import { createContext, useContext, useReducer } from "react";
import { ReducerFunx } from "./ReducerFx";

const dataContext = createContext(null);
const dispatchContext = createContext(null);

export const AppProvider = ({ children }) => {
  const initialState = {
    setCount: 3,
    progresStep: 0,
  };
  const [state, dispatch] = useReducer(ReducerFunx, initialState);
  return <dataContext.Provider value={state}>
    <dispatchContext.Provider value={dispatch}>
      {children}
    </dispatchContext.Provider>
  </dataContext.Provider>
};

// ! custom Hook:-

export function useData() {
  return useContext(dataContext);
}

export function useDispatch() {
  return useContext(dispatchContext);
}