import "./comments.css";

export function Comments({ title, form, commentCard }) {
  return (
    <section className="comments">
      <div className="comments-text">
        {title}
        <p className="comments-paragraph">
          En esta sección puedes dejar un comentario sobre tu experiencia
          utilizando FixShop.
        </p>
      </div>
      <section className="comments-container">
        {form}
        {commentCard}
      </section>
    </section>
  );
}
