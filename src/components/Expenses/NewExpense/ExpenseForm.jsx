import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseDate, setExpenseDate] = useState("");

  function addNewExpense(event) {
    event.preventDefault();
    const expenseData = {
      title: expenseTitle,
      amount: +expenseAmount,
      date: new Date(expenseDate),
    };

    props.onAddExpense(expenseData);
    setExpenseAmount("");
    setExpenseDate("");
    setExpenseTitle("");
  }

  return (
    <form onSubmit={addNewExpense}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            onChange={(e) => setExpenseTitle(e.target.value)}
            name="title"
            type="text"
            value={expenseTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={(e) => setExpenseAmount(e.target.value)}
            name="amount"
            type="text"
            value={expenseAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={(e) => setExpenseDate(e.target.value)}
            name="date"
            type="date"
            value={expenseDate}
            min="2022-01-01"
            max="2024-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
