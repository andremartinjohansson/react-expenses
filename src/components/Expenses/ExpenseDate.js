import "./ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("se-SE", { month: "long" });
  const day = props.date.toLocaleString("se-SE", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-month">{month}</div>
      <div className="expense-year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
