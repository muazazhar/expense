import React, { useContext } from "react";
import { transContext } from "../contextx/context";
import { Transaction } from "./Transaction";
export const TransactionHistory = () => {
  const transactions = useContext(transContext);
  console.log(Transaction);
  return (
    <div style={{ width: "300px" }}>
      <h3 style={{ borderBottom: "1px solid black", padding: "5px 0px" }}>
        Transaction History
      </h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};
