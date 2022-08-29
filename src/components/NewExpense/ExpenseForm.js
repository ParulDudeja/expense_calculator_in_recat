import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
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

// import React, { useState } from "react";
// import "./ExpenseForm.css";
// // import NewExpense from "./NewExpense";

// export default function ExpenseForm(props) {
//   const [enteredTitle, setEnteredTitle] = useState("");
//   const [enteredDate, setEnteredDate] = useState("");
//   const [enteredExpense, setEnteredExpense] = useState("");
//   //   const [userInput, setUserInput] = useState({
//   //     enteredTitle: "",
//   //     enteredDate: "",
//   //     enteredExpense: "",
//   //   });

//   const titleChangeHandler = (event) => {
//     setEnteredTitle(event.target.value);
//     // setUserInput({
//     //   ...userInput,
//     //   enteredTitle: event.target.value,
//     // });
//     // setUserInput((prevState) => {
//     //   return { ...prevState, enteredTitle: event.target.value };
//     // });
//   };

//   const dateChangeHandler = (event) => {
//     // way 1: setEnteredDate(event.target.value)
//     setEnteredDate(event.target.value);
//     // way 2: setUserInput({
//     //   ...userInput,
//     //   enteredDate: event.target.value,
//     // });
//     // it will not auto update react during complile so 3 way is better approch for passing multiple state into 1 useState. All work same but result may defer depend on last states
//     //3rd way:

//     // setUserInput((prevState) => {
//     //   return { ...prevState, enteredDate: event.target.value };
//     // });
//   };
//   const expenseChangeHandler = (event) => {
//     setEnteredExpense(event.target.value);
//     // setUserInput({
//     //   ...userInput,
//     //   enteredExpense: event.target.value,
//     // });
//     // setUserInput((prevState) => {
//     //   return { ...prevState, enteredExpense: event.target.value };
//     // });
//   };
//   const submitFormHandler = (event) => {
//     event.preventDefault();
//     const expenseData = {
//       title: enteredTitle,

//       expence: enteredExpense,
//       date: new Date(enteredDate),
//     };
//     // console.log(expenseData);
//     props.onSaveExpenseData(expenseData);
//     setEnteredDate("");
//     setEnteredExpense("");
//     setEnteredTitle("");
//   };

//   return (
//     <form onSubmit={submitFormHandler}>
//       <div className="new-expense__controls">
//         <div className="new-expense__control">
//           <label>Title</label>
//           <input
//             type="text"
//             value={enteredTitle}
//             onChange={titleChangeHandler}
//           />
//         </div>
//         <div className="new-expense__control">
//           <label>Amount</label>
//           <input
//             value={enteredExpense}
//             type="number"
//             min="0.01"
//             step="0.01"
//             onChange={expenseChangeHandler}
//           />
//         </div>
//         <div className="new-expense__control">
//           <label>Date</label>
//           <input
//             value={enteredDate}
//             type="date"
//             min="2015-01-01"
//             max="2050-12-31"
//             onChange={dateChangeHandler}
//           />
//         </div>
//       </div>
//       <div className="new-expense__actions">
//         <button type="submit">Add Expense</button>
//       </div>
//     </form>
//   );
// }
