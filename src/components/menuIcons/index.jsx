import "./icon.css";

import { RELATIVE_IMG } from "../../Routes/relativePaths";

export function MenuIcon({ activate, active }) {
  return (
    <img
      className="icon"
      src={`${RELATIVE_IMG}icons/${active ? "close.svg" : "menu.svg"}`}
      alt="Icono de menu hamburger"
      onClick={activate}
    />
  );
}
