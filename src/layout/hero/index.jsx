import "./hero.css";

export function Hero({ children }) {
  return (
    <section className="hero">
      <div className="gradient"></div>
      {children}
    </section>
  );
}
