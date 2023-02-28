import "./Card.css";

export default function Card(properties) {
  const classes = "card " + properties.className;
  return <div className={classes}>{properties.children}</div>;
}
