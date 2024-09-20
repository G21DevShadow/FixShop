import { RELATIVE_IMG } from "../../Routes/relativePaths";
import "./advantages.css";

export function Advantages({ title }) {
  return (
    <section className="advantages">
      <div className="advantages-content">
        {title}
        <ul className="advantages-list">
          <li className="advantages-item">
            <img
              src={`${RELATIVE_IMG}/icons/shipping-car.svg`}
              alt="Icono de un carro de envíos"
              className="advantages-icon"
            />
            <h2 className="advantages-subtitle">Envíos gratis</h2>
            <p className="advantages-text">
              Oferta por tiempo limitado. Disponible solo para el casco urbano,
              para mas información puedes contactarnos.
            </p>
          </li>
          <li className="advantages-item">
            <img
              src={`${RELATIVE_IMG}/icons/changes.svg`}
              alt="Icono de un carro de envíos"
              className="advantages-icon"
            />
            <h2 className="advantages-subtitle">Cambios y devoluciones</h2>
            <p className="advantages-text">
              Dentro de los 7 Dias posteriores a tu compra.
              <a href="#" className="advantages-click advantages-firstClick">
                CLICK AQUÍ
              </a>
              para conocer la política de cambios y devoluciones.
            </p>
          </li>
          <li className="advantages-item">
            <img
              src={`${RELATIVE_IMG}/icons/quality.svg`}
              alt="Icono de un carro de envíos"
              className="advantages-icon"
            />
            <h2 className="advantages-subtitle">Calidad - precio</h2>
            <p className="advantages-text">
              Te ofrecemos una gran variedad de productos increíbles a los
              mejores precios del mercado.
            </p>
          </li>
          <li className="advantages-item">
            <img
              src={`${RELATIVE_IMG}/icons/help-buy.svg`}
              alt="Icono de un carro de envíos"
              className="advantages-icon"
            />
            <h2 className="advantages-subtitle">Te ayudamos con tu compra</h2>
            <p className="advantages-text">
              <a href="#" className="advantages-click">
                HAZ CLICK AQUÍ
              </a>{" "}
              y recibe atención personalizada.
            </p>
          </li>
          <li className="advantages-item">
            <img
              src={`${RELATIVE_IMG}/icons/drives-sales.svg`}
              alt="Icono de un carro de envíos"
              className="advantages-icon"
            />
            <h2 className="advantages-subtitle">
              Impulsa tus ventas desde la comodidad de tu hogar
            </h2>
            <p className="advantages-text">
              Vende tus productos a través de nuestro sitio web y llega a más
              clientes sin complicaciones. Para más información no dudes en
              contactarnos. ¡Empieza a vender hoy mismo y haz crecer tu negocio
              con nosotros!
            </p>
          </li>
          <li className="advantages-item">
            <img
              src={`${RELATIVE_IMG}/icons/shop-buy.svg`}
              alt="Icono de un carro de envíos"
              className="advantages-icon"
            />
            <h2 className="advantages-subtitle">
              Apoya a emprendedores locales comprando a traves de nuestro sitio
              web
            </h2>
            <p className="advantages-text">
              Cada compra que realizas ayuda a fortalecer la economía de nuestra
              comunidad, respalda a los vendedores y emprendedores locales. Con
              tu apoyo, podemos hacer una gran diferencia. Explora nuestra
              variedad de productos y encuentra lo que necesitas.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
