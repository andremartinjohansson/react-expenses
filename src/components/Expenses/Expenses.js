import { useState } from "react";

// import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

function Expenses(props) {
  const [selectedFilter, setSelectedFilter] = useState("");

  const changeFilterHandler = (filterData) => {
    setSelectedFilter(filterData);
  };

  const filteredExpenses = props.expenses.filter(
    (e) =>
      e.date.getFullYear().toString() === selectedFilter ||
      selectedFilter === ""
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedFilter}
        onChangeFilter={changeFilterHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
