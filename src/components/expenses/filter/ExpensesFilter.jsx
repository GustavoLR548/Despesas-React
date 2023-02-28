import "./ExpensesFilter.css";

const MAX_YEARS_SPAN = 5;

function range(begin, end) {
  const years = [];
  for (let i = begin; i < end; i++) {
    years.push(i);
  }

  return years;
}

export default function ExpensesFilter(props) {
  const currentYear = new Date().getFullYear();

  const minYear = currentYear - MAX_YEARS_SPAN;

  const maxYear = currentYear + MAX_YEARS_SPAN;

  const selectHandler = (event) => {
    const value = event.target.value;
    props.onFilterUpdated(value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filtragem por ano</label>
        <select onChange={selectHandler} value={props.startValue}>
          {range(minYear, maxYear).map((value, index) => (
            <option key={index} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
