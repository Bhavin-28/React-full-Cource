import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  const currentDate = new Date();
  const formatedDate = `${currentDate.getDate()}-${
    currentDate.getMonth() + 1
  }-${currentDate.getFullYear()}`;

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(formatedDate);

  
  // ! here we can declare single state insted of 3 different state
  // const [inputValue, setInputValue] = useState({
  //   title: "",
  //   amount: "",
  //   date: "",
  // });


 // ! using this we can set the state using spread operator
/*  const titleChangeHandler = (e) => {
    setInputValue({
      ...inputValue,
      title : e.target.value,
    });

    setInputValue( (prevState) => {
      console.log("PrevState",...prevState,inputValue);

      return {...prevState, setInputValue : e.target.value};
    });
  }; */

//! using this we can set the state using previous state 
  // const titleChangeHandler = (e) => {
  //   setTitle((prevState) => {
  //     return { ...prevState, title: e.target.value };
  //   });
  // };

  //! here i can set the state using three different onChange event
  const titleChangeHandler = (e) => {
    setTitle(e.target.value)
  };
  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  // ! Here i can create the same change event for all the three state event update

  // const inputHandler = (e,value) => {
    
  //   if (e === 'title') {
  //     setTitle(value)
  //   }else if(e === 'amount'){
  //     setAmount(value);
  //   }else{
  //     setDate(value);
  //   }
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    const expenseData = {
      title : title,
      amount : amount,
      date : new Date(date)
    }
    console.log("user Entered Data",expenseData);
    setTitle('');
    setAmount('');
    setDate('');
  }


  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <h6>The Current Date is {formatedDate}</h6>

          <label htmlFor=""> Title </label>
          <input
            type="text"
            className="check"
            value={title}
            onChange={titleChangeHandler}
            // onChange={ (e) => inputHandler('title',e.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor=""> Amount </label>
          <input
            type="number"
            min="0.01"
            step="0.1"
            value={amount}
            onChange={amountChangeHandler}
            // onChange={ (e) => inputHandler('amount',e.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor=""> Date </label>
          <input
            type="date"
            min="2020-20-09"
            max="2023-01-09"
            value={date}
            onChange={dateChangeHandler}
            // onChange={ (e) => inputHandler('date',e.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit"> Add Expense </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
