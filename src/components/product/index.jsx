import "./product.css";
import { RELATIVE_IMG } from "../../Routes/relativePaths";

export function Product({
  active,
  toggleActive,
  images,
  name,
  description,
  units,
  code,
  price,
}) {
  function handleClick(e) {
    e.preventDefault();
    toggleActive();
  }
  return (
    <div className="productCard">
      <figure className="productCard-figure">
        <img src={`${images}`} alt="" />
      </figure>
      <h2 className="productCard-name">{name}</h2>
      <div className="productCard-content">
        <div
          className={`productCard-info ${
            active ? "productCard-info-isActive" : ""
          }`}
        >
          <p className="productCard-description">{description}</p>
          <a href="#" className="productCard-arrowRight" onClick={handleClick}>
            <img
              src={`${RELATIVE_IMG}/icons/icon-arrow-right.svg`}
              alt="Imagen de icono"
              className="productCard-iconArrow"
            />
          </a>
          <p className="productCard-textCharacteristics">
            Click para ver las características
          </p>
          <ul className="productCard-list">
            <li className="productCard-item">
              <p>Unidades disponibles:</p>
              <span>{units}</span>
            </li>
            <li className="productCard-item">
              <p>Código de producto:</p>
              <span>{code}</span>
            </li>
            <li className="productCard-item">
              <p>Precio:</p>
              <span>{price}</span>
            </li>
          </ul>
        </div>
        <div
          className={`productCard-contentCharacteristics ${
            active ? "productCard-contentCharacteristics-isActive" : ""
          }`}
        >
          <h3 className="productCard-contentCharacteristics-title">
            Características
          </h3>
          <p className="productCard-contentCharacteristics-text"></p>
          <ul className="productCard-contentCharacteristics-list">
            <li className="productCard-contentCharacteristics-item">
              <p>Material:</p>
              <span></span>
            </li>
            <li className="productCard-contentCharacteristics-item">
              <p>Peso:</p>
              <span></span>
            </li>
            <li className="productCard-contentCharacteristics-item">
              <p>Dimensiones:</p>
              <span></span>
            </li>
            <li className="productCard-contentCharacteristics-item">
              <p>Color/variedad:</p>
              <span></span>
            </li>
            <li className="productCard-contentCharacteristics-item">
              <p>Garantía:</p>
              <span></span>
            </li>
          </ul>
          <a href="#" className="productCard-arrowRight" onClick={handleClick}>
            <img
              src={`${RELATIVE_IMG}/icons/icon-arrow-right.svg`}
              alt="Imagen de icono"
              className="productCard-iconArrow productCard-iconArrow-Characteristics"
            />
          </a>
          <p className="productCard-textCharacteristics">Regresar</p>
        </div>
      </div>
      <div className="productsCard-buttonsContent">
        <a href="" className="productsCard-buttons">
          Comprar
        </a>
        <a href="" className="productsCard-buttons">
          Agregar al carrito
        </a>
      </div>
    </div>
  );
}
