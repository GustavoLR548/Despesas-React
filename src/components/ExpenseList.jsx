import ExpenseItem from "./ExpenseItem";

import "./ExpenseList.css";

import Card from "./Card";

export default function ExpenseList(expenses) {
  return (
    <Card className="expense-list">
      {expenses.elements.map((entry) => (
        <ExpenseItem
          title={entry.title}
          amount={entry.amount}
          date={entry.date}
        />
      ))}
    </Card>
  );
}
