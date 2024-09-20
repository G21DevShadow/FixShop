import "./form.css";
import { useValidateLength } from "../../hooks/all/countWords";

export function Form() {
  const { text, textExceeded, checkText } = useValidateLength();
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
          <label htmlFor="reaction" className="form-label">
            ¿Cual tu opinion acerca de esta pagina?
          </label>
          <label htmlFor="">
            <input
              type="radio"
              id=""
              name="reaction"
              value={1}
              className="form-inputRadio"
            />
          </label>
          <label htmlFor="">
            <input
              type="radio"
              id=""
              name="reaction"
              value={2}
              className="form-inputRadio"
            />
          </label>
          <label htmlFor="">
            <input
              type="radio"
              id=""
              name="reaction"
              value={3}
              className="form-inputRadio"
            />
          </label>
          <label htmlFor="">
            <input
              type="radio"
              id=""
              name="reaction"
              value={4}
              className="form-inputRadio"
            />
          </label>
          <label htmlFor="">
            <input
              type="radio"
              id=""
              name="reaction"
              value={5}
              className="form-inputRadio"
            />
          </label>
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
            placeholder="El comentario debe tener un máximo de 50 palabras."
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
