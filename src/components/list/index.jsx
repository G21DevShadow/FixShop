import "./list.css";
import { RELATIVE_IMG } from "../../Routes/relativePaths.js";

export function List({ logo, botons, activate, active }) {
  return (
    <div className="list-container">
      {logo}
      <ul className="list">
        <li className="item">
          <a href="#" className="link">
            Productos
          </a>
        </li>
        <li className="item">
          <a href="#" className="link">
            Contactos
          </a>
        </li>
        <li className="item">
          <a href="#" className="link">
            Reseñas
          </a>
        </li>
        <li className="item ">
          <div className="Services">
            <a href="#" className="link" onClick={activate}>
              Acerca de
            </a>
            <img
              src={`${RELATIVE_IMG}icons/icon-arrow-right.svg`}
              className={`icon-arrow-right ${
                active ? "icon-arrow-right-active" : ""
              }`}
              alt="Icono de flecha apuntando hacia la derecha"
            />
          </div>
          <ul className={`itemList ${active ? "itemList-active" : ""}`}>
            <a href="#" className="link subLink">
              Nosotros
            </a>
            <a href="#" className="link subLink">
              Servicios
            </a>
            <a href="#" className="link subLink">
              Horarios
            </a>
          </ul>
        </li>
        <li className="item">
          <a href="#" className="link">
            Como comprar
          </a>
        </li>
        <li className="item">
          <a href="#" className="link">
            Productos recientes
          </a>
        </li>
      </ul>
      {botons}
    </div>
  );
}
