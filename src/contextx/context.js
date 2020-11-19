import React, { createContext, useReducer } from "react";
// import { TransactionHistory } from "../components/TransactionHistory";
import AppReducer from "./reducer";

const initState = [
  { amount: 500, desc: "allola" },
  { amount: 200, desc: "jamola" },
  { amount: 100, desc: "gamola" },
];
//create global context
export const transContext = createContext(initState);

//create global provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initState);
  return (
    <transContext.Provider value={{ transaction: state }}>
      {children}
    </transContext.Provider>
  );
};
