import "./welcome.css";
import { RELATIVE_IMG } from "../../Routes/relativePaths";

export function Welcome({ title, button }) {
  return (
    <section className="welcome">
      <img
        src={`${RELATIVE_IMG}/images/welcome-img.jpg`}
        alt="Imagen de un hombre con gafas de realidad virtual"
        className="welcome-img"
      />
      <div className="welcome-info">
        <h1 className="welcome-title">Bienvenido a FixShop</h1>
        <p className="welcome-text">
          FixShop es tu tienda en línea para todo lo que necesitas. En FixShop,
          no solo encontrarás lo último en tecnología innovadora, sino también
          una amplia variedad de productos pensados para ti y tu hogar. Desde
          dispositivos tecnológicos de vanguardia hasta ropa deportiva de alto
          rendimiento, juguetes para todas las edades, artículos para el hogar,
          alimentos y mucho más. Nuestro equipo está comprometido en brindarte
          una experiencia de compra excepcional, con productos de buena calidad
          y un servicio al cliente incomparable. ¡Explora nuestro catálogo y
          descubre cómo FixShop puede mejorar tu vida hoy mismo!
        </p>
        {button}
      </div>
    </section>
  );
}
