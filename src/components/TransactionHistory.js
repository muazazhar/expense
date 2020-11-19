import React, { useContext } from "react";
import { GlobalProvider } from "../contextx/context";

export const TransactionHistory = () => {
  const { transaction } = useContext(GlobalProvider);
  console.log(transaction);
  return (
    <div style={{ width: "300px" }}>
      <h3 style={{ borderBottom: "1px solid black", padding: "5px 0px" }}>
        Transaction History
      </h3>
      <ul className="list">
        <li className="plus">
          Project 1 income
          <span style={{ margin: "unset" }}>+$1,000</span>
          <button className="del-btn" title="Delete this item">
            X
          </button>
        </li>
        <li className="minus">
          Project 1 expense
          <span style={{ margin: "unset" }}>-$500</span>
          <button className="del-btn" title="Delete this item">
            X
          </button>
        </li>
      </ul>
    </div>
  );
};
