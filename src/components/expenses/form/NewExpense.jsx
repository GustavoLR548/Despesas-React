import { useState } from "react";
import AddExpenseCard from "./AddExpenseCard";

import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props) {
  const [showForm, setShowForm] = useState(false);

  const expenseFormOperationFinished = (expense) => {
    if (Object.keys(expense).length !== 0) props.onNewExpense(expense);

    setShowForm(false);
  };

  const userRequestedToAddNewExpense = (event) => {
    setShowForm(true);
  };

  if (showForm)
    return <ExpenseForm onOperationFinished={expenseFormOperationFinished} />;
  else
    return <AddExpenseCard onNewUserRequest={userRequestedToAddNewExpense} />;
}
