import React, { useContext } from "react";
import { GlobalContext } from "../context/globalContext";

export const AccountSummary = () => {
  const { transactions } = useContext(GlobalContext);
  let amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, cur) => acc + cur, 0)
    .toFixed(2);
  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, cur) => acc + cur, 0);

  return (
    <div className="inc-exp-container">
      <div>
        <h3>Income</h3>
        <h4 style={{ color: "green", fontSize: 17 }}>{income}</h4>
      </div>
      <div>
        <h3>Expense</h3>
        <h4 style={{ color: "red", fontSize: 17 }}>
          {(expense * -1).toFixed(2)}
        </h4>
      </div>
    </div>
  );
};
