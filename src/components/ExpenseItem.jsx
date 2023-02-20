import "./ExpenseItem.css";

export default function ExpenseItem(expense) {
  const month = expense.date.toLocaleString("pt-BR", { month: "short" });
  const day = expense.date.toLocaleString("pt-BR", { day: "2-digit" });
  const year = expense.date.getFullYear();

  return (
    <div className="expense-item">
      <div>
        <div>Dia: {day}</div>
        <div>Mês: {month}</div>
        <div>Ano: {year}</div>
      </div>
      <div className="expense-item__description">
        <h2>{expense.title}</h2>
        <div className="expense-item__price">R${expense.amount}</div>
      </div>
    </div>
  );
}
