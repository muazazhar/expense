import React, { useContext } from "react";
import { Transaction } from "./Transaction";

import { GlobalContext } from "../context/globalContext";

export const TransactionHistory = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div style={{ width: "300px" }}>
      <h3 style={{ borderBottom: "1px solid black", padding: "5px 0px" }}>
        Transaction History
      </h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};
