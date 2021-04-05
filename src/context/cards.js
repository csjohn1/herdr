import React, { useReducer, createContext } from "react";
import { db } from "../data/data.js";

const initialState = { cards: db };
const store = createContext(initialState);
const { Provider } = store;

const CardProvider = ({ children }) => {
  const [state, cardDispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "REMOVE":
        return {
          cards: [...state.cards.filter((x) => x.name !== action.character.name)],
        };
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, cardDispatch }}>{children}</Provider>;
};

export { store, CardProvider };
