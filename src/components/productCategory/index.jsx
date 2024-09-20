import "./productCategory.css";
import { removeClass } from "../../utils/functions/removeClass";

export function ProductCategory() {
  function handleClick(e) {
    e.preventDefault();
    const link = e.target;
    const element = document.querySelectorAll(".category-link-active");
    removeClass(element);
    link.classList.add("category-link-active");
  }
  return (
    <div className="category">
      <p className="category-text">
        Selecciona la categoría del producto que quieras comprar.
      </p>
      <ul className="category-list">
        <li className="category-item">
          <a
            href="#"
            className="category-link category-link-active"
            onClick={handleClick}
          >
            Productos recientes
          </a>
          <hr className="category-line" />
        </li>
        <li className="category-item">
          <a href="#" className="category-link " onClick={handleClick}>
            Accesorios
          </a>
          <hr className="category-line" />
        </li>
        <li className="category-item">
          <a href="#" className="category-link" onClick={handleClick}>
            Bolsos
          </a>
          <hr className="category-line" />
        </li>
        <li className="category-item">
          <a href="#" className="category-link" onClick={handleClick}>
            Calzado
          </a>
          <hr className="category-line" />
        </li>
        <li className="category-item">
          <a href="#" className="category-link" onClick={handleClick}>
            Mouses
          </a>
          <hr className="category-line" />
        </li>
      </ul>
    </div>
  );
}
