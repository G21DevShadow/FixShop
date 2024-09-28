import "./form.css";
import { useState } from "react";
import { useValidateLength } from "../../hooks/all/countWords";
import { EMOTION_ICONS } from "../../utils/constants";

export function Form() {
  const { text, textExceeded, checkText } = useValidateLength();

  const [selectedValue, setSelectedValue] = useState("");

  const handleIconClick = (input) => {
    setSelectedValue(input.target.value);
  };
  return (
    <form action="" className="form">
      <span></span>
      <div className="form-container">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Escriba su nombre (Opcional)
          </label>
          <input type="text" id="name" className="form-inputName" />
        </div>
        <div className="form-group">
          <label htmlFor="" className="form-label form-reactionText">
            ¿Cual tu opinion acerca de esta pagina?
          </label>
          <div className="form-reactionGroup">
            {EMOTION_ICONS.map((icon) => {
              const { id, value, url, urlYellow, alt } = icon;
              let isSelected = selectedValue === value;
              return (
                <>
                  <label htmlFor={id} key={value} className="form-label">
                    <img
                      src={`${isSelected ? urlYellow : url}`}
                      alt={alt}
                      className="form-reaction"
                    />
                    <input
                      type="radio"
                      id={id}
                      name="reaction"
                      value={value}
                      className={`form-inputRadio 
                      `}
                      onClick={handleIconClick}
                      required
                    />
                  </label>
                </>
              );
            })}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="comment" className="form-label">
            Escribe tu comentario
          </label>
          <textarea
            onChange={checkText}
            name=""
            id="comment"
            className="form-area"
            placeholder="El comentario debe tener un máximo de 30 palabras."
            required
          >
            {text && text}
          </textarea>
        </div>
        <input
          type="submit"
          value={"Publicar"}
          className={`form-btnSend ${
            textExceeded ? "form-btnSend-blocked" : ""
          }`}
        />
      </div>
    </form>
  );
}
