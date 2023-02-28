import { useState } from "react";
import "./ExpenseForm.css";

const MAX_YEARS_SPAN = 5;

export default function ExpenseForm(props) {
  const today = new Date();

  const minPurchaseDate = getMinPurchaseDate(today);

  const maxPurchaseDate = getMaxPurchaseDate(today);

  const [userInput, setUserInput] = useState({
    date: today,
    amount: "",
    title: "",
  });

  const cancelOperationHandler = (event) => {
    props.onOperationFinished({});
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = { ...userInput };

    setUserInput({
      date: today,
      amount: "",
      title: "",
    });

    props.onOperationFinished(expenseData);
  };

  const titleChangedHandler = (event) => {
    const newTitle = event.target.value;
    setUserInput((previousUserInput) => {
      return {
        ...previousUserInput,
        title: newTitle,
      };
    });
  };

  const amountChangedHandler = (event) => {
    const newAmount = event.target.value;
    setUserInput((previousUserInput) => {
      return {
        ...previousUserInput,
        amount: newAmount,
      };
    });
  };

  const dateChangedHandler = (event) => {
    const dateString = event.target.value;
    const newDate = new Date(dateString);
    setUserInput((previousUserInput) => {
      return {
        ...previousUserInput,
        date: newDate,
      };
    });
  };

  return (
    <div className="new-expense">
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__controls">
            <label>Título</label>
            <input
              type="text"
              onChange={titleChangedHandler}
              value={userInput.title}
            />
          </div>
          <div className="new-expense__controls">
            <label>Valor</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={userInput.amount}
              onChange={amountChangedHandler}
            />
          </div>
          <div className="new-expense__controls">
            <label>Data</label>
            <input
              type="date"
              min={formatDate(minPurchaseDate)}
              max={formatDate(maxPurchaseDate)}
              value={formatDate(userInput.date)}
              onChange={dateChangedHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Adicionar</button>
          <button type="button" onClick={cancelOperationHandler}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

function getMinPurchaseDate(today) {
  const minPurchaseDate = new Date();

  minPurchaseDate.setFullYear(today.getFullYear() - MAX_YEARS_SPAN);

  return minPurchaseDate;
}

function getMaxPurchaseDate(today) {
  const maxPurchaseDate = new Date();

  maxPurchaseDate.setFullYear(today.getFullYear() + MAX_YEARS_SPAN);

  return maxPurchaseDate;
}

function formatDate(date) {
  const year = date.getFullYear();

  const month = String(date.getMonth() + 1).padStart(2, "0");

  const day = String(date.getDate()).padStart(2, "0");

  const date_formatted = year + "-" + month + "-" + day;

  return date_formatted;
}
