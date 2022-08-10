import React from "react";
import "./ExpenseDate.css";

function ExpenseDate(props) {
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-date">
      <p className="expense-date__month"> {month}</p>
      <p className=" expense-date__day"> {day}</p>
      <p className="expense-date__year"> {year}</p>
    </div>
  );
}
export default ExpenseDate;
