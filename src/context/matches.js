import React, { useReducer, createContext } from "react";

const initialState = { matches: [] };
const match = createContext(initialState);
const { Provider } = match;

const MatchProvider = ({ children }) => {
  const [state, matchDispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "MATCH":
        return {
          matches: [action.matches, ...state.matches],
        };
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, matchDispatch }}>{children}</Provider>;
};

export { match, MatchProvider };
