import Card from "../ui/Card";

import "./ExpenseForm.css";

export default function AddExpenseCard(props) {
  return (
    <Card className="new-expense">
      <button onClick={props.onNewUserRequest}>Nova despesa</button>
    </Card>
  );
}
