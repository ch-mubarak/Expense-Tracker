import React from "react";
import Date from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const { date, amount } = props;
  return (
    <Card className="expense-item">
      <Date date={date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">₹{amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
