import React from "react";

export const AccountSummary = () => {
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p style={{ color: "green", fontWeight: "bold" }}>$0.00</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p style={{ color: "red", fontWeight: "bold" }}>$0.00</p>
      </div>
    </div>
  );
};
