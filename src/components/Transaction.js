import React, { useContext } from "react";
import { GlobalContext } from "../context/globalContext";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li className={sign == "-" ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign == "-" ? "-" : "+"} ${Math.abs(transaction.amount)}{" "}
      </span>
      <button
        className="del-btn"
        onClick={() => deleteTransaction(transaction.id)}
      >
        X
      </button>
    </li>
  );
};
