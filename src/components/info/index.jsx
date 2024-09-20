import "./info.css";
import { RELATIVE_IMG } from "../../Routes/relativePaths";

export function Info({ button, logo }) {
  return (
    <section className="info">
      <ul className="info-card">
        <li>{logo}</li>
        <li>
          <h3 className="info-title">Horario de atención</h3>
        </li>
        <li>
          <p>Lunes a Viernes 8:00 am - 5:00 pm</p>
        </li>
        <li>
          <p>Sábados 9:00 am - 5:00 pm</p>
        </li>
        <li>
          <p>Domingo 9:00 - 1:00 pm</p>
        </li>
      </ul>
      <ul className="info-card">
        <li>
          <img
            src={`${RELATIVE_IMG}/icons/icon-publicity.svg`}
            alt=""
            className="info-icon"
          />
        </li>
        <li>
          <p className="info-text">
            Tienes un negocio o evento y quieres darle publicidad a traves de
            nuestra pagina web las 24 horas del dia, no olvides que puedes
            contactarnos y con gusto te atenderemos.
          </p>
        </li>
      </ul>
      <ul className="info-card">
        <li>
          <img
            src={`${RELATIVE_IMG}/icons/icon-sale.svg`}
            alt=""
            className="info-icon"
          />
        </li>
        <li>
          <p className="info-text info-text-last">
            Si estas vendiendo algo y te interesaría publicarlo en nuestra
            pagina web, no olvides que puedes contactarnos y con gusto te
            atenderemos.
          </p>
        </li>
        <li>{button}</li>
      </ul>
    </section>
  );
}
