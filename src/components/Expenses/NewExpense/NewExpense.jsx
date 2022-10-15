import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [checkAddNew, setCheckAddNew] = useState(false);
  function addNewExpense(expense) {
    const newExpense = { id: Math.random().toString(), ...expense };
    props.onAddExpense(newExpense);
    setCheckAddNew(false);
  }

  return (
    <div className="new-expense">
      {checkAddNew && (
        <ExpenseForm
          onCancel={() => setCheckAddNew(false)}
          onAddExpense={addNewExpense}
        />
      )}
      {!checkAddNew && (
        <button
          onClick={() => {
            setCheckAddNew(true);
          }}
        >
          Add New Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
