import React, { useContext } from "react";
import { GlobalContext } from "../context/globalContext";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  let amounts = transactions.map((transaction) => transaction.amount);
  let total = amounts.reduce((acc, cur) => acc + cur, 0).toFixed(2);
  return (
    <div className="balance">
      <h4>Current Balance</h4>
      <h1>${total}</h1>
    </div>
  );
};
