import React from "react";
// import { GlobalProvider } from "./contextx/context";

export const Transaction = (transaction) => {
  return (
    <li className="minus">
      {transaction.description}
      <span style={{ margin: "unset" }}>{transaction.transactionAmount}</span>
      <button className="del-btn" title="Delete this item">
        X
      </button>
    </li>
  );
};
