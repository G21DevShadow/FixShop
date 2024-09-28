import "./footerContent.css";
import { RELATIVE_IMG } from "../../Routes/relativePaths";

export function FooterContent() {
  return (
    <section className="footer-container">
      <figure className="footer-figure">
        <img src={`${RELATIVE_IMG}/images/logo.jpeg`} className="footer-logo" />
      </figure>
      <div className="footer-contactLocation">
        <ul className="footer-list">
          <li className="footer-item">Contactos</li>
          <li className="footer-item footer-itemContact">
            <img
              src={`${RELATIVE_IMG}/icons/footerIcon/telephone.svg`}
              alt=""
              className="footer-icon"
            />
            313 798 9830
          </li>
          <li className="footer-item footer-itemContact">
            <img
              src={`${RELATIVE_IMG}/icons/footerIcon/gmail.svg`}
              alt=""
              className="footer-icon"
            />
            fixshop2024@gmail.com
          </li>
          <li className="footer-item footer-itemContact">
            <img
              src={`${RELATIVE_IMG}/icons/footerIcon/whatsapp.svg`}
              alt=""
              className="footer-icon"
            />
            313 798 9830
          </li>
        </ul>
        <ul className="footer-list footer-listFloat">
          <li className="footer-item">Ubicación</li>
          <li className="footer-item ">
            <img
              src={`${RELATIVE_IMG}/icons/footerIcon/location.svg`}
              alt=""
              className="footer-icon"
            />
          </li>
          <li>San pedro de Uraba - Antioquia</li>
        </ul>
      </div>
      <div className="footer-product">
        <ul className="footer-list">
          <li className="footer-item">Productos</li>
          <li className="footer-item">Accesorios</li>
          <li className="footer-item">Auriculares bluetooth</li>
          <li className="footer-item">Calzado</li>
          <li className="footer-item">Artículos para el hogar</li>
          <li className="footer-item">Ropa deportiva</li>
          <li className="footer-item">Instalación O.S</li>
          <li className="footer-item">Activación Office</li>
        </ul>
      </div>
      <div className="footer-corporative">
        <ul className="footer-list">
          <li className="footer-item">Corporativo</li>
          <li className="footer-item">Nuestros servicios</li>
          <li className="footer-item">Sobre nosotros</li>
          <li className="footer-item">Política de devoluciones</li>
          <li className="footer-item">Preguntas frecuentes</li>
          <li className="footer-item">Reseñas</li>
        </ul>
      </div>
      <div className="footer-buttonContent">
        <div className="">
          <p>FixShop - &copy; Copyright 2024 todos los derechos reservados.</p>
          <p>Desarrollado por DevShadow</p>
        </div>
      </div>
    </section>
  );
}
