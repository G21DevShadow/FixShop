import "./title.css";

export function Title({ text, color }) {
  return (
    <h2 style={{ color: color }} className="title">
      {text}
    </h2>
  );
}
