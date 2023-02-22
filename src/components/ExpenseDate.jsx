import "./ExpenseDate.css";

export default function ExpenseDate(expense) {
  const month = expense.date.toLocaleString("pt-BR", { month: "long" });
  const day = expense.date.toLocaleString("pt-BR", { day: "2-digit" });
  const year = expense.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__day">Dia: {day}</div>
      <div className="expense-date__month">Mês: {month}</div>
      <div className="expense-date__year">Ano: {year}</div>
    </div>
  );
}
