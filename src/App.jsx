import { useState } from "react";
import ExpenseList from "./components/expenses/ExpenseList";
import NewExpense from "./components/expenses/form/NewExpense";

import "./App.css";

export default function App() {
  const [expenses, setExpenses] = useState([]);

  const addNewExpense = (userData) => {
    setExpenses((previousExpenses) => {
      const newId = (
        Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) %
        new Date().getTime()
      ).toString();
      const expense = {
        id: newId,
        title: userData.title,
        amount: +userData.amount,
        date: userData.date,
      };

      const newExpenses = [...previousExpenses];

      newExpenses.push(expense);

      return newExpenses;
    });
  };

  return (
    <div>
      <h1 className="title">Minhas despesas</h1>
      <NewExpense onNewExpense={addNewExpense} />
      <ExpenseList elements={expenses} />
    </div>
  );
}
