import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/globalContext";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);
  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
  };
  return (
    <div style={{ width: "300px" }}>
      <h3 style={{ borderBottom: "1px solid black", padding: "5px 0px" }}>
        Add New Transaction
      </h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="Description">Description</label>
          <input
            type="text"
            placeholder="Details of Transaction"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="transactionAmount">Transaction Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Transaction Amount"
          />
        </div>
        <button className="add-tran-btn">Add Transaction</button>
      </form>
    </div>
  );
};
