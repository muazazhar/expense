import React, { useState } from "react";

export const AddTransaction = () => {
  const [description, setDescription] = useState();
  const [transactionAmount, setTransactionAmount] = useState();
  return (
    <div style={{ width: "300px" }}>
      <h3 style={{ borderBottom: "1px solid black", padding: "5px 0px" }}>
        Add New Transaction
      </h3>
      <form>
        <div className="form-control">
          <label htmlFor="Description">Description</label>
          <input
            type="text"
            id="Description"
            placeholder="Details of Transaction"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="transactionAmount">Transaction Amount</label>
          <input
            type="number"
            id="transactionAmount"
            placeholder="Enter Transaction Amount"
            value={transactionAmount}
            onChange={(e) => setTransactionAmount(e.target.value)}
          />
        </div>
        <button className="add-tran-btn">Add Transaction</button>
      </form>
    </div>
  );
};
