import "./menu.css";

export function Menu({ children, active }) {
  return (
    <div className="containerNav">
      <nav className={`nav ${active ? "nav-active" : ""}`}>{children}</nav>
    </div>
  );
}
