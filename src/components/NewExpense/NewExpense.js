import { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [addingExpense, setAddingExpense] = useState(false);

  const saveExpenseHandler = (enteredExpenseData) => {
    const ExpenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onSaveExpense(ExpenseData);
    toggleNewExpense();
  };

  const toggleNewExpense = () => {
    setAddingExpense(!addingExpense);
  };

  return (
    <div className="new-expense">
      {!addingExpense && (
        <button onClick={toggleNewExpense}>New Expense</button>
      )}
      {addingExpense && (
        <ExpenseForm
          toggle={toggleNewExpense}
          onSaveExpense={saveExpenseHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
