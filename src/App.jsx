import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";
const INITIAL_EXPENSES = [
  { id: 1, title: "Car Insurance", amount: 320, date: new Date(2022, 3, 4) },
  { id: 2, title: "coffee", amount: 104, date: new Date(2022, 6, 4) },
  { id: 3, title: "House Loan", amount: 744, date: new Date(2021, 11, 13) },
];
const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  function addExpenseHandler(newExpense) {
    setExpenses((preExpenses) => [newExpense, ...preExpenses]);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
