import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

import Card from "../ui/Card";

export default function ExpenseItem(expense) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={expense.date} />
        <div className="expense-item__description">
          <h2>{expense.title}</h2>
          <div className="expense-item__price">R${expense.amount}</div>
        </div>
      </Card>
    </li>
  );
}
