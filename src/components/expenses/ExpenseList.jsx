import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./filter/ExpensesFilter";
import "./ExpenseList.css";

import Card from "../ui/Card";

import { useState } from "react";
import ExpensesChart from "./chart/ExpensesChart";

export default function ExpenseList(expenses) {
  const currentYear = new Date().getFullYear().toString();

  const [filterYear, setFilterYear] = useState(currentYear);

  const updateFilterYear = (year) => {
    setFilterYear(year);
  };

  const expensesFiltered = expenses.elements.filter((entry) => {
    return entry.date.getFullYear().toString() == filterYear;
  });

  let expensesContentJSX = (
    <h2 className="expenses-list__fallback"> Nenhuma despesa neste ano </h2>
  );

  if (expensesFiltered.length > 0)
    expensesContentJSX = expensesFiltered.map((entry) => (
      <ul className="expenses-list__item">
        <ExpenseItem
          key={entry.id}
          title={entry.title}
          amount={entry.amount}
          date={entry.date}
        />
      </ul>
    ));

  return (
    <Card className="expense-list">
      <ExpensesChart expenses={expensesFiltered} />
      <ExpensesFilter
        startValue={filterYear}
        onFilterUpdated={updateFilterYear}
      />
      {expensesContentJSX}
    </Card>
  );
}
