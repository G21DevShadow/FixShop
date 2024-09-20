import { RELATIVE_IMG } from "../../Routes/relativePaths.js";
import "./logo.css";

export function Logo() {
  return (
    <img
      src={`${RELATIVE_IMG}images/logo.jpeg`}
      className="logo"
      alt="Logo de la pagina"
    />
  );
}
